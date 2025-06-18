<template>
  <div class="min-h-screen tech-bg tech-grid-bg relative">
    <!-- 載入畫面 -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p class="text-cyan-400 text-lg font-semibold">載入技能樹中...</p>
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

      <!-- 學系選擇區域 -->
      <div v-if="showMajorSelection" class="tech-frame mb-8">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-white mb-4">
            <svg class="w-6 h-6 inline-block mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            選擇您的學系或興趣
          </h2>
          <p class="text-gray-400 mb-6">系統將根據您的選擇推薦合適的技能樹</p>
          
          <!-- 學系選擇 -->
          <div class="mb-6">
            <label class="block text-white text-lg font-semibold mb-3">主修學系</label>
            <select v-model="selectedMajor" class="tech-input w-full md:w-1/2">
              <option value="">請選擇學系...</option>
              <optgroup v-for="(group, groupName) in academicGroups" :key="groupName" :label="group.name">
                <option 
                  v-for="subcategory in group.subcategories" 
                  :key="subcategory.id" 
                  :value="subcategory.id"
                >
                  {{ subcategory.name }}
                </option>
              </optgroup>
            </select>
          </div>

          <!-- 興趣選擇 -->
          <div class="mb-6">
            <label class="block text-white text-lg font-semibold mb-3">興趣愛好（可多選）</label>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              <button
                v-for="interest in commonInterests"
                :key="interest"
                @click="toggleInterest(interest)"
                :class="[
                  'px-3 py-2 rounded text-sm border transition-all',
                  selectedInterests.includes(interest)
                    ? 'bg-cyan-400 text-black border-cyan-400'
                    : 'bg-gray-800 text-gray-300 border-gray-600 hover:border-cyan-400'
                ]"
              >
                {{ interest }}
              </button>
            </div>
            <div class="mt-3">
              <input
                v-model="customInterest"
                @keyup.enter="addCustomInterest"
                placeholder="或輸入其他興趣..."
                class="tech-input"
              />
              <button 
                @click="addCustomInterest"
                class="tech-button ml-2"
                :disabled="!customInterest"
              >
                新增
              </button>
            </div>
          </div>

          <!-- 確認按鈕 -->
          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm text-gray-400">
                已選擇: {{ selectedMajor ? getAcademicName(selectedMajor) : '無' }}
                <span v-if="selectedInterests.length > 0" class="ml-2">
                  + {{ selectedInterests.length }} 項興趣
                </span>
              </p>
            </div>
            <button 
              @click="applySelection"
              class="tech-button-complex"
              :disabled="!selectedMajor && selectedInterests.length === 0"
            >
              生成專屬技能樹
            </button>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 等級系統標題區域 -->
      <div v-else class="tech-frame mb-8">
        <div class="p-6">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-4xl font-bold text-white mb-2">
                <span class="tech-status mr-4">Lv.{{ currentLevel }}</span>
                技能樹系統
              </h1>
              <p class="text-gray-400 text-lg">提升技能，解鎖更多學習路徑與挑戰</p>
              <div class="tech-progress mt-4 max-w-md">
                <div class="tech-progress-bar" :style="`width: ${levelProgress}%`"></div>
              </div>
              <p class="text-sm text-cyan-400 mt-2">
                經驗值: {{ currentExp }}/{{ nextLevelExp }} 
                <span class="ml-4">距離 Lv.{{ currentLevel + 1 }} 還需 {{ nextLevelExp - currentExp }} 經驗</span>
              </p>
            </div>
            <div class="text-right">
              <div class="tech-status-badge mb-2">已完成技能: {{ completedSkillsCount }}</div>
              <button 
                @click="showMajorSelection = true"
                class="tech-button text-sm mt-2"
              >
                重新選擇學系
              </button>
            </div>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 推薦技能樹顯示 -->
      <div v-if="!showMajorSelection && recommendedSkillTrees.length > 0" class="mb-8">
        <h2 class="text-xl font-bold text-white mb-4">為您推薦的技能樹</h2>
        <div class="flex space-x-4 mb-6 overflow-x-auto">
          <button 
            v-for="tree in recommendedSkillTrees" 
            :key="tree.name"
            @click="selectedSkillTree = tree.name"
            :class="[
              'tech-button whitespace-nowrap flex items-center', 
              selectedSkillTree === tree.name ? 'tech-button-active' : ''
            ]"
          >
            <span class="mr-2">{{ tree.icon }}</span>
            {{ tree.name }}
          </button>
        </div>
      </div>

      <!-- 技能樹切換選項（顯示所有可用技能樹） -->
      <div v-if="!showMajorSelection" class="mb-8">
        <h3 class="text-lg font-semibold text-white mb-4">所有技能樹</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          <button 
            v-for="(tree, key) in skillTreesCollection" 
            :key="key"
            @click="selectedSkillTree = key"
            :class="[
              'tech-button text-sm whitespace-nowrap', 
              selectedSkillTree === key ? 'tech-button-active' : ''
            ]"
          >
            <span class="mr-1">{{ tree.icon }}</span>
            {{ tree.name }}
          </button>
        </div>
      </div>

      <!-- 技能樹組件 -->
      <div v-if="!showMajorSelection && currentSkillTreeData">
        <SkillTree 
          :skill-tree="currentSkillTreeData"
          @skill-toggle="handleSkillToggle"
        />
      </div>

      <!-- 統計資訊 -->
      <div v-if="!showMajorSelection" class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <!-- 整體進度 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 00-2 2v6a2 2 0 00-2 2z"></path>
              </svg>
              整體進度
            </h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">總經驗</span>
                <span class="text-cyan-400 font-bold">{{ currentExp }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">總等級</span>
                <span class="text-white font-bold">{{ currentLevel }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">完成技能</span>
                <span class="text-green-400 font-bold">{{ completedSkillsCount }}</span>
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>

        <!-- 當前技能樹進度 -->
        <div class="tech-frame" v-if="currentSkillTreeData">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <span class="mr-2">{{ currentSkillTreeData.icon }}</span>
              {{ currentSkillTreeData.name }}
            </h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">已完成</span>
                <span class="text-green-400 font-bold">{{ currentTreeCompletedCount }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">總技能</span>
                <span class="text-white font-bold">{{ currentTreeTotalCount }}</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-cyan-400 to-green-400 h-2 rounded-full transition-all duration-500"
                  :style="`width: ${currentTreeProgress}%`"
                ></div>
              </div>
              <p class="text-sm text-cyan-400">{{ currentTreeProgress.toFixed(1) }}% 完成</p>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>

        <!-- 推薦提示 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              學習建議
            </h3>
            <div class="space-y-2 text-sm">
              <p class="text-gray-400">
                建議從 <span class="text-cyan-400">{{ selectedMajor ? getAcademicName(selectedMajor) : '基礎' }}</span> 技能樹開始
              </p>
              <p class="text-gray-400">
                完成基礎技能後可解鎖進階內容
              </p>
              <p class="text-gray-400">
                定期練習軟技能提升整體能力
              </p>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>
      </div>
    </div>

    <!-- 未登入提示 -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
        <h2 class="text-2xl font-bold text-white mb-4">請先登入</h2>
        <p class="text-gray-400 mb-6">您需要登入才能訪問技能樹系統</p>
        <button @click="goToLogin" class="tech-button-complex">
          前往登入
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '~/composables/useAuth'
import { useFirebase } from '~/composables/useFirebase'
import { 
  skillTreesCollection, 
  recommendSkillTrees, 
  getSkillTreeByMajor,
  getSkillTreeByInterest,
  type SkillTree as SkillTreeType
} from '~/data/skill-trees/index'
import { taiwanAcademicGroups } from '~/data/academic-groups'
import SkillTree from '~/components/SkillTree.vue'

const router = useRouter()
const { isAuthenticated, user } = useAuth()
const { saveUserProgress, getUserProgress } = useFirebase()

// 狀態管理
const loading = ref(true)
const showMajorSelection = ref(true)
const selectedSkillTree = ref('資訊工程')
const selectedMajor = ref('')
const selectedInterests = ref<string[]>([])
const customInterest = ref('')

// 學系和興趣數據
const academicGroups = taiwanAcademicGroups
const commonInterests = [
  '繪畫', '音樂', '攝影', '運動', '健身', '閱讀', '寫作', '程式設計',
  '遊戲', '旅行', '料理', '園藝', '手作', '舞蹈', '唱歌', '學語言'
]

// 用戶數據
const userProgress = ref<any>({
  level: 1,
  exp: 0,
  skillTrees: {},
  activities: [],
  selectedMajor: '',
  selectedInterests: []
})

// 推薦的技能樹
const recommendedSkillTrees = ref<SkillTreeType[]>([])

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

const currentSkillTreeData = computed(() => {
  const tree = skillTreesCollection[selectedSkillTree.value]
  if (!tree) {
    return null
  }
  
  const userSkillTree = userProgress.value.skillTrees[selectedSkillTree.value] || {}
  
  // 合併用戶進度與配置
  return {
    ...tree,
    levels: tree.levels.map(level => ({
      ...level,
      skills: level.skills.map(skill => {
        const isCompleted = userSkillTree[skill.id]?.completed || false
        const isAvailable = isSkillAvailable(skill.id, level, tree)
        
        return {
          ...skill,
          completed: isCompleted,
          available: isAvailable
        }
      })
    }))
  }
})

const completedSkillsCount = computed(() => {
  let count = 0
  Object.values(userProgress.value.skillTrees).forEach((tree: any) => {
    Object.values(tree).forEach((skill: any) => {
      if (skill.completed) count++
    })
  })
  return count
})

const currentTreeCompletedCount = computed(() => {
  const tree = userProgress.value.skillTrees[selectedSkillTree.value] || {}
  return Object.values(tree).filter((skill: any) => skill.completed).length
})

const currentTreeTotalCount = computed(() => {
  const tree = skillTreesCollection[selectedSkillTree.value]
  return tree ? tree.levels.reduce((total, level) => total + level.skills.length, 0) : 0
})

const currentTreeProgress = computed(() => {
  if (currentTreeTotalCount.value === 0) return 0
  return (currentTreeCompletedCount.value / currentTreeTotalCount.value) * 100
})

// 方法
const toggleInterest = (interest: string) => {
  const index = selectedInterests.value.indexOf(interest)
  if (index > -1) {
    selectedInterests.value.splice(index, 1)
  } else {
    selectedInterests.value.push(interest)
  }
}

const addCustomInterest = () => {
  if (customInterest.value && !selectedInterests.value.includes(customInterest.value)) {
    selectedInterests.value.push(customInterest.value)
    customInterest.value = ''
  }
}

const getAcademicName = (id: string) => {
  for (const group of academicGroups) {
    const subcategory = group.subcategories.find(sub => sub.id === id)
    if (subcategory) return subcategory.name
  }
  return id
}

const applySelection = () => {
  // 保存用戶選擇
  userProgress.value.selectedMajor = selectedMajor.value
  userProgress.value.selectedInterests = selectedInterests.value
  
  // 生成推薦技能樹
  recommendedSkillTrees.value = recommendSkillTrees(selectedMajor.value, selectedInterests.value)
  
  // 設置預設選中的技能樹
  if (recommendedSkillTrees.value.length > 0) {
    selectedSkillTree.value = recommendedSkillTrees.value[0].name
  }
  
  showMajorSelection.value = false
  saveUserProgressData()
}

const isSkillAvailable = (skillId: string, level: any, tree: SkillTreeType) => {
  // 檢查等級需求
  if (currentLevel.value < level.requiredLevel) {
    return false
  }
  
  // 檢查前置技能
  const skill = level.skills.find((s: any) => s.id === skillId)
  if (!skill || !skill.requiredSkills) return true
  
  const userSkillTree = userProgress.value.skillTrees[tree.name] || {}
  return skill.requiredSkills.every((reqId: string) => userSkillTree[reqId]?.completed)
}

const handleSkillToggle = async (skill: any) => {
  const skillId = skill.id
  const treeName = selectedSkillTree.value
  if (!userProgress.value.skillTrees[treeName]) {
    userProgress.value.skillTrees[treeName] = {}
  }
  
  const currentStatus = userProgress.value.skillTrees[treeName][skillId]?.completed || false
  const newStatus = !currentStatus
  
  // 找到技能數據
  const tree = skillTreesCollection[treeName]
  let skillData = null
  for (const level of tree.levels) {
    skillData = level.skills.find((s: any) => s.id === skillId)
    if (skillData) break
  }
  
  if (!skillData) return
  
  // 更新技能狀態
  userProgress.value.skillTrees[treeName][skillId] = {
    completed: newStatus,
    completedAt: newStatus ? Date.now() : null
  }
  
  // 更新經驗值
  if (newStatus) {
    userProgress.value.exp += skillData.exp
    
    // 添加活動記錄
    if (!userProgress.value.activities) {
      userProgress.value.activities = []
    }
    userProgress.value.activities.unshift({
      id: Date.now(),
      type: 'skill_completed',
      description: `完成技能: ${skillData.name}`,
      exp: skillData.exp,
      timestamp: Date.now()
    })
  } else {
    userProgress.value.exp = Math.max(0, userProgress.value.exp - skillData.exp)
  }
  
  await saveUserProgressData()
}

const saveUserProgressData = async () => {
  if (user.value) {
    await saveUserProgress(user.value.uid, userProgress.value)
  }
}

const loadUserData = async () => {
  if (user.value) {
    const data = await getUserProgress(user.value.uid)
    if (data) {
      userProgress.value = { ...userProgress.value, ...data }
      
      // 如果用戶已有選擇，直接顯示技能樹
      if (data.selectedMajor || (data.selectedInterests && data.selectedInterests.length > 0)) {
        selectedMajor.value = data.selectedMajor || ''
        selectedInterests.value = data.selectedInterests || []
        recommendedSkillTrees.value = recommendSkillTrees(data.selectedMajor, data.selectedInterests)
        if (recommendedSkillTrees.value.length > 0) {
          selectedSkillTree.value = recommendedSkillTrees.value[0].name
        }
        showMajorSelection.value = false
      }
    }
  }
}

const goToHome = () => {
  router.push('/')
}

const goToLogin = () => {
  router.push('/login')
}

onMounted(async () => {
  loading.value = true
  await loadUserData()
  loading.value = false
})
</script>

<style scoped>
.tech-input {
  @apply bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded focus:border-cyan-400 focus:outline-none;
}
</style>
