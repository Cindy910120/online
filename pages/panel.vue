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
    <div v-else-if="isAuthenticated" class="container mx-auto px-4 py-8">      <!-- 返回按鈕 -->
      <div class="flex justify-between items-center mb-6">
        <button 
          @click="goToHome"
          class="tech-button-complex"
        >
          <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          回到選單
        </button>        <!-- Firebase 測試按鈕 -->        <div class="flex space-x-3">
          <button 
            @click="refreshActivities"
            class="tech-button text-sm px-4 py-2"
            :disabled="loading"
          >
            刷新活動
          </button>
          <button 
            @click="debugStats"
            class="tech-button text-sm px-4 py-2"
            :disabled="loading"
          >
            調試統計
          </button>
          <button 
            @click="updateStats"
            class="tech-button text-sm px-4 py-2"
            :disabled="loading"
          >
            更新統計
          </button>
          <button 
            @click="testFirebaseConnection"
            class="tech-button text-sm px-4 py-2"
            :disabled="loading"
          >
            測試 Firebase
          </button>
          <button 
            @click="forceReinitializeData"
            class="tech-button text-sm px-4 py-2"
            :disabled="loading"
          >
            重置數據
          </button>
        </div>
      </div>

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
      </div>      <!-- 快速導航 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div @click="navigateTo('/skills')" class="tech-grid-card-v2 group relative cursor-pointer">
          <div class="tech-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">技能樹系統</h3>
          <p class="text-gray-400 text-sm mb-4">學習專業技能，解鎖新能力</p>
          
          <div class="tech-progress">
            <div class="tech-progress-bar" :style="`width: ${skillProgress}%`"></div>
          </div>
          <div class="text-xs text-cyan-400 mt-2">已完成: {{ completedSkillsCount }} / {{ totalSkillsCount }} ({{ skillProgress }}%)</div>
          
          <!-- 推薦技能樹快速預覽 -->
          <div class="mt-3 flex flex-wrap gap-1">
            <span 
              v-for="tree in detailedSkillStats.progressByTree.slice(0, 3)" 
              :key="tree.name"
              class="px-2 py-1 text-xs bg-cyan-600/20 text-cyan-300 rounded"
              :title="`${tree.name}: ${tree.completed}/${tree.total} 技能`"
            >
              {{ tree.name }}: {{ tree.percentage }}%
            </span>
          </div>
          
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
        </div>

        <div @click="navigateTo('/tasks')" class="tech-grid-card-v2 group relative cursor-pointer">
          <div class="tech-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
          </div>          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">任務系統</h3>
          <p class="text-gray-400 text-sm mb-4">接取任務，獲得經驗值</p>
          
          <div class="tech-progress">
            <div class="tech-progress-bar" :style="`width: ${taskProgress}%`"></div>
          </div>
          <div class="text-xs text-cyan-400 mt-2">
            可接取: {{ availableTasksCount }} | 進行中: {{ activeTasksCount }} | 已完成: {{ completedTasksCount }}
          </div>
            <!-- 任務分類快速預覽 -->
          <div class="mt-3 flex flex-wrap gap-1">
            <template v-for="(count, category) in detailedTaskStats.categories" :key="category">
              <span 
                v-if="count > 0"
                class="px-2 py-1 text-xs bg-blue-600/20 text-blue-300 rounded"
              >
                {{ category }}: {{ count }}
              </span>
            </template>
          </div>
          
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>

        <div @click="navigateTo('/achievements')" class="tech-grid-card-v2 group relative cursor-pointer">
          <div class="tech-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">成就系統</h3>
          <p class="text-gray-400 text-sm mb-4">解鎖成就，展示成果</p>
          
          <div class="tech-progress">
            <div class="tech-progress-bar" :style="`width: ${achievementProgress}%`"></div>
          </div>
          <div class="text-xs text-cyan-400 mt-2">
            已解鎖: {{ unlockedAchievementsCount }} / {{ totalAchievementsCount }} ({{ achievementProgress }}%)
          </div>
            <!-- 最近解鎖成就預覽 -->
          <div class="mt-3 flex flex-wrap gap-1">
            <span 
              v-for="achievement in recentAchievements.slice(0, 3)" 
              :key="achievement.id"
              class="px-2 py-1 text-xs bg-yellow-600/20 text-yellow-300 rounded"
              :title="achievement.description"
            >
              {{ achievement.unlocked ? achievement.icon : '❓' }} {{ achievement.unlocked ? achievement.name : '???' }}
            </span>
            <span v-if="recentAchievements.length === 0" class="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded">
              暫無成就
            </span>
          </div>
          
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
        </div>
      </div>

      <!-- 技能樹進度展示 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <svg class="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          技能樹發展狀況
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="skillTree in skillTreeProgresses" :key="skillTree.name" class="tech-frame">
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="tech-icon-small mr-3">
                  <span class="text-2xl">{{ skillTree.icon }}</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white">{{ skillTree.name }}</h3>
                  <p class="text-sm text-cyan-400">Lv.{{ skillTree.level }}</p>
                </div>
              </div>
              
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-gray-400 text-sm">經驗值</span>
                  <span class="text-green-400 font-medium">{{ skillTree.exp }}/{{ skillTree.nextLevelExp }}</span>
                </div>
                
                <div class="tech-progress">
                  <div class="tech-progress-bar" :style="`width: ${skillTree.progress}%`"></div>
                </div>
                
                <div class="text-xs text-cyan-400 text-center">
                  {{ skillTree.progress }}% 至下一級
                </div>
              </div>
            </div>
            <div class="tech-corner tech-corner-tl"></div>
            <div class="tech-corner tech-corner-tr"></div>
            <div class="tech-corner tech-corner-bl"></div>
            <div class="tech-corner tech-corner-br"></div>
          </div>
          
          <!-- 如果沒有技能樹進度，顯示提示 -->
          <div v-if="skillTreeProgresses.length === 0" class="col-span-full tech-frame">
            <div class="p-8 text-center">
              <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              <h3 class="text-xl font-bold text-gray-400 mb-2">尚未開始技能學習</h3>
              <p class="text-gray-500 mb-4">前往技能樹頁面開始你的學習旅程</p>
              <button @click="navigateTo('/skills')" class="tech-button-complex">
                探索技能樹
              </button>
            </div>
            <div class="tech-corner tech-corner-tl"></div>
            <div class="tech-corner tech-corner-tr"></div>
            <div class="tech-corner tech-corner-bl"></div>
            <div class="tech-corner tech-corner-br"></div>
          </div>
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
            </h3>            <div class="space-y-4">
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
                <span class="text-blue-400 font-bold">{{ completedSkillsCount }} / {{ totalSkillsCount }}</span>
              </div>
              
              <!-- 任務詳細統計 -->
              <div class="border-t border-gray-600 pt-3 mt-3">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-400 text-sm">任務進度</span>
                  <span class="text-purple-400 font-bold">{{ taskProgress }}%</span>
                </div>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-500">可接取</span>
                    <span class="text-orange-400">{{ availableTasksCount }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-500">進行中</span>
                    <span class="text-yellow-400">{{ activeTasksCount }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-500">已完成</span>
                    <span class="text-green-400">{{ completedTasksCount }}</span>
                  </div>
                </div>
              </div>
              
              <!-- 技能樹完成度 -->
              <div class="border-t border-gray-600 pt-3 mt-3">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-400 text-sm">技能樹完成度</span>
                  <span class="text-cyan-400 font-bold">{{ skillProgress }}%</span>
                </div>
                <div class="space-y-1">
                  <div 
                    v-for="tree in detailedSkillStats.progressByTree.slice(0, 3)" 
                    :key="tree.name"
                    class="flex justify-between text-sm"
                  >
                    <span class="text-gray-500 truncate mr-2">{{ tree.name }}</span>
                    <span class="text-cyan-300">{{ tree.percentage }}%</span>
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
            </h3>            <div class="space-y-3">
              <div v-if="recentActivities.length === 0" class="text-gray-500 text-sm text-center py-4">
                <p>暫無活動記錄</p>
                <button @click="refreshActivities" class="text-cyan-400 hover:underline text-xs mt-2">
                  點此刷新活動數據
                </button>
              </div>
              <div v-else>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-xs text-gray-400">最近活動 ({{ recentActivities.length }} 筆)</span>
                  <button @click="refreshActivities" class="text-cyan-400 hover:underline text-xs">
                    刷新
                  </button>
                </div>
                <div v-for="activity in recentActivities.slice(0, 5)" :key="activity.id" class="activity-item">
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
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useFirebase } from '~/composables/useFirebase'
import { useAchievements } from '~/composables/useAchievements'
import { 
  skillTreesCollection, 
  getSkillTreeProgress,
  calculateSkillTreeLevel,
  recommendSkillTrees,
  getSkillTreeByInterest 
} from '~/data/skill-trees/index'

// 設定頁面中介軟體
definePageMeta({
  middleware: 'auth'
})

const { user, isAuthenticated, getUserProfile } = useAuth()
const { saveUserProgress, getUserProgress } = useFirebase()
const {
  userAchievements,
  totalAchievements,
  unlockedCount,
  completionPercentage,
  recentUnlocked,
  loadAchievements,
  checkAchievements
} = useAchievements()
const loading = ref(true)
const userProfile = ref<any>(null)

// 通知系統
const showNotification = ref(false)
const notificationMessage = ref('')

// 技能樹進度相關 
const userProgress = ref<any>({
  level: 1,
  exp: 0,
  skillTrees: {},
  activities: [],
  selectedMajor: '',
  selectedInterests: []
})

interface Activity {
  id: string | number
  type: 'skill' | 'task' | 'level_up'
  description: string
  timestamp: string | number | Date
  skillTree?: string
  skillName?: string
}

const recentActivities = ref<Activity[]>([])

// 計算推薦的技能樹
const recommendedSkillTrees = computed(() => {
  if (!userProfile.value) return []
  
  const major = userProfile.value.major || ''
  const interests = userProfile.value.interests || []
  
  return recommendSkillTrees(major, interests)
})

// 計算各技能樹的等級和進度
const skillTreeProgresses = computed(() => {
  const progresses = []
  
  if (recommendedSkillTrees.value.length > 0) {
    // 顯示推薦的技能樹
    for (const tree of recommendedSkillTrees.value) {
      const progress = getSkillTreeProgress(tree.name, userProgress.value.skillTrees)
      progresses.push({
        name: tree.name,
        icon: tree.icon,
        level: progress.currentLevel,
        exp: progress.totalExp,
        nextLevelExp: progress.nextLevelExp,
        progress: progress.currentLevel > 0 ? Math.round((progress.totalExp / progress.nextLevelExp) * 100) : 0
      })
    }
  } else {
    // 如果沒有推薦技能樹，顯示一些預設的技能樹
    const defaultTrees = ['電機工程', '繪畫藝術', '軟技能']
    for (const treeName of defaultTrees) {
      if (skillTreesCollection[treeName]) {
        const tree = skillTreesCollection[treeName]
        const progress = getSkillTreeProgress(treeName, userProgress.value.skillTrees)
        progresses.push({
          name: treeName,
          icon: tree.icon,
          level: progress.currentLevel,
          exp: progress.totalExp,
          nextLevelExp: progress.nextLevelExp,
          progress: progress.currentLevel > 0 ? Math.round((progress.totalExp / progress.nextLevelExp) * 100) : 0
        })
      }
    }
  }
  
  return progresses.slice(0, 6) // 最多顯示6個技能樹
})

// 計算最高等級技能樹作為主要等級顯示
const currentLevel = computed(() => {
  let maxLevel = 1
  for (const progress of skillTreeProgresses.value) {
    if (progress.level > maxLevel) {
      maxLevel = progress.level
    }
  }
  return maxLevel
})

// 計算總經驗值
const currentExp = computed(() => {
  let totalExp = 0
  for (const progress of skillTreeProgresses.value) {
    totalExp += progress.exp
  }
  return totalExp
})

// 計算下一級經驗值 (使用最高等級技能樹的下一級經驗)
const nextLevelExp = computed(() => {
  let maxNextLevelExp = currentLevel.value * 10
  for (const progress of skillTreeProgresses.value) {
    if (progress.level === currentLevel.value && progress.nextLevelExp > maxNextLevelExp) {
      maxNextLevelExp = progress.nextLevelExp
    }
  }
  return maxNextLevelExp
})

// 等級進度百分比 (基於最高等級技能樹)
const levelProgress = computed(() => {
  let maxProgress = 0
  for (const progress of skillTreeProgresses.value) {
    if (progress.level === currentLevel.value && progress.progress > maxProgress) {
      maxProgress = progress.progress
    }
  }
  return maxProgress
})

// 總經驗值就是所有技能樹經驗總和
const totalExp = computed(() => currentExp.value)

// 技能統計 - 計算所有技能樹的精確統計
const totalSkillsCount = computed(() => {
  let total = 0
  
  // 計算推薦技能樹的總技能數
  for (const tree of recommendedSkillTrees.value) {
    if (tree && tree.levels) {
      total += tree.levels.reduce((sum: number, level: any) => sum + level.skills.length, 0)
    }
  }
  
  return total
})

const completedSkillsCount = computed(() => {
  let totalCompleted = 0
  
  // 計算所有技能樹中已完成的技能數量
  for (const treeName in userProgress.value.skillTrees) {
    const treeProgress = userProgress.value.skillTrees[treeName]
    if (treeProgress && typeof treeProgress === 'object') {
      // 遍歷技能樹中的每個技能
      for (const skillId in treeProgress) {
        const skill = treeProgress[skillId]
        if (skill && skill.completed) {
          totalCompleted++
        }
      }
    }
  }
  
  return totalCompleted
})

const skillProgress = computed(() => {
  if (totalSkillsCount.value === 0) return 0
  return Math.min(100, Math.round((completedSkillsCount.value / totalSkillsCount.value) * 100))
})

// 任務統計 - 從 localStorage 和用戶進度中獲取任務數據
const taskDataTrigger = ref(0) // 用於觸發任務數據重新計算

const getTasksFromStorage = () => {
  try {
    // 觸發依賴更新
    taskDataTrigger.value
    
    const savedProgress = localStorage.getItem('userProgress')
    if (savedProgress) {
      const progress = JSON.parse(savedProgress)
      return {
        available: progress.tasks?.available || [],
        active: progress.tasks?.active || [],
        completed: progress.tasks?.completed || [],
        custom: progress.tasks?.custom || []
      }
    }
  } catch (error) {
    console.error('讀取任務資料失敗:', error)
  }
  
  return {
    available: [],
    active: [],
    completed: [],
    custom: []
  }
}

const taskData = computed(() => getTasksFromStorage())

const availableTasksCount = computed(() => {
  return taskData.value.available.length
})

const activeTasksCount = computed(() => {
  return taskData.value.active.length + 
         taskData.value.custom.filter((task: any) => task.status === 'active').length
})

const completedTasksCount = computed(() => {
  return taskData.value.completed.length + 
         taskData.value.custom.filter((task: any) => task.status === 'completed').length
})

const taskProgress = computed(() => {
  const total = activeTasksCount.value + completedTasksCount.value
  if (total === 0) return 0
  return Math.round((completedTasksCount.value / total) * 100)
})

// 詳細任務統計
const detailedTaskStats = computed(() => {
  const tasks = getTasksFromStorage()
  
  // 統計各類型任務
  const categories = {
    學習: 0,
    健康: 0,
    專業: 0,
    實作: 0,
    其他: 0
  }
  
  // 統計可接取任務的分類
  tasks.available.forEach((task: any) => {
    const category = task.category || '其他'
    if (categories.hasOwnProperty(category)) {
      categories[category as keyof typeof categories]++
    } else {
      categories.其他++
    }
  })
  
  return {
    total: {
      available: tasks.available.length,
      active: tasks.active.length,
      completed: tasks.completed.length,
      custom: tasks.custom.length
    },
    categories,
    customActive: tasks.custom.filter((task: any) => task.status === 'active').length,
    customCompleted: tasks.custom.filter((task: any) => task.status === 'completed').length
  }
})

// 詳細技能樹統計
const detailedSkillStats = computed(() => {
  const stats = {
    totalTrees: recommendedSkillTrees.value.length,
    totalSkills: totalSkillsCount.value,
    completedSkills: completedSkillsCount.value,
    progressByTree: [] as Array<{
      name: string,
      completed: number,
      total: number,
      percentage: number
    }>,
  }
  
  // 計算每個推薦技能樹的進度
  for (const tree of recommendedSkillTrees.value) {
    const treeProgress = userProgress.value.skillTrees[tree.name] || {}
    let completed = 0
    let total = 0
    
    // 計算該技能樹的總技能數和已完成數
    tree.levels.forEach((level: any) => {
      total += level.skills.length
      level.skills.forEach((skill: any) => {
        if (treeProgress[skill.id]?.completed) {
          completed++
        }
      })
    })
    
    stats.progressByTree.push({
      name: tree.name,
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    })
  }
    return stats
})

// 成就系統相關計算屬性
const achievementProgress = computed(() => completionPercentage.value)
const totalAchievementsCount = computed(() => totalAchievements.value)
const unlockedAchievementsCount = computed(() => unlockedCount.value)
const recentAchievements = computed(() => recentUnlocked.value)

// 生成技能樹學習活動記錄
const generateSkillTreeActivities = () => {
  const activities: Activity[] = []
  
  // 為每個有進度的技能樹生成活動記錄
  for (const [treeName, treeProgress] of Object.entries(userProgress.value.skillTrees)) {
    if (treeProgress && typeof treeProgress === 'object' && 'skills' in treeProgress) {
      const skills = (treeProgress as any).skills
      if (skills && typeof skills === 'object') {
        const skillCount = Object.keys(skills).length
        if (skillCount > 0) {
          // 技能學習記錄
          activities.push({
            id: `skill-${treeName}-${Date.now()}`,
            type: 'skill',
            description: `在「${treeName}」技能樹中學習了 ${skillCount} 個技能`,
            timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000), // 隨機過去一週內
            skillTree: treeName
          })
        }
      }
    }
  }
  
  // 等級提升記錄
  for (const progress of skillTreeProgresses.value) {
    if (progress.level > 1) {
      activities.push({
        id: `level-${progress.name}-${progress.level}`,
        type: 'level_up',
        description: `「${progress.name}」技能樹升級到 Lv.${progress.level}！`,
        timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
        skillTree: progress.name
      })
    }
  }
  
  // 按時間排序，取最新的
  activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  
  // 如果原本的活動記錄為空，使用生成的活動
  if (recentActivities.value.length === 0) {
    recentActivities.value = activities.slice(0, 10)
  }
}

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
    
    // 生成技能樹學習活動
    generateSkillTreeActivities()
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
    console.log('從 Firebase 載入的進度數據:', progress)
    
    if (progress) {
      userProgress.value = {
        level: progress.level || 1,
        exp: progress.exp || 0,
        skillTrees: progress.skillTrees || {},
        activities: progress.activities || progress.recentActivities || [], // 兼容兩個字段
        selectedMajor: progress.selectedMajor || '',
        selectedInterests: progress.selectedInterests || [],
        activeTasks: progress.activeTasks || [],
        completedTasks: progress.completedTasks || []
      }
      // 統一使用 activities 數據
      recentActivities.value = progress.activities || progress.recentActivities || []
      console.log('載入的活動數據:', recentActivities.value)
    } else {
      // 如果沒有 Firebase 數據，初始化一些示範數據
      await initializeDemoData()
    }
  } catch (error) {
    console.error('從Firebase載入進度失敗:', error)
    // 如果Firebase載入失敗，嘗試從localStorage載入
    loadProgressFromLocal()
  }
}

// 初始化示範數據
const initializeDemoData = async () => {
  console.log('初始化示範技能樹數據...')
  
  // 基於用戶資料生成示範進度
  const demoSkillTrees = {
    '電機工程': {
      skills: {
        '基礎電路分析': { level: 3, exp: 150, completed: true },
        '數位邏輯設計': { level: 2, exp: 80, completed: true },
        '電磁學原理': { level: 1, exp: 30, completed: false }
      },
      totalExp: 260,
      level: 3
    },
    '繪畫藝術': {
      skills: {
        '素描基礎': { level: 2, exp: 70, completed: true },
        '色彩理論': { level: 1, exp: 25, completed: false }
      },
      totalExp: 95,
      level: 2
    },
    '軟技能': {
      skills: {
        '溝通表達': { level: 2, exp: 60, completed: true },
        '團隊合作': { level: 1, exp: 20, completed: false }
      },
      totalExp: 80,
      level: 2
    }
  }

  userProgress.value = {
    level: 3,
    exp: 435, // 總經驗值
    skillTrees: demoSkillTrees,
    activities: [],
    selectedMajor: userProfile.value?.major || '電機工程',
    selectedInterests: userProfile.value?.interests || ['程式設計', '電子電路'],
    activeTasks: [
      { id: 1, title: '完成電路設計實驗', status: 'active', exp: 50 },
      { id: 2, title: '學習新的繪畫技巧', status: 'active', exp: 30 }
    ],
    completedTasks: [
      { id: 3, title: '基礎電學理論學習', status: 'completed', exp: 40 },
      { id: 4, title: '素描練習', status: 'completed', exp: 25 }
    ]
  }
  // 生成示範活動記錄
  const demoActivities: Activity[] = [
    {
      id: 'demo-1',
      type: 'skill',
      description: '完成技能：基礎電路分析，獲得 5 經驗值',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1小時前
      skillTree: '電機工程'
    },
    {
      id: 'demo-2',
      type: 'level_up',
      description: '電機工程技能樹升級到 Lv.3！',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4小時前
      skillTree: '電機工程'
    },
    {
      id: 'demo-3',
      type: 'skill',
      description: '完成技能：素描基礎，獲得 4 經驗值',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6小時前
      skillTree: '繪畫藝術'
    },
    {
      id: 'demo-4',
      type: 'level_up',
      description: '繪畫藝術技能樹升級到 Lv.2！',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8小時前
      skillTree: '繪畫藝術'
    },
    {
      id: 'demo-5',
      type: 'task',
      description: '完成任務：基礎電學理論學習，獲得 40 經驗值',
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12小時前
    }
  ]

  recentActivities.value = demoActivities

  // 保存到 Firebase
  try {
    await saveProgressToFirebase()
    console.log('✅ 示範數據已保存到 Firebase')
  } catch (error) {
    console.error('❌ 保存示範數據到 Firebase 失敗:', error)
  }
}

// 從localStorage載入進度（備用方案）
const loadProgressFromLocal = () => {
  if (!user.value) return

  const savedData = localStorage.getItem(`user_progress_${user.value.uid}`)
  if (savedData) {
    const data = JSON.parse(savedData)
    userProgress.value = {
      level: data.level || 1,
      exp: data.exp || 0,
      skillTrees: data.skillTrees || {},
      activities: data.recentActivities || [],
      selectedMajor: data.selectedMajor || '',
      selectedInterests: data.selectedInterests || [],
      activeTasks: data.activeTasks || [],
      completedTasks: data.completedTasks || []
    }
    recentActivities.value = data.recentActivities || []
  }
}

// 保存進度到Firebase
const saveProgressToFirebase = async () => {
  if (!user.value) return

  const progressData = {
    level: currentLevel.value,
    exp: currentExp.value,
    skillTrees: userProgress.value.skillTrees,
    activities: recentActivities.value, // 統一使用 activities 字段
    recentActivities: recentActivities.value, // 保持兼容性
    activeTasks: userProgress.value.activeTasks || [],
    completedTasks: userProgress.value.completedTasks || [],
    selectedMajor: userProgress.value.selectedMajor,
    selectedInterests: userProgress.value.selectedInterests,
    lastUpdated: new Date().toISOString()
  }

  try {
    await saveUserProgress(user.value.uid, progressData)
    // 同時保存到localStorage作為備份
    localStorage.setItem(`user_progress_${user.value.uid}`, JSON.stringify(progressData))
    console.log('✅ 進度已保存到 Firebase，包含活動數據:', recentActivities.value.length, '筆')
  } catch (error) {
    console.error('保存進度到Firebase失敗:', error)
    // 如果Firebase保存失敗，至少保存到localStorage
    localStorage.setItem(`user_progress_${user.value.uid}`, JSON.stringify(progressData))
  }
}

// 格式化日期
const formatDate = (date: string | number | Date) => {
  return new Date(date).toLocaleString('zh-TW', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// 顯示訊息
const showMessage = (message: string) => {
  notificationMessage.value = message
  showNotification.value = true
}

// 強制重新初始化數據（用於測試）
const forceReinitializeData = async () => {
  loading.value = true
  try {
    await initializeDemoData()
    showMessage('數據已重新初始化並同步到 Firebase！')
  } catch (error) {
    console.error('重新初始化失敗:', error)
    showMessage('重新初始化失敗，請檢查網路連接')
  } finally {
    loading.value = false
  }
}

// 測試 Firebase 連接
const testFirebaseConnection = async () => {
  if (!user.value) {
    showMessage('請先登入')
    return
  }

  loading.value = true
  try {
    // 測試保存數據
    const testData = {
      testTime: new Date().toISOString(),
      message: 'Firebase 連接測試'
    }
    
    await saveUserProgress(user.value.uid, testData)
    
    // 測試讀取數據
    const retrieved = await getUserProgress(user.value.uid)
    
    if (retrieved && retrieved.testTime) {
      showMessage('Firebase 連接正常！數據已成功保存和讀取')
    } else {
      showMessage('Firebase 讀取失敗')
    }
  } catch (error) {
    console.error('Firebase 連接測試失敗:', error)
    showMessage('Firebase 連接失敗，請檢查網路連接')
  } finally {
    loading.value = false
  }
}

// 刷新活動數據
const refreshActivities = async () => {
  if (!user.value) {
    showMessage('請先登入')
    return
  }

  loading.value = true
  try {
    console.log('開始刷新活動數據...')
    
    // 重新從 Firebase 載入數據
    const progress = await getUserProgress(user.value.uid)
    
    if (progress) {
      console.log('Firebase 中的完整數據:', progress)
      
      // 更新活動數據
      const activities = progress.activities || progress.recentActivities || []
      recentActivities.value = activities
      
      console.log('刷新後的活動數據:', activities)
      showMessage(`活動數據已刷新！共載入 ${activities.length} 筆活動記錄`)
    } else {
      showMessage('Firebase 中沒有找到數據')
    }
  } catch (error) {
    console.error('刷新活動數據失敗:', error)
    showMessage('刷新活動數據失敗，請檢查網路連接')
  } finally {
    loading.value = false
  }
}

// 導航到首頁
const goToHome = () => {
  navigateTo('/')
}

// 更新統計數據的函數
const updateStats = () => {
  console.log('📊 更新面板統計數據')
  
  // 觸發任務數據重新計算
  taskDataTrigger.value++
  
  // 強制重新計算所有 computed 屬性
  nextTick(() => {
    console.log('🔢 技能統計 - 已完成:', completedSkillsCount.value, '總數:', totalSkillsCount.value)
    console.log('📋 任務統計 - 可接取:', availableTasksCount.value, '進行中:', activeTasksCount.value, '已完成:', completedTasksCount.value)
  })
}

// 調試統計數據
const debugStats = () => {
  console.log('=== 📊 面板統計調試 ===')
  
  // 檢查 localStorage 原始數據
  const rawUserProgress = localStorage.getItem('userProgress')
  console.log('🗂️ localStorage userProgress 原始數據:')
  if (rawUserProgress) {
    const parsed = JSON.parse(rawUserProgress)
    console.log('  - 完整數據:', parsed)
    console.log('  - 任務數據:', parsed.tasks)
    if (parsed.tasks) {
      console.log('    available:', parsed.tasks.available?.length || 0)
      console.log('    active:', parsed.tasks.active?.length || 0) 
      console.log('    completed:', parsed.tasks.completed?.length || 0)
      console.log('    custom:', parsed.tasks.custom?.length || 0)
    }
  } else {
    console.log('  - localStorage 中沒有 userProgress 數據')
  }
  
  console.log('📊 getTasksFromStorage() 回傳:')
  const taskStorageData = getTasksFromStorage()
  console.log('  - available:', taskStorageData.available.length)
  console.log('  - active:', taskStorageData.active.length)
  console.log('  - completed:', taskStorageData.completed.length)
  console.log('  - custom:', taskStorageData.custom.length)
  
  const skillStats = detailedSkillStats.value
  console.log('🎯 技能樹詳細統計:')
  console.log('  - 推薦技能樹數量:', skillStats.totalTrees)
  console.log('  - 總技能數:', skillStats.totalSkills)
  console.log('  - 已完成技能數:', skillStats.completedSkills)
  console.log('  - 技能完成度:', skillProgress.value + '%')
  console.log('  - 各技能樹進度:')
  skillStats.progressByTree.forEach(tree => {
    console.log(`    ${tree.name}: ${tree.completed}/${tree.total} (${tree.percentage}%)`)
  })
  
  const taskStats = detailedTaskStats.value
  console.log('📋 任務詳細統計:')
  console.log('  - 可接取任務:', taskStats.total.available)
  console.log('  - 進行中任務:', taskStats.total.active)
  console.log('  - 已完成任務:', taskStats.total.completed)
  console.log('  - 自訂任務總數:', taskStats.total.custom)
  console.log('  - 自訂任務(進行中):', taskStats.customActive)
  console.log('  - 自訂任務(已完成):', taskStats.customCompleted)
  console.log('  - 任務分類統計:', taskStats.categories)
  console.log('  - 任務完成度:', taskProgress.value + '%')
  
  console.log('👤 用戶進度:')
  console.log('  - skillTrees 數據鍵數:', Object.keys(userProgress.value.skillTrees).length)
  console.log('  - 用戶資料:', userProfile.value)
  console.log('==================')
}

// 監聽 localStorage 變化
if (process.client) {
  window.addEventListener('storage', (e) => {
    if (e.key === 'userProgress') {
      updateStats()
    }
  })
}

// 監聽數據變化並自動保存
watch([currentExp, currentLevel, userProgress, recentActivities], () => {
  if (user.value) {
    saveProgressToFirebase()
  }
}, { deep: true })

// 監聽認證狀態變化
watch([isAuthenticated, user], ([authenticated, currentUser]) => {
  if (authenticated && currentUser) {
    loadUserProfile()
  }
}, { immediate: true })

// 頁面載入時自動載入和初始化數據
onMounted(async () => {
  console.log('🚀 面板頁面初始化')
    try {
    loading.value = true
    
    if (user.value) {
      await loadUserProfile()
      
      // 初始化成就系統
      loadAchievements()
      
      // 初始統計調試
      setTimeout(() => {
        debugStats()
        
        // 檢查成就進度
        try {
          const userProgressData = JSON.parse(localStorage.getItem('userProgress') || '{}')
          checkAchievements(userProgressData)
        } catch (error) {
          console.error('檢查成就失敗:', error)
        }
      }, 2000) // 延遲2秒確保數據載入完成
      
      // 監聽 localStorage 變化，自動更新任務統計
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'userProgress') {
          console.log('🔄 檢測到 userProgress 變化，更新任務統計')
          taskDataTrigger.value++
        }
      }
      
      // 添加事件監聽器
      if (process.client) {
        window.addEventListener('storage', handleStorageChange)
        
        // 頁面卸載時移除監聽器
        onUnmounted(() => {
          window.removeEventListener('storage', handleStorageChange)
        })
      }
      
      // 設定定期更新統計數據（每30秒）
      const statsUpdateInterval = setInterval(() => {
        // 觸發任務統計更新
        updateStats()
      }, 30000) // 30秒更新一次
      
      // 頁面卸載時清除定時器
      onUnmounted(() => {
        clearInterval(statsUpdateInterval)
      })
    } else {
      console.log('❌ 用戶未登入')
    }
  } catch (error) {
    console.error('❌ 面板初始化失敗:', error)
  } finally {
    loading.value = false
  }
})
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

.tech-icon-small {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border: 2px solid #334155;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tech-icon-small:hover {
  border-color: #00bcd4;
  background: linear-gradient(135deg, #0f172a 0%, rgba(0, 188, 212, 0.1) 100%);
}
</style>
