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
      <button 
        @click="navigateTo('/')"
        class="tech-button-secondary mb-6"
      >
        <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        返回首頁
      </button>

      <!-- 標題區域 -->
      <div class="tech-frame mb-8">
        <div class="p-6">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-4xl font-bold text-white mb-2">
                <span class="tech-status mr-4">ACTIVE</span>
                個人能力面板
              </h1>
              <p class="text-gray-400 text-lg">基於您的學歷背景與專長興趣分析</p>
              <div class="tech-progress mt-4 max-w-md">
                <div class="tech-progress-bar" :style="`width: ${overallScore}%`"></div>
              </div>
              <p class="text-sm text-cyan-400 mt-2">整體能力指數: {{ overallScore }}%</p>
            </div>
            <div class="text-right">
              <div class="tech-status-badge mb-2">{{ userProfile?.major || '未設定科系' }}</div>
              <p class="text-sm text-gray-400">主修科系</p>
            </div>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 能力分析區域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- 核心能力雷達圖模擬 -->
        <div class="tech-frame">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
              <svg class="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              核心能力分析
            </h2>
            <div class="space-y-4">
              <div v-for="(ability, index) in coreAbilities" :key="ability.key" class="ability-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">{{ ability.name }}</span>
                  <span class="text-cyan-400 font-bold">{{ ability.score }}/100</span>
                </div>
                <div class="tech-progress">
                  <div 
                    class="tech-progress-bar transition-all duration-1000 ease-out"
                    :style="`width: ${ability.score}%; animation-delay: ${index * 100}ms`"
                  ></div>
                </div>
                <p class="text-sm text-gray-400 mt-1">{{ ability.description }}</p>
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>

        <!-- 專業技能分析 -->
        <div class="tech-frame">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
              <svg class="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              專業技能分析
            </h2>
            <div class="space-y-4">
              <div v-for="(ability, index) in specializedAbilities" :key="ability.key" class="ability-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-medium">{{ ability.name }}</span>
                  <span class="text-cyan-400 font-bold">{{ ability.score }}/100</span>
                </div>
                <div class="tech-progress">
                  <div 
                    class="tech-progress-bar transition-all duration-1000 ease-out"
                    :style="`width: ${ability.score}%; animation-delay: ${index * 100}ms`"
                  ></div>
                </div>
                <p class="text-sm text-gray-400 mt-1">{{ ability.description }}</p>
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>
      </div>

      <!-- 詳細資訊區域 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 學歷背景 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              學歷背景
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
              <div v-if="majorCategory" class="info-item">
                <span class="text-gray-400">學群:</span>
                <span class="text-white ml-2">{{ majorCategory.name }}</span>
              </div>
              <div v-if="!userProfile?.major" class="text-gray-500 text-sm">
                請前往個人資料頁面補充學歷資訊
              </div>
            </div>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>        </div>

        <!-- 專長技能 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              專長技能
            </h3>            <div class="skills-container" style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span v-if="userProfile?.skills?.length" v-for="skill in userProfile.skills" :key="skill" class="skill-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;" v-text="skill"></span>
              <!-- 示例數據，如果沒有專長時顯示 -->
              <template v-else>
                <span class="skill-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;">程式設計</span>
                <span class="skill-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;">資料分析</span>
                <span class="skill-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;">無人機技術</span>
                <span class="skill-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;">人工智慧</span>
                <span class="skill-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;">機器學習</span>
              </template>
            </div>
            <p v-if="!userProfile?.skills?.length" class="text-gray-500 text-sm mt-3">
              請前往個人資料頁面新增您的專長技能
            </p>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>
          <div class="tech-corner tech-corner-br"></div>
        </div>

        <!-- 興趣愛好 -->
        <div class="tech-frame">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              興趣愛好
            </h3>            <div class="interests-container" style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span v-if="userProfile?.interests?.length" v-for="interest in userProfile.interests" :key="interest" class="interest-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;" v-text="interest"></span>
              <!-- 示例數據，如果沒有興趣時顯示 -->
              <template v-else>
                <span class="interest-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;">閱讀書籍</span>
                <span class="interest-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;">聽音樂</span>
                <span class="interest-tag" style="white-space: nowrap; word-break: keep-all; display: inline-block;">王者榮耀</span>
              </template>
            </div>
            <p v-if="!userProfile?.interests?.length" class="text-gray-500 text-sm mt-3">
              請前往個人資料頁面新增您的興趣愛好
            </p>
          </div>
          <div class="tech-corner tech-corner-tl"></div>
          <div class="tech-corner tech-corner-tr"></div>
          <div class="tech-corner tech-corner-bl"></div>          <div class="tech-corner tech-corner-br"></div>
        </div>
      </div>

      <!-- 建議與發展 -->
      <div class="tech-frame mt-8">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
            <svg class="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            能力發展建議
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-medium text-cyan-400 mb-3">優勢能力</h4>
              <div class="space-y-2">
                <div v-for="strength in topStrengths" :key="strength.key" class="flex items-center">
                  <div class="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span class="text-white">{{ strength.name }}</span>
                  <span class="text-green-400 ml-auto font-medium">{{ strength.score }}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-medium text-orange-400 mb-3">可提升領域</h4>
              <div class="space-y-2">
                <div v-for="improvement in improvementAreas" :key="improvement.key" class="flex items-center">
                  <div class="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span class="text-white">{{ improvement.name }}</span>
                  <span class="text-orange-400 ml-auto font-medium">{{ improvement.score }}</span>
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
    </div>    <!-- 未登入狀態 -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <h1 class="text-2xl font-bold text-white mb-4">請先登入</h1>
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
import { calculateUserAbilities, abilityDescriptions } from '~/composables/useAbilities'
import { taiwanAcademicGroups } from '~/data/academic-groups'
import type { UserProfile, UserAbilities } from '~/types/academic'

// 設定頁面中介軟體
definePageMeta({
  middleware: 'auth'
})

const { user, isAuthenticated } = useAuth()
const loading = ref(true)
const userProfile = ref<UserProfile | null>(null)
const userAbilities = ref<UserAbilities | null>(null)

// 載入使用者資料
const loadUserProfile = async () => {
  if (!user.value) return

  try {
    const { getUserProfile } = useAuth()
    const profile = await getUserProfile()
    
    if (profile) {
      userProfile.value = profile as UserProfile
      
      // 優先使用資料庫中儲存的能力分數，如果沒有則重新計算
      if (profile.abilities) {
        userAbilities.value = profile.abilities
      } else {
        // 計算能力分數
        userAbilities.value = calculateUserAbilities(
          profile.major,
          profile.skills || [],
          profile.interests || []
        )
      }
    } else {      // 如果沒有個人資料，使用預設值
      userAbilities.value = calculateUserAbilities('', [], [])
    }
    
    // 調試信息
    console.log('用戶資料:', userProfile.value)
    console.log('能力分數:', userAbilities.value)
  } catch (error) {
    console.error('載入個人資料失敗:', error)
  } finally {
    loading.value = false
  }
}

// 找到對應的學群
const majorCategory = computed(() => {
  if (!userProfile.value?.major) return null
  
  for (const group of taiwanAcademicGroups) {
    for (const subcategory of group.subcategories) {
      if (subcategory.relatedSkills.some(skill => 
        userProfile.value?.major?.includes(skill) || 
        subcategory.name.includes(userProfile.value?.major || '')
      )) {
        return group
      }
    }
  }
  return null
})

// 整體分數
const overallScore = computed(() => {
  if (!userAbilities.value) return 0
  const total = Object.values(userAbilities.value).reduce((sum, score) => sum + score, 0)
  return Math.round(total / 12)
})

// 核心能力（前6項）
const coreAbilities = computed(() => {
  if (!userAbilities.value) {
    // 如果沒有能力數據，顯示預設示例數據
    return [
      { key: 'analytical', name: '分析能力', score: 50, description: '分析思考與問題解決能力' },
      { key: 'creative', name: '創意能力', score: 50, description: '創意發想與創新思維能力' },
      { key: 'technical', name: '技術能力', score: 50, description: '技術實作與工具運用能力' },
      { key: 'communication', name: '溝通能力', score: 50, description: '溝通表達與人際互動能力' },
      { key: 'leadership', name: '領導能力', score: 50, description: '領導統御與團隊管理能力' },
      { key: 'research', name: '研究能力', score: 50, description: '研究調查與資料收集能力' }
    ]
  }
  
  return [
    { key: 'analytical', name: '分析能力', score: Math.round(userAbilities.value.analytical), description: abilityDescriptions.analytical },
    { key: 'creative', name: '創意能力', score: Math.round(userAbilities.value.creative), description: abilityDescriptions.creative },
    { key: 'technical', name: '技術能力', score: Math.round(userAbilities.value.technical), description: abilityDescriptions.technical },
    { key: 'communication', name: '溝通能力', score: Math.round(userAbilities.value.communication), description: abilityDescriptions.communication },
    { key: 'leadership', name: '領導能力', score: Math.round(userAbilities.value.leadership), description: abilityDescriptions.leadership },
    { key: 'research', name: '研究能力', score: Math.round(userAbilities.value.research), description: abilityDescriptions.research }
  ]
})

// 專業能力（後6項）
const specializedAbilities = computed(() => {
  if (!userAbilities.value) {
    // 如果沒有能力數據，顯示預設示例數據
    return [
      { key: 'practical', name: '實務能力', score: 50, description: '實務操作與動手實作能力' },
      { key: 'mathematical', name: '數理能力', score: 50, description: '數理邏輯與計算分析能力' },
      { key: 'linguistic', name: '語言能力', score: 50, description: '語言文字與表達溝通能力' },
      { key: 'artistic', name: '藝術能力', score: 50, description: '藝術美感與創作表現能力' },
      { key: 'social', name: '社會能力', score: 50, description: '社會關懷與人文素養能力' },
      { key: 'business', name: '商業能力', score: 50, description: '商業思維與經營管理能力' }
    ]
  }
  
  return [
    { key: 'practical', name: '實務能力', score: Math.round(userAbilities.value.practical), description: abilityDescriptions.practical },
    { key: 'mathematical', name: '數理能力', score: Math.round(userAbilities.value.mathematical), description: abilityDescriptions.mathematical },
    { key: 'linguistic', name: '語言能力', score: Math.round(userAbilities.value.linguistic), description: abilityDescriptions.linguistic },
    { key: 'artistic', name: '藝術能力', score: Math.round(userAbilities.value.artistic), description: abilityDescriptions.artistic },
    { key: 'social', name: '社會能力', score: Math.round(userAbilities.value.social), description: abilityDescriptions.social },
    { key: 'business', name: '商業能力', score: Math.round(userAbilities.value.business), description: abilityDescriptions.business }
  ]
})

// 所有能力合併
const allAbilities = computed(() => {
  return [...coreAbilities.value, ...specializedAbilities.value]
})

// 優勢能力（分數最高的3項）
const topStrengths = computed(() => {
  return allAbilities.value
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
})

// 可提升領域（分數最低的3項）
const improvementAreas = computed(() => {
  return allAbilities.value
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
})

onMounted(() => {  if (isAuthenticated.value) {
    loadUserProfile()
  } else {
    loading.value = false
  }
})
</script>
