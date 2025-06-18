<template>
  <div class="min-h-screen tech-bg tech-grid-bg relative">
    <!-- 載入畫面 -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p class="text-cyan-400 text-lg font-semibold">載入技能樹中...</p>
      </div>
    </div>    <!-- 主要內容 -->
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
              <p class="text-sm text-gray-400">總技能數</p>
              <div class="mt-2 text-cyan-400 font-bold text-lg">Lv.{{ currentLevel }} / 100</div>
            </div>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>      </div>

      <!-- 學系選擇區域 -->
      <div v-if="showMajorSelection" class="tech-frame mb-8">
        <div class="p-6">          <h2 class="text-2xl font-bold text-white mb-4">
            <svg class="w-6 h-6 inline-block mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.168 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            臨時設定技能樹
          </h2><div class="bg-blue-900/20 border border-blue-400/30 rounded-lg p-4 mb-6">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p class="text-blue-300 text-sm font-medium">初次設定或資料不完整</p>
                <p class="text-gray-300 text-sm mt-1">
                  系統未能從您的個人資料中讀取到科系、專長或興趣資訊。
                  建議您先前往 
                  <a href="/profile" class="text-cyan-400 hover:text-cyan-300 underline">個人資料頁面</a> 
                  完善資訊後，系統將自動為您生成專屬技能樹，無需手動選擇。
                </p>
                <p class="text-gray-400 text-xs mt-2">
                  您也可以在下方臨時選擇，但建議完善個人資料以獲得最佳體驗。
                </p>
              </div>
            </div>
          </div>
          
          <!-- 學系選擇 -->
          <div class="mb-6">
            <label class="block text-white text-lg font-semibold mb-3">主修學系</label>
            <select v-model="selectedMajor" class="bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded focus:border-cyan-400 focus:outline-none w-full md:w-1/2">
              <option value="">請選擇學系...</option>
              <optgroup v-for="(group, groupName) in academicGroups" :key="groupName" :label="String(groupName)">
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

      <!-- 專屬技能樹顯示 -->
      <div v-else-if="recommendedSkillTrees.length > 0" class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-white">
            <svg class="w-6 h-6 inline-block mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            您的專屬技能樹
          </h2>
          <div class="flex space-x-2">
            <span class="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded">
              根據個人資料自動生成
            </span>
            <button 
              @click="showMajorSelection = true"
              class="tech-button text-sm"
            >
              重新設定
            </button>
          </div>
        </div>
        
        <!-- 資料來源提示 -->
        <div v-if="userProfile" class="bg-gray-800/50 border border-gray-600/50 rounded-lg p-3 mb-4">
          <div class="flex items-start space-x-3">
            <svg class="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="text-sm">
              <p class="text-green-300 font-medium">已自動讀取個人資料</p>
              <div class="text-gray-300 mt-1 space-y-1">
                <p v-if="userProfile.major">
                  <span class="text-gray-400">科系:</span> {{ userProfile.major }}
                </p>
                <p v-if="userProfile.skills && userProfile.skills.length > 0">
                  <span class="text-gray-400">專長:</span> {{ userProfile.skills.join('、') }}
                </p>
                <p v-if="userProfile.interests && userProfile.interests.length > 0">
                  <span class="text-gray-400">興趣:</span> {{ userProfile.interests.join('、') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
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

      <!-- 技能樹組件 -->
      <div v-if="!showMajorSelection">
        <SkillTree 
          :skill-tree="currentSkillTreeData"
          @skill-toggle="handleSkillToggle"
        />
      </div>

      <!-- 統計資訊 -->
      <div v-if="!showMajorSelection" class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <!-- 整體進度 -->
        <div class="tech-frame">
          <div class="p-6">            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 00-2 2v6a2 2 0 00-2 2z"></path>
              </svg>
              {{ currentSkillTreeData.name }} 進度
            </h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">當前等級</span>
                <span class="text-cyan-400 font-bold">Lv.{{ currentLevel }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">經驗值</span>
                <span class="text-white font-bold">{{ currentExp }} EXP</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">升級進度</span>
                <span class="text-green-400 font-bold">{{ levelProgress.toFixed(1) }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-cyan-400 to-green-400 h-2 rounded-full transition-all duration-500"
                  :style="`width: ${levelProgress}%`"
                ></div>
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>

        <!-- 當前技能樹進度 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
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
        </div>        <!-- 相關技能樹等級 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              您的技能樹等級
            </h3>
            <div class="space-y-2 max-h-32 overflow-y-auto">
              <div 
                v-for="stat in allSkillTreesStats" 
                :key="stat.name"
                class="flex justify-between items-center text-sm p-2 bg-gray-800/50 rounded"
              >
                <span class="text-gray-300">{{ stat.name }}</span>
                <div class="flex items-center space-x-2">
                  <span class="text-cyan-400 font-bold">Lv.{{ stat.level }}</span>
                  <span class="text-gray-500">({{ stat.exp }} EXP)</span>
                </div>
              </div>
              <div v-if="allSkillTreesStats.length === 0" class="text-gray-500 text-sm text-center py-4">
                尚未開始任何技能樹
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '~/composables/useAuth'
import { useFirebase } from '~/composables/useFirebase'
import { 
  skillTreesCollection, 
  recommendSkillTrees, 
  getSkillTreeByMajor,
  getSkillTreeByInterest,
  calculateSkillTreeLevel,
  getSkillTreeProgress,
  getAvailableSkillsByLevel,
  type SkillTree as SkillTreeType
} from '~/data/skill-trees/index'
import { taiwanAcademicGroups } from '~/data/academic-groups'
import SkillTree from '~/components/SkillTree.vue'

const router = useRouter()
const { isAuthenticated, user } = useAuth()
const { saveUserProgress, getUserProgress } = useFirebase()

// 狀態管理
const loading = ref(true)
const selectedSkillTree = ref('資訊工程')
const showMajorSelection = ref(false)
const selectedMajor = ref('')
const selectedInterests = ref<string[]>([])

// 學系和興趣數據
const academicGroups = taiwanAcademicGroups
const recommendedSkillTrees = ref<SkillTreeType[]>([])
const commonInterests = [
  // 🎨 藝術與創作類
  '繪畫', '水彩', '油畫', '數位畫', '攝影', '風景攝影', '人像攝影', '街拍',
  '書法', '手寫字', '手工藝', '編織', '黏土', '刺繡', '手作飾品',
  
  // 🎼 表演藝術類  
  '唱歌', '合唱', '音樂創作', '作詞', '作曲', '編曲', '鋼琴', '吉他', '小提琴',
  '舞蹈', '街舞', '芭蕾', '民族舞', '戲劇', '表演', '魔術',
  
  // 📚 知識學習類
  '閱讀', '小說', '歷史', '哲學', '心理學', '英文', '日文', '西班牙文',
  '寫作', '散文', '詩', '部落格', '數獨', '象棋', '圍棋', '科學研究',
  
  // 🧘‍♀️ 身心健康類
  '瑜珈', '冥想', '營養管理', '飲食管理', '園藝', '植物照顧', '戶外散步', '自然療癒',
  
  // ⚽ 運動類
  '健身', '重訓', '籃球', '足球', '網球', '桌球', '游泳', '衝浪', '潛水',
  '登山', '健行', '自行車', '公路車', '登山車', '武術', '自衛術', '跑步',
  
  // 🎮 娛樂與休閒類
  '打電動', '電競', 'PC遊戲', 'Switch', '手遊', '桌遊', '卡牌遊戲',
  '看電影', '追劇', '模型', '公仔收集', '鋼彈', '動漫周邊', '旅行', '背包客',
  
  // 其他
  '程式設計', '編程', '料理', '烹飪'
]

// 用戶數據
const userProfile = ref<any>(null)
const userProgress = ref<any>({
  level: 1,
  exp: 0,
  skillTrees: {},
  activities: [],
  selectedMajor: '',
  selectedInterests: []
})

// 導入技能樹配置
const skillTrees = ref(skillTreesCollection)

// 計算屬性
const currentLevel = computed(() => {
  // 當前選中技能樹的等級
  const progress = getSkillTreeProgress(selectedSkillTree.value, userProgress.value.skillTrees)
  return progress.currentLevel
})

const currentExp = computed(() => {
  // 當前選中技能樹的經驗值
  const progress = getSkillTreeProgress(selectedSkillTree.value, userProgress.value.skillTrees)
  return progress.totalExp
})

const currentSkillTreeProgress = computed(() => {
  return getSkillTreeProgress(selectedSkillTree.value, userProgress.value.skillTrees)
})

const nextLevelExp = computed(() => {
  return currentSkillTreeProgress.value.nextLevelExp
})

const levelProgress = computed(() => {
  return currentSkillTreeProgress.value.levelProgress
})

const currentSkillTreeData = computed(() => {
  const tree = skillTrees.value[selectedSkillTree.value]
  if (!tree) {
    console.error('技能樹不存在:', selectedSkillTree.value, '可用技能樹:', Object.keys(skillTrees.value))
    return { name: '未知技能樹', levels: [] }
  }
  
  const treeProgress = currentSkillTreeProgress.value
  const userSkillTree = userProgress.value.skillTrees[selectedSkillTree.value] || {}
  
  // 合併用戶進度與配置
  const mergedTree = {
    ...tree,
    levels: tree.levels.map(level => ({
      ...level,
      skills: level.skills.map(skill => {
        const isAvailable = isSkillAvailable(skill.id, level, tree, treeProgress.currentLevel)
        const skillData = userSkillTree[skill.id]
        const isCompleted = skillData?.completed || false
        
        return {
          ...skill,
          completed: isCompleted,
          available: isAvailable
        }
      })
    }))
  }
  
  return mergedTree
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
  const userSkillTree = userProgress.value.skillTrees[selectedSkillTree.value] || {}
  return Object.values(userSkillTree).filter((skill: any) => skill.completed).length
})

const currentTreeTotalCount = computed(() => {
  return currentSkillTreeData.value.levels.reduce((total, level) => total + level.skills.length, 0)
})

const currentTreeProgress = computed(() => {
  if (currentTreeTotalCount.value === 0) return 0
  return (currentTreeCompletedCount.value / currentTreeTotalCount.value) * 100
})

const recentActivities = computed(() => {
  return (userProgress.value.activities || []).sort((a: any, b: any) => b.timestamp - a.timestamp)
})

// 所有技能樹等級統計 - 只顯示推薦的技能樹
const allSkillTreesStats = computed(() => {
  const stats: Array<{name: string, level: number, exp: number, completedSkills: number}> = []
  
  // 只統計推薦的技能樹
  const treesToShow = recommendedSkillTrees.value.length > 0 
    ? recommendedSkillTrees.value.map(tree => tree.name)
    : Object.keys(skillTreesCollection)
  
  treesToShow.forEach(treeName => {
    const progress = getSkillTreeProgress(treeName, userProgress.value.skillTrees)
    if (progress.completedSkills > 0 || progress.totalExp > 0) {
      stats.push({
        name: treeName,
        level: progress.currentLevel,
        exp: progress.totalExp,
        completedSkills: progress.completedSkills
      })
    }
  })
  
  return stats
})
// 輔助函數
const isSkillAvailable = (skillId: string, currentLevel: any, tree: any, treeLevel: number) => {
  // 檢查技能樹等級需求
  if (treeLevel < currentLevel.requiredLevel) {
    return false
  }
  
  const userSkillTree = userProgress.value.skillTrees[selectedSkillTree.value] || {}
  
  // 找到目標技能
  let targetSkill: any = null
  for (const level of tree.levels) {
    const skill = level.skills.find((s: any) => s.id === skillId)
    if (skill) {
      targetSkill = skill
      break
    }
  }
  
  if (!targetSkill) {
    console.log(`技能 ${skillId} 未找到`)
    return false
  }
  
  // 如果沒有前置技能，則可用
  if (!targetSkill.requiredSkills || targetSkill.requiredSkills.length === 0) {
    console.log(`技能 ${skillId} 沒有前置技能，設為可用`)
    return true
  }
  
  // 檢查所有前置技能是否都已完成
  const allRequiredCompleted = targetSkill.requiredSkills.every((requiredId: string) => 
    userSkillTree[requiredId]?.completed
  )
  
  console.log(`技能 ${skillId} 前置技能檢查: ${allRequiredCompleted}`)
  return allRequiredCompleted
}

const getSkillTreeIcon = (treeKey: string) => {
  const icons: { [key: string]: string } = {
    '電機工程': '⚡',
    '資訊工程': '💻',
    '興趣技能': '🎨',
    '體能健康': '🏃',
    '語言能力': '🌍',
    '軟技能': '🤝'
  }
  return icons[treeKey] || '📚'
}

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  if (days > 0) return `${days}天前`
  if (hours > 0) return `${hours}小時前`
  if (minutes > 0) return `${minutes}分鐘前`
  return '剛才'
}

// 事件處理
const handleSkillToggle = async (skill: any) => {
  console.log('技能點擊事件:', skill.name, '可用:', skill.available, '已完成:', skill.completed)
  
  if (!skill.available) {
    console.log('技能不可用，退出')
    return
  }
  
  try {
    // 更新技能狀態
    if (!userProgress.value.skillTrees[selectedSkillTree.value]) {
      userProgress.value.skillTrees[selectedSkillTree.value] = {}
    }
    
    const currentStatus = userProgress.value.skillTrees[selectedSkillTree.value][skill.id]?.completed || false
    const newStatus = !currentStatus
    
    userProgress.value.skillTrees[selectedSkillTree.value][skill.id] = {
      completed: newStatus,
      exp: skill.exp, // 儲存技能的經驗值
      completedAt: newStatus ? Date.now() : null
    }
    
    // 記錄活動
    if (newStatus) {
      const activity = {
        id: Date.now().toString(),
        type: 'skill_completed',
        description: `完成技能：${skill.name} (+${skill.exp} 經驗)`,
        timestamp: Date.now(),
        skillTree: selectedSkillTree.value,
        skillId: skill.id,
        expGained: skill.exp
      }
      
      if (!userProgress.value.activities) {
        userProgress.value.activities = []
      }
      userProgress.value.activities.unshift(activity)
      
      console.log(`完成技能：${skill.name}，獲得 ${skill.exp} 經驗`)
    } else {
      // 移除完成記錄時，也移除相關活動
      if (userProgress.value.activities) {
        userProgress.value.activities = userProgress.value.activities.filter(
          (activity: any) => !(activity.skillId === skill.id && activity.skillTree === selectedSkillTree.value)
        )
      }
      console.log(`取消技能：${skill.name}`)
    }
    
    // 保存進度
    await saveProgressData()
    
  } catch (error) {
    console.error('更新技能進度失敗:', error)
  }
}

const loadUserData = async () => {
  try {
    if (!user.value?.uid) return
    
    console.log('=== 開始載入用戶數據 ===')
    
    // 載入用戶進度
    const progress = await getUserProgress(user.value.uid)
    if (progress) {
      userProgress.value = {
        level: progress.level || 1,
        exp: progress.exp || 0,
        skillTrees: progress.skillTrees || {},
        activities: progress.activities || [],
        selectedMajor: progress.selectedMajor || '',
        selectedInterests: progress.selectedInterests || []
      }
    }
    
    // 從 localStorage 讀取用戶個人資料
    const savedProfile = localStorage.getItem('userProfile')
    console.log('讀取 localStorage userProfile:', savedProfile)
    
    if (savedProfile) {
      try {
        userProfile.value = JSON.parse(savedProfile)
        console.log('解析後的個人資料:', userProfile.value)
        
        // 自動從個人資料讀取科系、專長和興趣
        const profileData = userProfile.value
        const autoMajor = profileData.major || ''
        const autoSkills = Array.isArray(profileData.skills) ? profileData.skills : []
        const autoInterests = Array.isArray(profileData.interests) ? profileData.interests : []
          console.log('提取資料:', {
          major: autoMajor,
          skills: autoSkills,
          interests: autoInterests
        })
        
        console.log('🔍 準備呼叫 recommendSkillTrees，參數為:', {
          科系: autoMajor,
          興趣列表: [...autoSkills, ...autoInterests]
        })
        
        // 合併專長和興趣作為興趣列表
        const combinedInterests = [...autoSkills, ...autoInterests]
        
        if (autoMajor || combinedInterests.length > 0) {
          // 使用個人資料中的資訊自動生成技能樹，完全跳過選擇頁面
          selectedMajor.value = autoMajor
          selectedInterests.value = combinedInterests
          recommendedSkillTrees.value = recommendSkillTrees(autoMajor, combinedInterests)
          
          console.log('推薦技能樹結果:', recommendedSkillTrees.value)
          
          if (recommendedSkillTrees.value.length > 0) {
            selectedSkillTree.value = recommendedSkillTrees.value[0].name
            showMajorSelection.value = false // 直接隱藏選擇頁面
            
            console.log('✅ 自動讀取個人資料生成技能樹（跳過選擇頁面）:', {
              major: autoMajor,
              interests: combinedInterests,
              skillTrees: recommendedSkillTrees.value.map(t => t.name),
              selectedTree: selectedSkillTree.value
            })
          } else {
            console.log('⚠️ 沒有匹配的技能樹，顯示選擇頁面')
            showMajorSelection.value = true
          }
        } else {
          console.log('⚠️ 個人資料沒有相關資訊，顯示選擇頁面')
          showMajorSelection.value = true
        }
      } catch (parseError) {
        console.error('解析個人資料失敗:', parseError)
        showMajorSelection.value = true
      }
    } else {
      console.log('❌ 沒有個人資料，檢查是否有之前的選擇記錄')
      // 沒有個人資料，檢查是否有之前的選擇記錄
      if (progress?.selectedMajor || (progress?.selectedInterests && progress.selectedInterests.length > 0)) {
        selectedMajor.value = progress.selectedMajor || ''
        selectedInterests.value = progress.selectedInterests || []
        recommendedSkillTrees.value = recommendSkillTrees(progress.selectedMajor, progress.selectedInterests)
        if (recommendedSkillTrees.value.length > 0) {
          selectedSkillTree.value = recommendedSkillTrees.value[0].name
        }
        showMajorSelection.value = false
        console.log('使用之前的選擇記錄')
      } else {
        showMajorSelection.value = true
        console.log('顯示選擇頁面')
      }
    }
    
    console.log('=== 載入用戶數據完成 ===', {
      hasProfile: !!userProfile.value,
      showSelection: showMajorSelection.value,
      recommendedTrees: recommendedSkillTrees.value.length
    })
    
  } catch (error) {
    console.error('載入用戶數據失敗:', error)
    showMajorSelection.value = true
  }
}

const saveProgressData = async () => {
  try {
    if (!user.value?.uid) return
    
    const progressData = {
      level: currentLevel.value,
      exp: userProgress.value.exp,
      skillTrees: userProgress.value.skillTrees,
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

// 新增的方法
const toggleInterest = (interest: string) => {
  const index = selectedInterests.value.indexOf(interest)
  if (index > -1) {
    selectedInterests.value.splice(index, 1)
  } else {
    selectedInterests.value.push(interest)
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
  saveProgressData()
}

// 導航函數
const goToHome = () => {
  router.push('/')
}

const goToLogin = () => {
  router.push('/login')
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
</script>

<style scoped>
.skill-tree-container {
  @apply w-full;
}

.tech-button-active {
  @apply bg-cyan-400 text-black;
}

.tech-progress {
  @apply w-full bg-gray-700 rounded-full h-2 overflow-hidden;
}

.tech-progress-bar {
  @apply h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-500;
}
</style>
