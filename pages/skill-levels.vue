<template>
  <div class="min-h-screen tech-bg tech-grid-bg relative">
    <!-- 載入畫面 -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p class="text-cyan-400 text-lg font-semibold">載入技能管理中...</p>
      </div>
    </div>

    <!-- 主要內容 -->
    <div v-else-if="isAuthenticated" class="container mx-auto px-4 py-8">
      <!-- 返回按鈕 -->
      <button 
        @click="goToSkills"
        class="tech-button-complex mb-6"
      >
        <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        回到技能樹
      </button>

      <!-- 標題區域 -->
      <div class="tech-frame mb-8">
        <div class="p-6">
          <h1 class="text-4xl font-bold text-white mb-4">
            <span class="tech-status mr-4">{{ selectedCategory }}</span>
            技能等級管理
          </h1>
          <p class="text-gray-400 text-lg">檢視和管理各技能的等級進度</p>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 技能分類 -->
      <div class="flex space-x-4 mb-8 overflow-x-auto">
        <button 
          v-for="(category, key) in skillCategories" 
          :key="key"
          @click="selectedCategory = key"
          :class="[
            'tech-button whitespace-nowrap', 
            selectedCategory === key ? 'tech-button-active' : ''
          ]"
        >
          {{ category.icon }} {{ category.name }}
        </button>
      </div>

      <!-- 技能等級列表 -->
      <div class="tech-frame">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-white mb-6">
            {{ skillCategories[selectedCategory].name }} 技能等級
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="skill in currentCategorySkills" 
              :key="skill.id"
              class="skill-level-card"
            >
              <div class="p-6 rounded-lg border border-gray-600 bg-gray-800/50">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-white mb-2">{{ skill.name }}</h3>
                    <p class="text-gray-400 text-sm mb-4">{{ skill.description }}</p>
                    
                    <!-- 技能等級顯示 -->
                    <div class="mb-4">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-cyan-400 font-medium">技能等級</span>
                        <span class="text-2xl font-bold text-white">
                          Lv.{{ skill.level || 1 }}
                        </span>
                      </div>
                      
                      <!-- 經驗進度條 -->
                      <div class="w-full bg-gray-700 rounded-full h-3 mb-2">
                        <div 
                          class="bg-gradient-to-r from-cyan-400 to-green-400 h-3 rounded-full transition-all duration-500"
                          :style="`width: ${getSkillProgress(skill)}%`"
                        ></div>
                      </div>
                      
                      <div class="flex justify-between text-sm">
                        <span class="text-gray-400">
                          經驗: {{ skill.exp || 0 }}/{{ getRequiredExp(skill.level || 1) }}
                        </span>
                        <span class="text-cyan-400">
                          {{ getSkillProgress(skill).toFixed(1) }}%
                        </span>
                      </div>
                    </div>
                    
                    <!-- 技能狀態 -->
                    <div class="flex items-center justify-between">
                      <span :class="[
                        'px-3 py-1 rounded-full text-sm font-medium',
                        getSkillStatusClass(skill)
                      ]">
                        {{ getSkillStatusText(skill) }}
                      </span>
                      
                      <div class="flex items-center space-x-2">
                        <button 
                          @click="addSkillExp(skill)"
                          class="tech-button-small bg-green-600 hover:bg-green-700"
                          :disabled="!canAddExp(skill)"
                        >
                          +1 經驗
                        </button>
                        <button 
                          @click="viewSkillDetails(skill)"
                          class="tech-button-small bg-blue-600 hover:bg-blue-700"
                        >
                          詳情
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 空狀態 -->
          <div v-if="currentCategorySkills.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <p class="text-gray-500 text-lg">此分類尚無技能</p>
            <p class="text-gray-400 text-sm mt-2">完成相關任務來解鎖技能</p>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 技能詳情對話框 -->
      <div v-if="selectedSkill" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="tech-panel max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-cyan-400">{{ selectedSkill.name }}</h3>
            <button @click="selectedSkill = null" class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="space-y-6">
            <!-- 技能詳細資訊 -->
            <div>
              <h4 class="text-lg font-bold text-white mb-2">技能描述</h4>
              <p class="text-gray-400">{{ selectedSkill.description }}</p>
            </div>
            
            <!-- 等級資訊 -->
            <div>
              <h4 class="text-lg font-bold text-white mb-2">等級資訊</h4>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="text-gray-400">當前等級:</span>
                    <span class="text-white ml-2 font-bold">Lv.{{ selectedSkill.level || 1 }}</span>
                  </div>
                  <div>
                    <span class="text-gray-400">當前經驗:</span>
                    <span class="text-cyan-400 ml-2 font-bold">{{ selectedSkill.exp || 0 }}</span>
                  </div>
                  <div>
                    <span class="text-gray-400">升級所需:</span>
                    <span class="text-yellow-400 ml-2 font-bold">{{ getRequiredExp(selectedSkill.level || 1) }}</span>
                  </div>
                  <div>
                    <span class="text-gray-400">總完成次數:</span>
                    <span class="text-green-400 ml-2 font-bold">{{ selectedSkill.completedCount || 0 }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 升級獎勵 -->
            <div>
              <h4 class="text-lg font-bold text-white mb-2">升級獎勵</h4>
              <div class="space-y-2">
                <div class="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                  <span class="text-gray-400">下一級獎勵</span>
                  <span class="text-green-400">整體經驗 +{{ (selectedSkill.level || 1) * 2 }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex space-x-3 mt-6">
            <button 
              @click="addSkillExp(selectedSkill); selectedSkill = null"
              class="flex-1 tech-button bg-green-600 hover:bg-green-700"
              :disabled="!canAddExp(selectedSkill)"
            >
              獲得經驗
            </button>
            <button 
              @click="selectedSkill = null"
              class="tech-button bg-gray-600 hover:bg-gray-700"
            >
              關閉
            </button>
          </div>
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
        <p class="text-gray-400 mb-6">您需要登入才能訪問技能管理系統</p>
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

const router = useRouter()
const { user, isAuthenticated } = useAuth()
const { saveUserProgress, getUserProgress } = useFirebase()

// 狀態管理
const loading = ref(true)
const selectedCategory = ref('major')
const selectedSkill = ref<any>(null)

// 用戶數據
const userProgress = ref<any>({
  skills: {},
  exp: 0
})

// 技能分類
const skillCategories = ref({
  major: {
    name: '專業技能',
    icon: '🎓',
    skills: ['電路分析', '程式設計', '數學建模', '實驗技能', '系統設計']
  },
  interest: {
    name: '興趣技能',
    icon: '🎨',
    skills: ['繪畫', '音樂', '攝影', '寫作', '手工藝']
  },
  fitness: {
    name: '體能技能',
    icon: '🏃',
    skills: ['跑步', '重訓', '游泳', '瑜伽', '球類運動']
  },
  language: {
    name: '語言技能',
    icon: '🌍',
    skills: ['英語', '日語', '韓語', '德語', '法語']
  },
  soft: {
    name: '軟技能',
    icon: '🤝',
    skills: ['溝通', '領導', '時間管理', '團隊合作', '批判思考']
  }
})

// 計算屬性
const currentCategorySkills = computed(() => {
  const category = skillCategories.value[selectedCategory.value]
  if (!category) return []
  
  return category.skills.map(skillName => {
    const skillId = `${selectedCategory.value}_${skillName.toLowerCase()}`
    const skillData = userProgress.value.skills[skillId] || {}
    
    return {
      id: skillId,
      name: skillName,
      description: getSkillDescription(skillName),
      level: skillData.level || 1,
      exp: skillData.exp || 0,
      completedCount: skillData.completedCount || 0,
      category: selectedCategory.value
    }
  })
})

// 輔助函數
const getSkillDescription = (skillName: string) => {
  const descriptions: { [key: string]: string } = {
    '電路分析': '學習並應用基本電路定律進行電路分析',
    '程式設計': '掌握程式語言和軟體開發技能',
    '數學建模': '使用數學方法解決實際問題',
    '實驗技能': '進行科學實驗和數據分析',
    '系統設計': '設計和實現複雜的工程系統',
    '繪畫': '培養視覺藝術創作能力',
    '音樂': '學習演奏樂器或音樂創作',
    '攝影': '掌握攝影技術和視覺構圖',
    '寫作': '提升文字表達和創作能力',
    '手工藝': '製作各種手工藝品和創作',
    '跑步': '提升心肺功能和耐力',
    '重訓': '增強肌力和身體素質',
    '游泳': '掌握各種泳姿和水中技能',
    '瑜伽': '提升身體柔韌性和平衡感',
    '球類運動': '學習各種球類運動技巧',
    '英語': '提升英語聽說讀寫能力',
    '日語': '學習日語語言和文化',
    '韓語': '掌握韓語基礎和應用',
    '德語': '學習德語語法和表達',
    '法語': '培養法語語言技能',
    '溝通': '提升人際溝通和表達能力',
    '領導': '培養領導和管理技能',
    '時間管理': '掌握高效的時間安排方法',
    '團隊合作': '學習在團隊中有效協作',
    '批判思考': '培養邏輯思維和分析能力'
  }
  
  return descriptions[skillName] || '提升相關領域的專業能力'
}

const getRequiredExp = (level: number) => {
  return level * 10 // 每級需要 level * 10 經驗
}

const getSkillProgress = (skill: any) => {
  const required = getRequiredExp(skill.level)
  return Math.min(100, (skill.exp / required) * 100)
}

const getSkillStatusClass = (skill: any) => {
  const progress = getSkillProgress(skill)
  if (progress >= 100) return 'bg-green-500/20 text-green-400'
  if (progress >= 50) return 'bg-yellow-500/20 text-yellow-400'
  return 'bg-gray-500/20 text-gray-400'
}

const getSkillStatusText = (skill: any) => {
  const progress = getSkillProgress(skill)
  if (progress >= 100) return '可升級'
  if (progress >= 50) return '進行中'
  return '初學者'
}

const canAddExp = (skill: any) => {
  return getSkillProgress(skill) < 100
}

// 事件處理
const addSkillExp = async (skill: any) => {
  if (!canAddExp(skill)) return
  
  const skillId = skill.id
  if (!userProgress.value.skills[skillId]) {
    userProgress.value.skills[skillId] = {
      level: 1,
      exp: 0,
      completedCount: 0
    }
  }
  
  userProgress.value.skills[skillId].exp += 1
  userProgress.value.skills[skillId].completedCount += 1
  
  // 檢查是否升級
  const currentSkill = userProgress.value.skills[skillId]
  const required = getRequiredExp(currentSkill.level)
  
  if (currentSkill.exp >= required) {
    currentSkill.level += 1
    currentSkill.exp = 0
    
    // 獲得整體經驗獎勵
    const expReward = currentSkill.level * 2
    userProgress.value.exp += expReward
    
    // 顯示升級通知（可以加入通知系統）
    console.log(`${skill.name} 升級到 Lv.${currentSkill.level}！獲得 ${expReward} 整體經驗`)
  }
  
  await saveProgressData()
}

const viewSkillDetails = (skill: any) => {
  selectedSkill.value = skill
}

// 數據管理
const loadUserData = async () => {
  try {
    if (!user.value?.uid) return
    
    const progress = await getUserProgress(user.value.uid)
    if (progress) {
      userProgress.value = {
        skills: progress.skills || {},
        exp: progress.exp || 0
      }
    }
  } catch (error) {
    console.error('載入用戶數據失敗:', error)
  }
}

const saveProgressData = async () => {
  try {
    if (!user.value?.uid) return
    
    await saveUserProgress(user.value.uid, {
      skills: userProgress.value.skills,
      exp: userProgress.value.exp,
      lastUpdated: Date.now()
    })
  } catch (error) {
    console.error('保存進度失敗:', error)
  }
}

// 導航函數
const goToSkills = () => {
  router.push('/skills')
}

const goToLogin = () => {
  router.push('/login')
}

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
.tech-button-active {
  @apply bg-cyan-400 text-black;
}

.skill-level-card {
  @apply transform hover:scale-105 transition-all duration-300;
}

.tech-button-small {
  @apply px-3 py-1 text-sm rounded font-medium transition-colors;
}
</style>
