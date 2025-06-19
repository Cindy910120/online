import { ref, computed } from 'vue'
import { achievements, type Achievement } from '~/data/achievements'

export const useAchievements = () => {
  const userAchievements = ref<Achievement[]>([...achievements])
  const unlockedAchievements = ref<string[]>([])
  
  // 從 localStorage 載入成就數據
  const loadAchievements = () => {
    try {
      const saved = localStorage.getItem('userAchievements')
      if (saved) {
        const parsed = JSON.parse(saved)
        unlockedAchievements.value = parsed.unlocked || []
        
        // 更新成就狀態
        userAchievements.value = userAchievements.value.map(achievement => ({
          ...achievement,
          unlocked: unlockedAchievements.value.includes(achievement.id),
          unlockedAt: parsed.unlockedDates?.[achievement.id] ? new Date(parsed.unlockedDates[achievement.id]) : undefined
        }))
      }
    } catch (error) {
      console.error('載入成就數據失敗:', error)
    }
  }
  
  // 儲存成就數據
  const saveAchievements = () => {
    try {
      const unlockedDates: Record<string, string> = {}
      userAchievements.value.forEach(achievement => {
        if (achievement.unlocked && achievement.unlockedAt) {
          unlockedDates[achievement.id] = achievement.unlockedAt.toISOString()
        }
      })
      
      const data = {
        unlocked: unlockedAchievements.value,
        unlockedDates
      }
      localStorage.setItem('userAchievements', JSON.stringify(data))
    } catch (error) {
      console.error('儲存成就數據失敗:', error)
    }
  }
  
  // 解鎖成就
  const unlockAchievement = (achievementId: string) => {
    const achievement = userAchievements.value.find(a => a.id === achievementId)
    if (achievement && !achievement.unlocked) {
      achievement.unlocked = true
      achievement.unlockedAt = new Date()
      achievement.progress = 100
      
      if (!unlockedAchievements.value.includes(achievementId)) {
        unlockedAchievements.value.push(achievementId)
      }
      
      saveAchievements()
      
      // 觸發成就解鎖通知
      showAchievementNotification(achievement)
      
      return true
    }
    return false
  }
  
  // 更新成就進度
  const updateAchievementProgress = (achievementId: string, progress: number) => {
    const achievement = userAchievements.value.find(a => a.id === achievementId)
    if (achievement && !achievement.unlocked) {
      achievement.progress = Math.min(progress, 100)
      
      if (achievement.progress >= 100) {
        unlockAchievement(achievementId)
      }
    }
  }
  
  // 檢查成就條件
  const checkAchievements = (userProgress: any) => {
    const newlyUnlocked: Achievement[] = []
    
    userAchievements.value.forEach(achievement => {
      if (achievement.unlocked) return
      
      let progress = 0
      let shouldUnlock = false
      
      const { condition } = achievement
        switch (condition.type) {
        case 'skill_count':
          const skillCount = countUserSkills(userProgress)
          const skillTarget = condition.target as number
          progress = Math.min((skillCount / skillTarget) * 100, 100)
          shouldUnlock = skillCount >= skillTarget
          break
          
        case 'task_complete':
          const completedTasks = countCompletedTasks(userProgress)
          const taskTarget = condition.target as number
          progress = Math.min((completedTasks / taskTarget) * 100, 100)
          shouldUnlock = completedTasks >= taskTarget
          break
          
        case 'level_reach':
          const currentLevel = userProgress.level || 1
          const levelTarget = condition.target as number
          progress = Math.min((currentLevel / levelTarget) * 100, 100)
          shouldUnlock = currentLevel >= levelTarget
          break
          
        case 'tree_complete':
          if (typeof condition.target === 'string') {
            // 特定技能樹完成
            shouldUnlock = isSkillTreeComplete(userProgress, condition.target)
            progress = shouldUnlock ? 100 : getSkillTreeProgress(userProgress, condition.target)
          } else {
            // 完成指定數量的技能樹
            const completedTrees = countCompletedSkillTrees(userProgress)
            const treeTarget = condition.target as number
            progress = Math.min((completedTrees / treeTarget) * 100, 100)
            shouldUnlock = completedTrees >= treeTarget
          }
          break
          
        case 'consecutive_days':
          const consecutiveDays = getConsecutiveDays(userProgress)
          const dayTarget = condition.target as number
          progress = Math.min((consecutiveDays / dayTarget) * 100, 100)
          shouldUnlock = consecutiveDays >= dayTarget
          break
          
        case 'custom_task':
          const customTasks = countCustomTasks(userProgress)
          const customTarget = condition.target as number
          progress = Math.min((customTasks / customTarget) * 100, 100)
          shouldUnlock = customTasks >= customTarget
          break
          
        case 'profile_complete':
          shouldUnlock = isProfileComplete(userProgress)
          progress = shouldUnlock ? 100 : getProfileCompleteness(userProgress)
          break
          
        case 'first_time':
          shouldUnlock = checkFirstTimeAction(userProgress, condition.target as string)
          progress = shouldUnlock ? 100 : 0
          break
      }
      
      achievement.progress = progress
      
      if (shouldUnlock) {
        unlockAchievement(achievement.id)
        newlyUnlocked.push(achievement)
      }
    })
    
    return newlyUnlocked
  }
  
  // 顯示成就解鎖通知
  const showAchievementNotification = (achievement: Achievement) => {
    // 這裡可以觸發全局通知系統
    console.log(`🎉 成就解鎖: ${achievement.name} - ${achievement.description}`)
    
    // 可以發送自定義事件給其他組件
    if (process.client) {
      window.dispatchEvent(new CustomEvent('achievementUnlocked', { 
        detail: achievement 
      }))
    }
  }
  
  // 輔助函數
  const countUserSkills = (userProgress: any): number => {
    let total = 0
    if (userProgress.skillTrees) {
      Object.values(userProgress.skillTrees).forEach((tree: any) => {
        if (tree && tree.skills) {
          total += Object.keys(tree.skills).length
        }
      })
    }
    return total
  }
  
  const countCompletedTasks = (userProgress: any): number => {
    let total = 0
    if (userProgress.tasks) {
      total += (userProgress.tasks.completed || []).length
      if (userProgress.tasks.custom) {
        total += userProgress.tasks.custom.filter((task: any) => task.status === 'completed').length
      }
    }
    return total
  }
  
  const countCompletedSkillTrees = (userProgress: any): number => {
    // 這裡需要根據技能樹的完成條件來判斷
    // 暫時簡化處理
    return 0
  }
  
  const isSkillTreeComplete = (userProgress: any, treeName: string): boolean => {
    // 檢查特定技能樹是否完成
    return false
  }
  
  const getSkillTreeProgress = (userProgress: any, treeName: string): number => {
    // 獲取技能樹完成進度
    return 0
  }
  
  const getConsecutiveDays = (userProgress: any): number => {
    // 計算連續登入天數
    return 0
  }
  
  const countCustomTasks = (userProgress: any): number => {
    if (userProgress.tasks && userProgress.tasks.custom) {
      return userProgress.tasks.custom.length
    }
    return 0
  }
  
  const isProfileComplete = (userProgress: any): boolean => {
    // 檢查個人資料是否完整
    return !!(userProgress.profile?.name && userProgress.profile?.major)
  }
  
  const getProfileCompleteness = (userProgress: any): number => {
    let completeness = 0
    if (userProgress.profile?.name) completeness += 25
    if (userProgress.profile?.major) completeness += 25
    if (userProgress.profile?.skills?.length > 0) completeness += 25
    if (userProgress.profile?.interests?.length > 0) completeness += 25
    return completeness
  }
  
  const checkFirstTimeAction = (userProgress: any, action: string): boolean => {
    return userProgress.firstTimeActions?.[action] || false
  }
  
  // Computed properties
  const totalAchievements = computed(() => userAchievements.value.length)
  const unlockedCount = computed(() => unlockedAchievements.value.length)
  const completionPercentage = computed(() => 
    totalAchievements.value > 0 ? Math.round((unlockedCount.value / totalAchievements.value) * 100) : 0
  )
  
  const achievementsByCategory = computed(() => {
    const grouped: Record<string, Achievement[]> = {}
    userAchievements.value.forEach(achievement => {
      if (!achievement.hidden || achievement.unlocked) {
        if (!grouped[achievement.category]) {
          grouped[achievement.category] = []
        }
        grouped[achievement.category].push(achievement)
      }
    })
    return grouped
  })
  
  const recentUnlocked = computed(() => {
    return userAchievements.value
      .filter(a => a.unlocked && a.unlockedAt)
      .sort((a, b) => (b.unlockedAt?.getTime() || 0) - (a.unlockedAt?.getTime() || 0))
      .slice(0, 5)
  })
  
  return {
    userAchievements,
    unlockedAchievements,
    totalAchievements,
    unlockedCount,
    completionPercentage,
    achievementsByCategory,
    recentUnlocked,
    loadAchievements,
    saveAchievements,
    unlockAchievement,
    updateAchievementProgress,
    checkAchievements,
    showAchievementNotification
  }
}
