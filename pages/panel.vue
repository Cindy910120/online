<template>
  <div class="min-h-screen tech-bg tech-grid-bg relative">
    <!-- 載入畫面 -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p class="text-cyan-400 text-lg font-semibold">載入個人面板中...</p>
      </div>
    </div>

    <!-- 主要內容 -->
    <div v-else-if="isAuthenticated" class="container mx-auto px-4 py-8">
      <!-- 返回按鈕 -->
      <button 
        @click="goToHome"
        class="tech-button-complex mb-6"
      >
        <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        回到選單
      </button>

      <!-- 等級系統標題區域 -->
      <div class="tech-frame mb-8">
        <div class="p-6">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-4xl font-bold text-white mb-2">
                <span class="tech-status mr-4">Lv.{{ currentLevel }}</span>
                個人發展面板
              </h1>
              <p class="text-gray-400 text-lg">{{ userProfile?.major || '未設定科系' }} - 技能發展統計</p>
              <div class="tech-progress mt-4 max-w-md">
                <div class="tech-progress-bar" :style="`width: ${levelProgress}%`"></div>
              </div>
              <p class="text-sm text-cyan-400 mt-2">
                經驗值: {{ currentExp }}/{{ nextLevelExp }} 
                <span class="ml-4">距離 Lv.{{ currentLevel + 1 }} 還需 {{ nextLevelExp - currentExp }} 經驗</span>
              </p>
            </div>
            <div class="text-right">
              <div class="tech-status-badge mb-2">{{ userProfile?.major || '未設定科系' }}</div>
              <p class="text-sm text-gray-400">主修科系</p>
              <div class="mt-2 text-cyan-400 font-bold text-lg">Lv.{{ currentLevel }} / 100</div>
            </div>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 快速導航 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div @click="navigateTo('/skills')" class="tech-grid-card-v2 group relative cursor-pointer">
          <div class="tech-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">技能樹系統</h3>
          <p class="text-gray-400 text-sm mb-4">學習專業技能，解鎖新能力</p>
          
          <div class="tech-progress">
            <div class="tech-progress-bar" :style="`width: ${skillProgress}%`"></div>
          </div>
          <div class="text-xs text-cyan-400 mt-2">已完成: {{ completedSkillsCount }} / {{ totalSkillsCount }}</div>
          
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
        </div>

        <div @click="navigateTo('/tasks')" class="tech-grid-card-v2 group relative cursor-pointer">
          <div class="tech-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">任務系統</h3>
          <p class="text-gray-400 text-sm mb-4">接取任務，獲得經驗值</p>
          
          <div class="tech-progress">
            <div class="tech-progress-bar" :style="`width: ${taskProgress}%`"></div>
          </div>
          <div class="text-xs text-cyan-400 mt-2">進行中: {{ activeTasksCount }} | 已完成: {{ completedTasksCount }}</div>
          
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>
      </div>

      <!-- 統計資訊 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 學習統計 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              學習統計
            </h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">當前等級</span>
                <span class="text-cyan-400 font-bold text-lg">Lv.{{ currentLevel }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">總經驗值</span>
                <span class="text-green-400 font-bold">{{ totalExp }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">已完成技能</span>
                <span class="text-blue-400 font-bold">{{ completedSkillsCount }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">完成任務數</span>
                <span class="text-purple-400 font-bold">{{ completedTasksCount }}</span>
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>

        <!-- 個人資料 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              個人資料
            </h3>
            <div class="space-y-3">
              <div v-if="userProfile?.education" class="info-item">
                <span class="text-gray-400">學歷:</span>
                <span class="text-white ml-2">{{ userProfile.education }}</span>
              </div>
              <div v-if="userProfile?.major" class="info-item">
                <span class="text-gray-400">科系:</span>
                <span class="text-cyan-400 ml-2 font-medium">{{ userProfile.major }}</span>
              </div>
              <div v-if="userProfile?.skills?.length" class="info-item">
                <span class="text-gray-400">專長技能:</span>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span v-for="skill in userProfile.skills.slice(0, 3)" :key="skill" class="skill-tag">{{ skill }}</span>
                  <span v-if="userProfile.skills.length > 3" class="text-gray-400 text-sm">+{{ userProfile.skills.length - 3 }}個</span>
                </div>
              </div>
              <div v-if="!userProfile?.major" class="text-gray-500 text-sm">
                <button @click="navigateTo('/profile')" class="text-cyan-400 hover:underline">
                  前往個人資料頁面補充資訊
                </button>
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>

        <!-- 近期活動 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              近期活動
            </h3>
            <div class="space-y-3">
              <div v-if="recentActivities.length === 0" class="text-gray-500 text-sm text-center py-4">
                暫無活動記錄
              </div>
              <div v-else v-for="activity in recentActivities.slice(0, 5)" :key="activity.id" class="activity-item">
                <div class="flex items-start space-x-3">
                  <div :class="[
                    'w-2 h-2 rounded-full mt-2',
                    activity.type === 'skill' ? 'bg-cyan-400' : 
                    activity.type === 'task' ? 'bg-green-400' : 'bg-purple-400'
                  ]"></div>
                  <div class="flex-1">
                    <p class="text-white text-sm">{{ activity.description }}</p>
                    <p class="text-gray-400 text-xs">{{ formatDate(activity.timestamp) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>
      </div>
    </div>

    <!-- 未登入狀態 -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <h1 class="text-2xl font-bold text-white mb-4">請先登入</h1>
        <button @click="navigateTo('/login')" class="tech-button-complex">
          前往登入
        </button>
      </div>
    </div>

    <!-- 通知彈窗 -->
    <div v-if="showNotification" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="tech-panel max-w-md w-full mx-4">
        <h3 class="text-xl font-bold text-cyan-400 mb-4">系統通知</h3>
        <p class="text-white mb-6">{{ notificationMessage }}</p>
        <button @click="showNotification = false" class="tech-button w-full">
          確認
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useFirebase } from '~/composables/useFirebase'

// 設定頁面中介軟體
definePageMeta({
  middleware: 'auth'
})

const { user, isAuthenticated, getUserProfile } = useAuth()
const { saveUserProgress, getUserProgress } = useFirebase()
const loading = ref(true)
const userProfile = ref<any>(null)

// 通知系統
const showNotification = ref(false)
const notificationMessage = ref('')

// 等級系統相關（從Firebase同步） - 使用新的等級公式
const userExpRef = ref(0)
const completedSkills = ref([])
const completedTasks = ref([])
const activeTasks = ref([])
const customTasks = ref([])
const recentActivities = ref([])

// 計算當前等級 - 使用累積經驗公式 (Lv.n 需要 n*10 經驗)
const currentLevel = computed(() => {
  let level = 1
  let totalExpNeeded = 0
  
  while (level <= 100) {
    totalExpNeeded += level * 10
    if (userExpRef.value < totalExpNeeded) {
      break
    }
    level++
  }
  
  return Math.min(100, level)
})

// 當前經驗值
const currentExp = computed(() => userExpRef.value)

// 計算到下一級所需的總經驗
const nextLevelExp = computed(() => {
  let totalExp = 0
  for (let i = 1; i <= currentLevel.value; i++) {
    totalExp += i * 10
  }
  return totalExp
})

// 等級進度百分比
const levelProgress = computed(() => {
  // 計算當前等級的進度
  let currentLevelStartExp = 0
  for (let i = 1; i < currentLevel.value; i++) {
    currentLevelStartExp += i * 10
  }
  
  const expInCurrentLevel = currentExp.value - currentLevelStartExp
  const expNeededForLevel = currentLevel.value * 10
  
  return Math.min(100, (expInCurrentLevel / expNeededForLevel) * 100)
})

// 總經驗值就是當前經驗值
const totalExp = computed(() => currentExp.value)

// 技能統計
const completedSkillsCount = computed(() => completedSkills.value.length)
const totalSkillsCount = computed(() => {
  // 根據科系計算總技能數
  const major = userProfile.value?.major || ''
  if (major.includes('電機') || major.includes('資訊') || major.includes('機械')) {
    return 9 // 每個科系3個等級 x 3個技能
  }
  return 9 // 預設通用技能
})

const skillProgress = computed(() => {
  if (totalSkillsCount.value === 0) return 0
  return Math.round((completedSkillsCount.value / totalSkillsCount.value) * 100)
})

// 任務統計
const activeTasksCount = computed(() => activeTasks.value.length)
const completedTasksCount = computed(() => completedTasks.value.length)

const taskProgress = computed(() => {
  const total = activeTasksCount.value + completedTasksCount.value
  if (total === 0) return 0
  return Math.round((completedTasksCount.value / total) * 100)
})

// 載入使用者資料
const loadUserProfile = async () => {
  if (!user.value) return

  try {
    const profile = await getUserProfile()
    if (profile) {
      userProfile.value = profile
    }
    
    // 從Firebase載入進度
    await loadProgressFromFirebase()
  } catch (error) {
    console.error('載入個人資料失敗:', error)
  } finally {
    loading.value = false
  }
}

// 從Firebase載入進度
const loadProgressFromFirebase = async () => {
  if (!user.value) return

  try {
    const progress = await getUserProgress(user.value.uid)
    if (progress) {
      userExpRef.value = progress.exp || 0
      completedSkills.value = progress.completedSkills || []
      completedTasks.value = progress.completedTasks || []
      activeTasks.value = progress.activeTasks || []
      customTasks.value = progress.customTasks || []
      recentActivities.value = progress.recentActivities || []
    }
  } catch (error) {
    console.error('從Firebase載入進度失敗:', error)
    // 如果Firebase載入失敗，嘗試從localStorage載入
    loadProgressFromLocal()
  }
}

// 從localStorage載入進度（備用方案）
const loadProgressFromLocal = () => {
  if (!user.value) return

  const savedData = localStorage.getItem(`user_progress_${user.value.uid}`)
  if (savedData) {
    const data = JSON.parse(savedData)
    userExpRef.value = data.exp || 0
    completedSkills.value = data.completedSkills || []
    completedTasks.value = data.completedTasks || []
    activeTasks.value = data.activeTasks || []
    customTasks.value = data.customTasks || []
    recentActivities.value = data.recentActivities || []
  }
}

// 保存進度到Firebase
const saveProgressToFirebase = async () => {
  if (!user.value) return

  const progressData = {
    currentExp: currentExp.value,
    currentLevel: currentLevel.value,
    completedSkills: completedSkills.value,
    completedTasks: completedTasks.value,
    activeTasks: activeTasks.value,
    customTasks: customTasks.value,
    recentActivities: recentActivities.value,
    lastUpdated: new Date().toISOString()
  }

  try {
    await saveUserProgress(user.value.uid, progressData)
    // 同時保存到localStorage作為備份
    localStorage.setItem(`user_progress_${user.value.uid}`, JSON.stringify(progressData))
  } catch (error) {
    console.error('保存進度到Firebase失敗:', error)
    // 如果Firebase保存失敗，至少保存到localStorage
    localStorage.setItem(`user_progress_${user.value.uid}`, JSON.stringify(progressData))
  }
}

// 格式化日期
const formatDate = (date) => {
  return new Date(date).toLocaleString('zh-TW', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// 顯示訊息
const showMessage = (message) => {
  notificationMessage.value = message
  showNotification.value = true
}

// 導航到首頁
const goToHome = () => {
  navigateTo('/')
}

// 監聽數據變化並自動保存
watch([currentExp, currentLevel, completedSkills, completedTasks, activeTasks, customTasks, recentActivities], () => {
  if (user.value) {
    saveProgressToFirebase()
  }
}, { deep: true })

// 生命週期
onMounted(() => {
  if (isAuthenticated.value) {
    loadUserProfile()
  } else {
    loading.value = false
  }
})

// 監聽認證狀態變化
watch([isAuthenticated, user], ([authenticated, currentUser]) => {
  if (authenticated && currentUser) {
    loadUserProfile()
  }
}, { immediate: true })
</script>

<style scoped>
.info-item {
  padding: 0.5rem 0;
}

.skill-tag {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border: 1px solid #334155;
  color: #00bcd4;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0.125rem;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  border-color: #00bcd4;
  background: linear-gradient(135deg, #0f172a 0%, rgba(0, 188, 212, 0.1) 100%);
}

.tech-progress {
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #1e293b 0%, #334155 100%);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.tech-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #00bcd4 0%, #0097a7 50%, #006064 100%);
  border-radius: 4px;
  position: relative;
  transition: width 0.8s ease-in-out;
}

.tech-progress-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  animation: progress-shine 2s ease-in-out infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.activity-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(100, 116, 139, 0.2);
}

.activity-item:last-child {
  border-bottom: none;
}
</style>
