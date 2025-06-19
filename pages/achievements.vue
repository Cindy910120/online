<template>
  <div class="min-h-screen tech-bg tech-grid-bg relative">
    <!-- 載入畫面 -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p class="text-cyan-400 text-lg font-semibold">載入成就系統中...</p>
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

      <!-- 成就系統標題區域 -->
      <div class="tech-frame mb-8">
        <div class="p-6">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-4xl font-bold text-white mb-2">
                <span class="tech-status mr-4">🏆</span>
                成就系統
              </h1>
              <p class="text-gray-400 text-lg">解鎖成就，展示你的學習成果</p>
              <div class="tech-progress mt-4 max-w-md">
                <div class="tech-progress-bar" :style="`width: ${completionPercentage}%`"></div>
              </div>
              <p class="text-sm text-cyan-400 mt-2">
                成就進度: {{ unlockedCount }}/{{ totalAchievements }} ({{ completionPercentage }}%)
              </p>
            </div>
            <div class="text-right">
              <div class="tech-status-badge mb-2">{{ unlockedCount }} 已解鎖</div>
              <p class="text-sm text-gray-400">總共 {{ totalAchievements }} 個成就</p>
              <div class="mt-2 text-cyan-400 font-bold text-lg">{{ completionPercentage }}% 完成</div>
            </div>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 最近解鎖的成就 -->
      <div v-if="recentUnlocked.length > 0" class="tech-frame mb-8">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
            <svg class="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"></path>
            </svg>
            最近解鎖
          </h2>
          <div class="flex flex-wrap gap-4">
            <div v-for="achievement in recentUnlocked" :key="achievement.id" 
                 class="achievement-card recent-unlock">
              <div class="achievement-icon">{{ achievement.icon }}</div>
              <div class="achievement-info">
                <h3 class="achievement-name">{{ achievement.name }}</h3>
                <p class="achievement-desc">{{ achievement.description }}</p>
                <div class="achievement-meta">
                  <span class="rarity" :class="achievement.rarity">{{ rarityNames[achievement.rarity] }}</span>
                  <span class="unlock-date">{{ formatDate(achievement.unlockedAt) }}</span>
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

      <!-- 統計卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="tech-frame">
          <div class="p-4 text-center">
            <div class="text-3xl font-bold text-cyan-400">{{ unlockedCount }}</div>
            <div class="text-gray-400 text-sm">已解鎖成就</div>
          </div>
        </div>
        <div class="tech-frame">
          <div class="p-4 text-center">
            <div class="text-3xl font-bold text-green-400">{{ completionPercentage }}%</div>
            <div class="text-gray-400 text-sm">完成度</div>
          </div>
        </div>
        <div class="tech-frame">
          <div class="p-4 text-center">
            <div class="text-3xl font-bold text-yellow-400">{{ legendaryCount }}</div>
            <div class="text-gray-400 text-sm">傳說成就</div>
          </div>
        </div>
        <div class="tech-frame">
          <div class="p-4 text-center">
            <div class="text-3xl font-bold text-purple-400">{{ totalExp }}</div>
            <div class="text-gray-400 text-sm">成就經驗</div>
          </div>
        </div>
      </div>

      <!-- 分類篩選 -->
      <div class="flex flex-wrap gap-3 mb-6">
        <button 
          @click="selectedCategory = 'all'"
          :class="['filter-button', selectedCategory === 'all' ? 'active' : '']"
        >
          全部 ({{ totalAchievements }})
        </button>
        <button 
          v-for="(category, key) in categoryInfo" 
          :key="key"
          @click="selectedCategory = key"
          :class="['filter-button', selectedCategory === key ? 'active' : '']"
        >
          {{ category.icon }} {{ category.name }} ({{ getCategoryCount(key) }})
        </button>
      </div>

      <!-- 稀有度篩選 -->
      <div class="flex flex-wrap gap-3 mb-8">
        <button 
          @click="selectedRarity = 'all'"
          :class="['rarity-filter', selectedRarity === 'all' ? 'active' : '']"
        >
          全部稀有度
        </button>
        <button 
          v-for="(rarity, key) in rarityInfo" 
          :key="key"
          @click="selectedRarity = key"
          :class="['rarity-filter', 'rarity-' + key, selectedRarity === key ? 'active' : '']"
        >
          {{ rarity.name }} ({{ getRarityCount(key) }})
        </button>
      </div>

      <!-- 成就列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="achievement in filteredAchievements" :key="achievement.id" 
             :class="['achievement-card', achievement.unlocked ? 'unlocked' : 'locked', 'rarity-' + achievement.rarity]">
            <!-- 成就圖標 -->
          <div class="achievement-icon-container">
            <div class="achievement-icon">
              {{ achievement.unlocked ? achievement.icon : '❓' }}
            </div>
            <div v-if="achievement.unlocked" class="unlock-badge">✓</div>
          </div>
            <!-- 成就信息 -->
          <div class="achievement-content">
            <div class="achievement-header">
              <h3 class="achievement-name">
                {{ achievement.unlocked ? achievement.name : '???' }}
              </h3>
              <span class="rarity-badge" :class="'rarity-' + achievement.rarity">
                {{ rarityNames[achievement.rarity] }}
              </span>
            </div>
            
            <p class="achievement-description">
              {{ achievement.unlocked ? achievement.description : '神秘成就，完成條件後解鎖' }}
            </p>
            
            <!-- 進度條 -->
            <div v-if="!achievement.unlocked && achievement.progress > 0" class="progress-container">
              <div class="progress-bar">
                <div class="progress-fill" :style="`width: ${achievement.progress}%`"></div>
              </div>
              <span class="progress-text">{{ Math.round(achievement.progress) }}%</span>
            </div>            <!-- 獎勵信息 -->
            <div class="reward-info">
              <span class="exp-reward" v-if="achievement.unlocked">+{{ achievement.reward.exp }} EXP</span>
              <span class="mystery-reward" v-else>??? EXP</span>
              
              <span v-if="achievement.unlocked && achievement.reward.title" class="title-reward">
                稱號: {{ achievement.reward.title }}
              </span>
              <span v-else-if="!achievement.unlocked" class="mystery-reward">
                神秘獎勵
              </span>
            </div>
            
            <!-- 解鎖時間 -->
            <div v-if="achievement.unlocked && achievement.unlockedAt" class="unlock-time">
              解鎖於 {{ formatDate(achievement.unlockedAt) }}
            </div>
          </div>
        </div>
      </div>

      <!-- 空狀態 -->
      <div v-if="filteredAchievements.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <p class="text-gray-500 text-lg">沒有找到符合條件的成就</p>
      </div>

      <!-- 調試按鈕 -->
      <div class="mt-8 flex gap-3">
        <button @click="checkAllAchievements" class="tech-button">
          檢查成就進度
        </button>
        <button @click="resetAchievements" class="tech-button">
          重置成就 (調試)
        </button>
        <button @click="unlockTestAchievement" class="tech-button">
          解鎖測試成就
        </button>
      </div>
    </div>

    <!-- 未登入狀態 -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <h2 class="text-2xl font-bold text-white mb-4">需要登入才能查看成就</h2>
        <button @click="navigateTo('/login')" class="tech-button-complex">
          前往登入
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useAchievements } from '~/composables/useAchievements'
import { achievementCategories, rarityConfig } from '~/data/achievements'

// SEO
definePageMeta({
  title: '成就系統',
  description: '查看和解鎖學習成就'
})

// 認證和成就系統
const { isAuthenticated, user, getUserProfile } = useAuth()
const {
  userAchievements,
  totalAchievements,
  unlockedCount,
  completionPercentage,
  achievementsByCategory,
  recentUnlocked,
  loadAchievements,
  checkAchievements,
  unlockAchievement
} = useAchievements()

// 頁面狀態
const loading = ref(true)
const selectedCategory = ref('all')
const selectedRarity = ref('all')

// 常量
const categoryInfo = achievementCategories
const rarityInfo = rarityConfig
const rarityNames = {
  common: '普通',
  rare: '稀有', 
  epic: '史詩',
  legendary: '傳說'
}

// 計算屬性
const legendaryCount = computed(() => {
  return userAchievements.value.filter(a => a.rarity === 'legendary' && a.unlocked).length
})

const totalExp = computed(() => {
  return userAchievements.value
    .filter(a => a.unlocked)
    .reduce((total, a) => total + a.reward.exp, 0)
})

const filteredAchievements = computed(() => {
  let filtered = userAchievements.value

  // 按分類篩選
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(a => a.category === selectedCategory.value)
  }

  // 按稀有度篩選
  if (selectedRarity.value !== 'all') {
    filtered = filtered.filter(a => a.rarity === selectedRarity.value)
  }

  // 排序: 已解鎖的在前，然後按稀有度排序
  return filtered.sort((a, b) => {
    if (a.unlocked && !b.unlocked) return -1
    if (!a.unlocked && b.unlocked) return 1
    
    const rarityOrder = { legendary: 4, epic: 3, rare: 2, common: 1 }
    return rarityOrder[b.rarity] - rarityOrder[a.rarity]
  })
})

// 方法
const getCategoryCount = (category: string) => {
  return userAchievements.value.filter(a => a.category === category).length
}

const getRarityCount = (rarity: string) => {
  return userAchievements.value.filter(a => a.rarity === rarity).length
}

const formatDate = (date?: Date) => {
  if (!date) return ''
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const goToHome = () => {
  navigateTo('/')
}

const checkAllAchievements = () => {
  try {
    const userProgress = JSON.parse(localStorage.getItem('userProgress') || '{}')
    const newAchievements = checkAchievements(userProgress)
    
    if (newAchievements.length > 0) {
      console.log('🎉 新解鎖成就:', newAchievements.map(a => a.name))
    } else {
      console.log('📊 已檢查成就，無新解鎖')
    }
  } catch (error) {
    console.error('檢查成就失敗:', error)
  }
}

const resetAchievements = () => {
  if (confirm('確定要重置所有成就嗎？這將清除所有解鎖記錄。')) {
    localStorage.removeItem('userAchievements')
    loadAchievements()
    console.log('🔄 成就已重置')
  }
}

const unlockTestAchievement = () => {
  const firstUnlocked = userAchievements.value.find(a => !a.unlocked)
  if (firstUnlocked) {
    unlockAchievement(firstUnlocked.id)
    console.log('🎉 測試解鎖成就:', firstUnlocked.name)
  }
}

// 生命週期
onMounted(async () => {
  try {
    if (isAuthenticated.value && user.value) {
      await getUserProfile()
      loadAchievements()
      
      // 自動檢查成就
      setTimeout(() => {
        checkAllAchievements()
      }, 1000)
    }
  } catch (error) {
    console.error('初始化成就頁面失敗:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.achievement-card {
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid rgb(75, 85, 99);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.achievement-card.unlocked {
  border-color: rgba(34, 197, 94, 0.5);
  background: rgba(34, 197, 94, 0.2);
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
}

.achievement-card.locked {
  border-color: rgb(75, 85, 99);
  background: rgba(31, 41, 55, 0.3);
}

.achievement-card.rarity-legendary {
  border-color: rgba(245, 158, 11, 0.5);
  box-shadow: 0 0 30px rgba(245, 158, 11, 0.4);
}

.achievement-icon-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.achievement-icon {
  font-size: 2.25rem;
}

.unlock-badge {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  background: rgb(34, 197, 94);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

.achievement-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.achievement-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.achievement-name {
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
}

.rarity-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.rarity-badge.rarity-common {
  background: rgb(75, 85, 99);
  color: rgb(229, 231, 235);
}

.rarity-badge.rarity-rare {
  background: rgb(37, 99, 235);
  color: rgb(219, 234, 254);
}

.rarity-badge.rarity-epic {
  background: rgb(147, 51, 234);
  color: rgb(233, 213, 255);
}

.rarity-badge.rarity-legendary {
  background: rgb(217, 119, 6);
  color: rgb(254, 243, 199);
}

.achievement-description {
  font-size: 0.875rem;
  color: rgb(209, 213, 219);
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.progress-bar {
  flex: 1;
  background: rgb(55, 65, 81);
  border-radius: 9999px;
  height: 0.5rem;
}

.progress-fill {
  background: rgb(6, 182, 212);
  height: 100%;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.progress-text {
  font-size: 0.75rem;
  color: rgb(6, 182, 212);
  font-weight: 600;
}

.reward-info {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
}

.exp-reward {
  background: rgba(34, 197, 94, 0.2);
  color: rgb(74, 222, 128);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.title-reward {
  background: rgba(147, 51, 234, 0.2);
  color: rgb(196, 181, 253);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.mystery-reward {
  background: rgba(75, 85, 99, 0.2);
  color: rgb(156, 163, 175);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-style: italic;
}

.mystery-reward {
  background: rgba(107, 114, 128, 0.2);
  color: rgb(156, 163, 175);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.unlock-time {
  font-size: 0.75rem;
  color: rgb(107, 114, 128);
}

.filter-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
  transition: colors 0.2s ease;
}

.filter-button:hover {
  background: rgb(75, 85, 99);
}

.filter-button.active {
  background: rgb(8, 145, 178);
  color: white;
}

.rarity-filter {
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  border: 1px solid;
  transition: all 0.2s ease;
}

.rarity-filter.rarity-common {
  border-color: rgb(107, 114, 128);
  color: rgb(209, 213, 219);
}

.rarity-filter.rarity-rare {
  border-color: rgb(59, 130, 246);
  color: rgb(147, 197, 253);
}

.rarity-filter.rarity-epic {
  border-color: rgb(139, 92, 246);
  color: rgb(196, 181, 253);
}

.rarity-filter.rarity-legendary {
  border-color: rgb(245, 158, 11);
  color: rgb(252, 211, 77);
}

.rarity-filter.active {
  transform: scale(1.05);
}

.recent-unlock {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(180, 83, 9, 0.2);
  border: 1px solid rgba(245, 158, 11, 0.5);
  border-radius: 0.5rem;
}

.recent-unlock .achievement-icon {
  font-size: 1.5rem;
}

.recent-unlock .achievement-info {
  flex: 1;
}

.recent-unlock .achievement-name {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(252, 211, 77);
}

.recent-unlock .achievement-desc {
  font-size: 0.875rem;
  color: rgb(209, 213, 219);
}

.recent-unlock .achievement-meta {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.25rem;
  font-size: 0.75rem;
}

.recent-unlock .rarity {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.recent-unlock .unlock-date {
  color: rgb(156, 163, 175);
}

.tech-progress {
  width: 100%;
  background: rgb(55, 65, 81);
  border-radius: 9999px;
  height: 0.75rem;
  overflow: hidden;
}

.tech-progress-bar {
  height: 100%;
  background: linear-gradient(to right, rgb(6, 182, 212), rgb(34, 197, 94));
  transition: all 0.5s ease;
}
</style>
