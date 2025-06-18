<template>
  <div class="custom-tasks-container">
    <div class="tech-frame">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <svg class="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          自訂任務區
        </h2>
        
        <!-- 快速任務模板 -->
        <div class="mb-8">
          <h3 class="text-lg font-bold text-cyan-400 mb-4">快速任務模板</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              v-for="template in taskTemplates" 
              :key="template.id"
              @click="addTemplateTask(template)"
              class="task-template cursor-pointer p-4 rounded-lg border-2 border-gray-600 bg-gray-800/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <div class="flex items-center mb-2">
                <span class="text-2xl mr-3">{{ template.icon }}</span>
                <h4 class="text-white font-medium">{{ template.name }}</h4>
              </div>
              <p class="text-gray-400 text-sm mb-2">{{ template.description }}</p>
              <div class="flex items-center justify-between text-xs">
                <span class="text-cyan-400">經驗: +{{ template.exp }}/30分鐘</span>
                <span class="text-gray-400">{{ template.category }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 新增自訂任務表單 -->
        <div class="mb-8">
          <h3 class="text-lg font-bold text-cyan-400 mb-4">新增自訂任務</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <label class="block text-white text-sm font-medium mb-2">任務名稱</label>
                <input 
                  v-model="newTask.name"
                  type="text" 
                  placeholder="輸入任務名稱..."
                  class="tech-input"
                >
              </div>
              
              <div>
                <label class="block text-white text-sm font-medium mb-2">任務描述</label>
                <textarea 
                  v-model="newTask.description"
                  placeholder="描述任務內容..."
                  rows="3"
                  class="tech-input"
                ></textarea>
              </div>
              
              <div>
                <label class="block text-white text-sm font-medium mb-2">任務分類</label>
                <select v-model="newTask.category" class="tech-input">
                  <option value="">選擇分類</option>
                  <option value="體能健康">體能健康</option>
                  <option value="學習成長">學習成長</option>
                  <option value="興趣發展">興趣發展</option>
                  <option value="生活習慣">生活習慣</option>
                  <option value="工作技能">工作技能</option>
                  <option value="其他">其他</option>
                </select>
              </div>
            </div>
            
            <div class="space-y-4">
              <div>
                <label class="block text-white text-sm font-medium mb-2">每次時長 (分鐘)</label>
                <input 
                  v-model.number="newTask.duration"
                  type="number" 
                  min="1" 
                  max="300"
                  placeholder="30"
                  class="tech-input"
                >
              </div>
              
              <div>
                <label class="block text-white text-sm font-medium mb-2">每30分鐘經驗值</label>
                <input 
                  v-model.number="newTask.expPer30Min"
                  type="number" 
                  min="1" 
                  max="10"
                  placeholder="1"
                  class="tech-input"
                >
              </div>
              
              <div>
                <label class="block text-white text-sm font-medium mb-2">重複週期</label>
                <select v-model="newTask.repeat" class="tech-input">
                  <option value="once">單次任務</option>
                  <option value="daily">每日</option>
                  <option value="weekly">每週</option>
                  <option value="custom">自訂</option>
                </select>
              </div>
              
              <button 
                @click="createCustomTask"
                :disabled="!canCreateTask"
                class="tech-button w-full"
                :class="{ 'opacity-50 cursor-not-allowed': !canCreateTask }"
              >
                <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                新增任務
              </button>
            </div>
          </div>
        </div>
        
        <!-- 我的自訂任務列表 -->
        <div>
          <h3 class="text-lg font-bold text-cyan-400 mb-4">我的自訂任務</h3>
          <div v-if="customTasks.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <p class="text-gray-500 text-lg">尚未建立任何自訂任務</p>
            <p class="text-gray-400 text-sm mt-2">使用上方模板或自行建立任務</p>
          </div>
          
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              v-for="task in customTasks" 
              :key="task.id"
              class="custom-task-card p-4 rounded-lg border-2 border-gray-600 bg-gray-800/50"
            >
              <div class="flex items-start justify-between mb-3">
                <div class="flex-1">
                  <h4 class="text-white font-medium">{{ task.name }}</h4>
                  <p class="text-gray-400 text-sm">{{ task.description }}</p>
                </div>
                <div class="flex space-x-2 ml-2">
                  <button 
                    @click="editTask(task)"
                    class="text-cyan-400 hover:text-cyan-300 p-1"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </button>
                  <button 
                    @click="deleteTask(task.id)"
                    class="text-red-400 hover:text-red-300 p-1"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="space-y-2 text-sm">
                <div class="flex items-center justify-between">
                  <span class="text-gray-400">分類</span>
                  <span class="text-cyan-400">{{ task.category }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-400">時長</span>
                  <span class="text-white">{{ task.duration }} 分鐘</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-400">經驗值</span>
                  <span class="text-green-400">+{{ Math.ceil(task.duration / 30) * task.expPer30Min }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-400">重複</span>
                  <span class="text-white">{{ getRepeatText(task.repeat) }}</span>
                </div>
              </div>
              
              <button 
                @click="startCustomTask(task)"
                class="tech-button w-full mt-4"
              >
                開始任務
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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface CustomTask {
  id: string
  name: string
  description: string
  category: string
  duration: number
  expPer30Min: number
  repeat: string
  createdAt: number
}

interface TaskTemplate {
  id: string
  name: string
  description: string
  icon: string
  category: string
  duration: number
  exp: number
}

const emit = defineEmits<{
  taskCreated: [task: CustomTask]
  taskStarted: [task: CustomTask]
  taskDeleted: [taskId: string]
  taskUpdated: [task: CustomTask]
}>()

const props = defineProps<{
  customTasks: CustomTask[]
}>()

// 新任務表單
const newTask = ref({
  name: '',
  description: '',
  category: '',
  duration: 30,
  expPer30Min: 1,
  repeat: 'once'
})

// 任務模板
const taskTemplates = ref<TaskTemplate[]>([
  {
    id: 'exercise_30',
    name: '運動 30 分鐘',
    description: '進行有氧運動、重訓或其他體能活動',
    icon: '🏃',
    category: '體能健康',
    duration: 30,
    exp: 1
  },
  {
    id: 'reading_30',
    name: '閱讀 30 分鐘',
    description: '閱讀書籍、文章或學習資料',
    icon: '📚',
    category: '學習成長',
    duration: 30,
    exp: 1
  },
  {
    id: 'meditation_15',
    name: '冥想 15 分鐘',
    description: '進行冥想或正念練習',
    icon: '🧘',
    category: '生活習慣',
    duration: 15,
    exp: 1
  },
  {
    id: 'programming_60',
    name: '程式練習 60 分鐘',
    description: '練習程式設計或完成程式專案',
    icon: '💻',
    category: '工作技能',
    duration: 60,
    exp: 2
  },
  {
    id: 'drawing_45',
    name: '繪畫 45 分鐘',
    description: '進行繪畫、設計或創作活動',
    icon: '🎨',
    category: '興趣發展',
    duration: 45,
    exp: 1
  },
  {
    id: 'music_30',
    name: '音樂練習 30 分鐘',
    description: '樂器練習或音樂創作',
    icon: '🎵',
    category: '興趣發展',
    duration: 30,
    exp: 1
  }
])

// 計算屬性
const canCreateTask = computed(() => {
  return newTask.value.name.trim() && 
         newTask.value.description.trim() && 
         newTask.value.category && 
         newTask.value.duration > 0 && 
         newTask.value.expPer30Min > 0
})

// 方法
const addTemplateTask = (template: TaskTemplate) => {
  newTask.value = {
    name: template.name,
    description: template.description,
    category: template.category,
    duration: template.duration,
    expPer30Min: template.exp,
    repeat: 'once'
  }
}

const createCustomTask = () => {
  if (!canCreateTask.value) return
  
  const task: CustomTask = {
    id: Date.now().toString(),
    name: newTask.value.name.trim(),
    description: newTask.value.description.trim(),
    category: newTask.value.category,
    duration: newTask.value.duration,
    expPer30Min: newTask.value.expPer30Min,
    repeat: newTask.value.repeat,
    createdAt: Date.now()
  }
  
  emit('taskCreated', task)
  
  // 重置表單
  newTask.value = {
    name: '',
    description: '',
    category: '',
    duration: 30,
    expPer30Min: 1,
    repeat: 'once'
  }
}

const startCustomTask = (task: CustomTask) => {
  emit('taskStarted', task)
}

const editTask = (task: CustomTask) => {
  newTask.value = {
    name: task.name,
    description: task.description,
    category: task.category,
    duration: task.duration,
    expPer30Min: task.expPer30Min,
    repeat: task.repeat
  }
  
  // 刪除原任務，用戶可以重新建立
  deleteTask(task.id)
}

const deleteTask = (taskId: string) => {
  emit('taskDeleted', taskId)
}

const getRepeatText = (repeat: string) => {
  const repeatMap: { [key: string]: string } = {
    once: '單次',
    daily: '每日',
    weekly: '每週',
    custom: '自訂'
  }
  return repeatMap[repeat] || '單次'
}
</script>

<style scoped>
.custom-tasks-container {
  @apply w-full;
}

.tech-input {
  @apply w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors;
}

.task-template {
  @apply transform hover:scale-105;
}

.custom-task-card {
  @apply hover:border-gray-500 transition-all duration-300;
}
</style>
