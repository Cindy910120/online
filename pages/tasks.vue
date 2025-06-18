<template>
  <div class="min-h-screen tech-bg tech-grid-bg relative">
    <!-- 載入畫面 -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p class="text-cyan-400 text-lg font-semibold">載入任務系統中...</p>
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
                任務系統
              </h1>
              <p class="text-gray-400 text-lg">完成任務來獲得經驗值和技能進步</p>
              <div class="tech-progress mt-4 max-w-md">
                <div class="tech-progress-bar" :style="`width: ${levelProgress}%`"></div>
              </div>
              <p class="text-sm text-cyan-400 mt-2">
                經驗值: {{ currentExp }}/{{ nextLevelExp }} 
                <span class="ml-4">距離 Lv.{{ currentLevel + 1 }} 還需 {{ nextLevelExp - currentExp }} 經驗</span>
              </p>
            </div>
            <div class="text-right">
              <div class="tech-status-badge mb-2">任務進行中: {{ activeTasks.length }}</div>
              <p class="text-sm text-gray-400">已完成任務</p>
              <div class="mt-2 text-cyan-400 font-bold text-lg">Lv.{{ currentLevel }} / 100</div>
            </div>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 標籤切換 -->
      <div class="flex space-x-4 mb-8 overflow-x-auto">
        <button 
          @click="activeTab = 'available'"
          :class="['tech-button whitespace-nowrap', activeTab === 'available' ? 'tech-button-active' : '']"
        >
          📋 可接取任務 ({{ availableTasks.length }})
        </button>
        <button 
          @click="activeTab = 'active'"
          :class="['tech-button whitespace-nowrap', activeTab === 'active' ? 'tech-button-active' : '']"
        >
          ⏰ 進行中任務 ({{ activeTasks.length }})
        </button>
        <button 
          @click="activeTab = 'completed'"
          :class="['tech-button whitespace-nowrap', activeTab === 'completed' ? 'tech-button-active' : '']"
        >
          ✅ 已完成任務 ({{ completedTasks.length }})
        </button>
        <button 
          @click="activeTab = 'custom'"
          :class="['tech-button whitespace-nowrap', activeTab === 'custom' ? 'tech-button-active' : '']"
        >
          🎯 自訂任務 ({{ customTasks.length }})
        </button>
      </div>

      <!-- 可接取任務 -->
      <div v-if="activeTab === 'available'" class="space-y-6">
        <div class="tech-frame">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
              <svg class="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              可接取任務
            </h2>
            
            <div v-if="availableTasks.length === 0" class="text-center py-12">
              <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <p class="text-gray-500 text-lg">目前沒有可接取的任務</p>
              <p class="text-gray-400 text-sm mt-2">完成更多技能來解鎖新任務</p>
            </div>

            <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div 
                v-for="task in availableTasks" 
                :key="task.id"
                class="task-card p-6 rounded-lg border-2 border-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 transition-all duration-300"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-white mb-2">{{ task.name }}</h3>
                    <p class="text-gray-400 mb-4">{{ task.description }}</p>
                    
                    <div class="flex flex-wrap gap-4 text-sm mb-4">
                      <div class="flex items-center text-cyan-400">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        獎勵經驗: +{{ task.exp }}
                      </div>
                      <div class="flex items-center text-yellow-400">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        建議時間: {{ task.suggestedTime }} 分鐘
                      </div>
                      <div class="flex items-center text-red-400">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                        失敗懲罰: -{{ task.exp * 2 }}
                      </div>
                    </div>
                    
                    <div class="mb-4">
                      <label class="block text-white text-sm font-medium mb-2">自訂時間 (分鐘)</label>
                      <input 
                        :value="task.customTime || task.suggestedTime"
                        @input="updateTaskTime(task.id, $event.target.value)"
                        type="number" 
                        min="5" 
                        max="600"
                        class="w-32 px-3 py-1 bg-gray-800 border border-gray-600 rounded text-white focus:border-cyan-400 focus:outline-none"
                      >
                    </div>
                  </div>
                </div>
                
                <button 
                  @click="acceptTask(task)"
                  class="tech-button w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium"
                >
                  🚀 接取任務
                </button>
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>
      </div>

      <!-- 進行中任務 -->
      <div v-if="activeTab === 'active'" class="space-y-6">
        <div class="tech-frame">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
              <svg class="w-6 h-6 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              進行中任務
            </h2>
            
            <div v-if="activeTasks.length === 0" class="text-center py-12">
              <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-gray-500 text-lg">目前沒有進行中的任務</p>
              <p class="text-gray-400 text-sm mt-2">前往可接取任務頁面開始新任務</p>
            </div>

            <div v-else class="space-y-6">
              <div 
                v-for="task in activeTasks" 
                :key="task.id"
                class="task-card p-6 rounded-lg border-2 border-orange-400 bg-orange-400/10"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-white mb-2">{{ task.name }}</h3>
                    <p class="text-gray-400 mb-4">{{ task.description }}</p>
                    
                    <!-- 倒數計時 -->
                    <div class="bg-orange-500/20 rounded-lg p-4 mb-4">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-orange-400 font-medium">剩餘時間</span>
                        <span :class="[
                          'text-2xl font-bold',
                          task.remainingTime < 300000 ? 'text-red-400' : 'text-orange-400'
                        ]">
                          {{ formatTime(task.remainingTime) }}
                        </span>
                      </div>
                      <div class="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          :class="[
                            'h-2 rounded-full transition-all duration-1000',
                            task.remainingTime < 300000 ? 'bg-red-400' : 'bg-orange-400'
                          ]"
                          :style="`width: ${Math.max(0, (task.remainingTime / (task.suggestedTime * 60 * 1000)) * 100)}%`"
                        ></div>
                      </div>
                    </div>
                    
                    <div class="flex flex-wrap gap-4 text-sm">
                      <div class="flex items-center text-cyan-400">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        獎勵經驗: +{{ task.exp }}
                      </div>
                      <div class="flex items-center text-red-400">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                        失敗懲罰: -{{ task.exp * 2 }}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="flex space-x-3">
                  <button 
                    @click="completeTask(task)"
                    class="flex-1 tech-button bg-green-600 hover:bg-green-700 text-white font-medium"
                  >
                    ✅ 完成任務
                  </button>
                  <button 
                    @click="abandonTask(task)"
                    class="flex-1 tech-button bg-red-600 hover:bg-red-700 text-white font-medium"
                  >
                    ❌ 放棄任務
                  </button>
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

      <!-- 已完成任務 -->
      <div v-if="activeTab === 'completed'" class="space-y-6">
        <div class="tech-frame">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
              <svg class="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              已完成任務
            </h2>
            
            <div v-if="completedTasks.length === 0" class="text-center py-12">
              <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-gray-500 text-lg">尚未完成任何任務</p>
              <p class="text-gray-400 text-sm mt-2">完成任務來獲得經驗值和技能進步</p>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                v-for="task in completedTasks" 
                :key="task.id"
                class="task-card p-6 rounded-lg border border-green-400 bg-green-400/10"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-white mb-2">{{ task.name }}</h3>
                    <p class="text-gray-400 mb-4">{{ task.description }}</p>
                    
                    <div class="flex flex-wrap gap-4 text-sm">
                      <div class="flex items-center text-green-400">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        已獲得經驗: +{{ task.exp }}
                      </div>
                      <div class="flex items-center text-gray-400">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        完成時間: {{ formatDate(task.completedAt) }}
                      </div>
                    </div>
                  </div>
                  <div class="ml-4">
                    <svg class="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
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

      <!-- 自訂任務區域 -->
      <div v-if="activeTab === 'custom'" class="space-y-6">
        <CustomTasks 
          :custom-tasks="customTasks"
          @add-task="addCustomTask"
          @start-task="startCustomTask"
          @complete-task="completeCustomTask"
          @stop-task="stopCustomTask"
          @restart-task="restartCustomTask"
          @delete-task="deleteCustomTask"
        />
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '~/composables/useAuth'
import { useFirebase } from '~/composables/useFirebase'
import CustomTasks from '~/components/CustomTasks.vue'

const router = useRouter()
const { user, isAuthenticated } = useAuth()
const { saveUserProgress, getUserProgress } = useFirebase()

// 狀態管理
const loading = ref(true)
const activeTab = ref('available')
const showNotification = ref(false)
const notificationMessage = ref('')

// 用戶數據
const userProfile = ref<any>(null)
const userProgress = ref<any>({
  level: 1,
  exp: 0,
  skillTrees: {},
  tasks: {
    available: [],
    active: [],
    completed: [],
    custom: []
  },
  activities: []
})

// 任務數據
const availableTasks = ref<any[]>([])
const activeTasks = ref<any[]>([])
const completedTasks = ref<any[]>([])
const customTasks = ref<any[]>([])

// 計時器管理
const taskTimers = ref(new Map())

// 計算屬性
const currentLevel = computed(() => {
  return Math.min(100, Math.floor(userProgress.value.exp / 10) + 1)
})

const currentExp = computed(() => userProgress.value.exp || 0)

const nextLevelExp = computed(() => {
  return currentLevel.value * 10
})

const levelProgress = computed(() => {
  const currentLevelExp = (currentLevel.value - 1) * 10
  const expInCurrentLevel = currentExp.value - currentLevelExp
  const expNeededForLevel = nextLevelExp.value - currentLevelExp
  return Math.min(100, (expInCurrentLevel / expNeededForLevel) * 100)
})

// 輔助函數
const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleString('zh-TW')
}

// 活動記錄
const addActivity = (description: string, type: string) => {
  const activity = {
    id: Date.now().toString(),
    type,
    description,
    timestamp: Date.now()
  }
  
  if (!userProgress.value.activities) {
    userProgress.value.activities = []
  }
  userProgress.value.activities.unshift(activity)
  
  // 保持最近20筆記錄
  if (userProgress.value.activities.length > 20) {
    userProgress.value.activities = userProgress.value.activities.slice(0, 20)
  }
}

// 進度保存
const saveProgressData = async () => {
  try {
    if (!user.value?.uid) return
    
    const progressData = {
      level: currentLevel.value,
      exp: userProgress.value.exp,
      skillTrees: userProgress.value.skillTrees,
      tasks: {
        available: availableTasks.value,
        active: activeTasks.value,
        completed: completedTasks.value,
        custom: customTasks.value
      },
      activities: userProgress.value.activities,
      lastUpdated: Date.now()
    }
    
    await saveUserProgress(user.value.uid, progressData)
    
    // 同步到 localStorage
    localStorage.setItem('userProgress', JSON.stringify(progressData))
  } catch (error) {
    console.error('保存進度失敗:', error)
  }
}

// 任務生成 - 基於技能樹生成任務
const generateAvailableTasks = () => {
  const major = userProfile.value?.major || ''
  
  // 基礎任務（初級，經驗2）
  const baseTasks = [
    {
      id: 'base_reading',
      name: '學術文獻閱讀',
      description: '閱讀相關領域的學術論文或教科書',
      exp: 2,
      suggestedTime: 60,
      category: '學習',
      difficulty: 'basic'
    },
    {
      id: 'base_exercise',
      name: '體能訓練',
      description: '進行有氧運動或重量訓練',
      exp: 2,
      suggestedTime: 45,
      category: '健康',
      difficulty: 'basic'
    }
  ]
  
  // 科系特定任務
  let majorTasks: any[] = []
  
  if (major.includes('電機')) {
    majorTasks = [
      {
        id: 'ee_circuit_basic',
        name: '基礎電路分析',
        description: '學習歐姆定律和基爾霍夫定律',
        exp: 3,
        suggestedTime: 90,
        category: '專業',
        difficulty: 'intermediate'
      },
      {
        id: 'ee_lab_basic',
        name: '電路實驗',
        description: '完成基礎電路實驗',
        exp: 5,
        suggestedTime: 120,
        category: '實作',
        difficulty: 'advanced'
      }
    ]
  } else if (major.includes('資訊')) {
    majorTasks = [
      {
        id: 'cs_algorithm_basic',
        name: '基礎演算法練習',
        description: '實作排序和搜尋演算法',
        exp: 3,
        suggestedTime: 90,
        category: '專業',
        difficulty: 'intermediate'
      },
      {
        id: 'cs_project_basic',
        name: '程式專案開發',
        description: '開發小型軟體應用',
        exp: 8,
        suggestedTime: 180,
        category: '實作',
        difficulty: 'advanced'
      }
    ]
  }
  
  availableTasks.value = [...baseTasks, ...majorTasks].filter(task => 
    !activeTasks.value.some(activeTask => activeTask.id === task.id) &&
    !completedTasks.value.some(completedTask => completedTask.id === task.id)
  )
}

// 任務管理
const updateTaskTime = (taskId: string, newTime: string) => {
  const task = availableTasks.value.find(t => t.id === taskId)
  if (task) {
    task.customTime = parseInt(newTime) || task.suggestedTime
  }
}

const acceptTask = (task: any) => {
  const timeLimit = task.customTime || task.suggestedTime
  const activeTask = {
    ...task,
    timeLimit,
    remainingTime: timeLimit * 60 * 1000,
    startTime: Date.now(),
    id: `${task.id}_${Date.now()}`
  }
  
  activeTasks.value.push(activeTask)
  startTaskTimer(activeTask)
  
  availableTasks.value = availableTasks.value.filter(t => t.id !== task.id)
  
  addActivity(`接取任務：${task.name}`, 'task_accepted')
  saveProgressData()
  showNotificationMessage(`已接取任務：${task.name}`)
}

const completeTask = async (task: any) => {
  if (taskTimers.value.has(task.id)) {
    clearInterval(taskTimers.value.get(task.id))
    taskTimers.value.delete(task.id)
  }
  
  userProgress.value.exp += task.exp
  
  const completedTask = {
    ...task,
    completedAt: Date.now(),
    status: 'completed'
  }
  
  completedTasks.value.push(completedTask)
  activeTasks.value = activeTasks.value.filter(t => t.id !== task.id)
  
  addActivity(`完成任務：${task.name} (+${task.exp} 經驗)`, 'task_completed')
  generateAvailableTasks()
  
  await saveProgressData()
  showNotificationMessage(`任務完成！獲得 ${task.exp} 經驗值`)
}

const abandonTask = async (task: any) => {
  if (taskTimers.value.has(task.id)) {
    clearInterval(taskTimers.value.get(task.id))
    taskTimers.value.delete(task.id)
  }
  
  const penalty = task.exp * 2
  userProgress.value.exp = Math.max(0, userProgress.value.exp - penalty)
  
  activeTasks.value = activeTasks.value.filter(t => t.id !== task.id)
  generateAvailableTasks()
  
  addActivity(`放棄任務：${task.name} (-${penalty} 經驗)`, 'task_abandoned')
  
  await saveProgressData()
  showNotificationMessage(`任務已放棄，扣除 ${penalty} 經驗值`)
}

// 計時器管理
const startTaskTimer = (task: any) => {
  const timer = setInterval(() => {
    task.remainingTime -= 1000
    
    if (task.remainingTime <= 0) {
      failTask(task)
    }
  }, 1000)
  
  taskTimers.value.set(task.id, timer)
}

const failTask = async (task: any) => {
  if (taskTimers.value.has(task.id)) {
    clearInterval(taskTimers.value.get(task.id))
    taskTimers.value.delete(task.id)
  }
  
  const penalty = task.exp * 2
  userProgress.value.exp = Math.max(0, userProgress.value.exp - penalty)
  
  activeTasks.value = activeTasks.value.filter(t => t.id !== task.id)
  generateAvailableTasks()
  
  addActivity(`任務失敗：${task.name} (-${penalty} 經驗)`, 'task_failed')
  
  await saveProgressData()
  showNotificationMessage(`任務超時失敗，扣除 ${penalty} 經驗值`)
}

// 自訂任務管理
const addCustomTask = (taskData: any) => {
  const task = {
    id: `custom_${Date.now()}`,
    ...taskData,
    status: 'idle',
    remainingTime: 0
  }
  
  customTasks.value.push(task)
  saveProgressData()
  showNotificationMessage('已新增自訂任務')
}

const startCustomTask = (task: any) => {
  task.status = 'active'
  task.remainingTime = task.duration * 60 * 1000
  
  const timer = setInterval(() => {
    task.remainingTime -= 1000
    
    if (task.remainingTime <= 0) {
      completeCustomTask(task)
    }
  }, 1000)
  
  taskTimers.value.set(task.id, timer)
  showNotificationMessage(`開始執行：${task.name}`)
}

const completeCustomTask = (task: any) => {
  if (taskTimers.value.has(task.id)) {
    clearInterval(taskTimers.value.get(task.id))
    taskTimers.value.delete(task.id)
  }
  
  task.status = 'completed'
  task.remainingTime = 0
  
  userProgress.value.exp += task.exp
  addActivity(`完成自訂任務：${task.name} (+${task.exp} 經驗)`, 'custom_task_completed')
  saveProgressData()
  showNotificationMessage(`完成自訂任務：${task.name}！獲得 ${task.exp} 經驗`)
}

const stopCustomTask = (task: any) => {
  if (taskTimers.value.has(task.id)) {
    clearInterval(taskTimers.value.get(task.id))
    taskTimers.value.delete(task.id)
  }
  
  task.status = 'idle'
  task.remainingTime = 0
  showNotificationMessage(`已停止：${task.name}`)
}

const restartCustomTask = (task: any) => {
  task.status = 'idle'
  task.remainingTime = 0
  showNotificationMessage(`任務已重置：${task.name}`)
}

const deleteCustomTask = (taskId: string) => {
  const task = customTasks.value.find(t => t.id === taskId)
  if (task && task.status === 'active') {
    stopCustomTask(task)
  }
  
  customTasks.value = customTasks.value.filter(t => t.id !== taskId)
  saveProgressData()
  showNotificationMessage('已刪除自訂任務')
}

// 通知管理
const showNotificationMessage = (message: string) => {
  notificationMessage.value = message
  showNotification.value = true
}

// 導航
const goToHome = () => {
  router.push('/panel')
}

// 數據載入
const loadUserData = async () => {
  try {
    if (!user.value?.uid) return
    
    // 載入用戶進度
    const progress = await getUserProgress(user.value.uid)
    if (progress) {
      userProgress.value = {
        level: progress.level || 1,
        exp: progress.exp || 0,
        skillTrees: progress.skillTrees || {},
        activities: progress.activities || []
      }
      
      if (progress.tasks) {
        availableTasks.value = progress.tasks.available || []
        activeTasks.value = progress.tasks.active || []
        completedTasks.value = progress.tasks.completed || []
        customTasks.value = progress.tasks.custom || []
      }
    }
    
    // 從 localStorage 讀取用戶資料
    const savedProfile = localStorage.getItem('userProfile')
    if (savedProfile) {
      userProfile.value = JSON.parse(savedProfile)
    }
    
    // 生成可用任務
    generateAvailableTasks()
    
    // 恢復計時器
    activeTasks.value.forEach(task => {
      if (task.remainingTime > 0) {
        startTaskTimer(task)
      }
    })
    
    customTasks.value.forEach(task => {
      if (task.status === 'active' && task.remainingTime > 0) {
        startTaskTimer(task)
      }
    })
    
  } catch (error) {
    console.error('載入用戶數據失敗:', error)
  }
}

// 監聽用戶變化
watch(user, async (newUser) => {
  if (newUser) {
    await loadUserData()
  }
})

// 生命週期
onMounted(async () => {
  try {
    if (isAuthenticated.value && user.value) {
      await loadUserData()
    }
  } catch (error) {
    console.error('初始化失敗:', error)
  } finally {
    loading.value = false
  }
})

onUnmounted(() => {
  // 清理所有計時器
  taskTimers.value.forEach(timer => clearInterval(timer))
  taskTimers.value.clear()
})
</script>

<style scoped>
.tech-button-active {
  background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
  border-color: #00bcd4;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 188, 212, 0.3);
}

.tech-progress {
  @apply w-full bg-gray-700 rounded-full h-2 overflow-hidden;
}

.tech-progress-bar {
  @apply h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-500;
}

.task-card {
  transition: all 0.3s ease;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}
</style>
