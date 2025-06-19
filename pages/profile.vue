<template>
  <div class="min-h-screen tech-bg tech-grid-bg py-8">
    <div class="max-w-4xl mx-auto px-4">      <!-- 標題列 -->
      <div class="tech-frame mb-8">
        <div class="p-6">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-3xl font-bold text-white">個人資料管理</h1>
              <p class="text-gray-400 mt-2">{{ user?.email }}</p>
              <div class="tech-status mt-4">
                <span>已認證</span>
              </div>
            </div>
            <div class="flex space-x-4">              <button
                @click="navigateTo('/panel')"
                class="tech-button-complex"
              >
                <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                進入個人面板
              </button>
              <button
                @click="handleSignOut"
                class="tech-button-complex border-red-400 text-red-400 hover:bg-red-400"
              >
                <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                登出
              </button>
            </div>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 個人資料表單 -->
      <div class="tech-frame">
        <div class="p-6">
          <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 名字 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">姓名 *</label>
              <input
                v-model="profile.name"
                type="text"
                required
                class="tech-input"
                placeholder="請輸入您的姓名"
              />
            </div>

            <!-- 綽號 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">綽號</label>
              <input
                v-model="profile.nickname"
                type="text"
                class="tech-input"
                placeholder="請輸入您的綽號"
              />
            </div>

            <!-- 學歷 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">學歷</label>
              <select
                v-model="profile.education"
                class="tech-input"
              >
                <option value="">請選擇學歷</option>
                <option value="高中">高中</option>
                <option value="專科">專科</option>
                <option value="大學">大學</option>
                <option value="碩士">碩士</option>
                <option value="博士">博士</option>
                <option value="其他">其他</option>
              </select>
            </div>            <!-- 科系 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">科系</label>
              <select
                v-model="profile.major"
                class="tech-input"
              >
                <option value="">請選擇科系</option>
                <optgroup v-for="group in academicGroups" :key="group.id" :label="group.name">
                  <option 
                    v-for="subcategory in group.subcategories" 
                    :key="subcategory.id" 
                    :value="subcategory.name"
                  >
                    {{ subcategory.name }}
                  </option>
                </optgroup>
              </select>
            </div>

            <!-- 生日 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">生日</label>
              <input
                v-model="profile.birthday"
                type="date"
                class="tech-input"
              />
            </div>

            <!-- 身高 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">身高 (cm)</label>
              <input
                v-model.number="profile.height"
                type="number"
                min="100"
                max="250"
                class="tech-input"
                placeholder="請輸入您的身高"
              />
            </div>

            <!-- 體重 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">體重 (kg)</label>
              <input
                v-model.number="profile.weight"
                type="number"
                min="30"
                max="200"
                class="tech-input"
                placeholder="請輸入您的體重"
              />
            </div>
          </div>          <!-- 專長 -->
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">專長技能</label>            <div class="mb-3">
              <div class="flex gap-2">
                <input
                  v-model="newSkill"
                  type="text"
                  @keyup.enter="addSkill"
                  @input="handleSkillInput"
                  class="tech-input flex-1"
                  placeholder="輸入專長，可用 、/,， 分隔多個項目"
                />
                <button
                  @click="addSkillsOnly"
                  :disabled="!newSkill.trim() || loading"
                  class="tech-button-complex bg-green-500 border-green-500 text-white hover:bg-green-400 whitespace-nowrap"
                >
                  僅新增
                </button>
              </div>
              <p class="text-xs text-gray-400 mt-1">
                ※ 按 Enter 或使用分隔符號可快速新增；點擊「僅新增」按鈕會保留現有技能並新增新技能
              </p>
            </div><div class="flex flex-wrap gap-2">
              <div v-if="profile.skills.length === 0" class="text-gray-500 text-sm py-2">
                尚未新增專長技能
              </div>              <div
                v-for="(skill, index) in profile.skills"
                :key="`skill-${index}-${skill}`"
                class="interest-tag group"
              >
                {{ skill }}
                <button
                  @click="removeSkill(index)"
                  class="ml-2 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div></div>
            <p class="text-xs text-gray-400 mt-2">建議：程式設計、數據分析、平面設計、語言能力等（可用 、/,， 分隔多個項目）</p>
          </div>

          <!-- 興趣 -->
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">興趣愛好</label>            <div class="mb-3">
              <div class="flex gap-2">
                <input
                  v-model="newInterest"
                  type="text"
                  @keyup.enter="addInterest"
                  @input="handleInterestInput"
                  class="tech-input flex-1"
                  placeholder="輸入興趣，可用 、/,， 分隔多個項目"
                />
                <button
                  @click="addInterestsOnly"
                  :disabled="!newInterest.trim() || loading"
                  class="tech-button-complex bg-green-500 border-green-500 text-white hover:bg-green-400 whitespace-nowrap"
                >
                  僅新增
                </button>
              </div>
              <p class="text-xs text-gray-400 mt-1">
                ※ 按 Enter 或使用分隔符號可快速新增；點擊「僅新增」按鈕會保留現有興趣並新增新興趣
              </p>
            </div><div class="flex flex-wrap gap-2">
              <div v-if="profile.interests.length === 0" class="text-gray-500 text-sm py-2">
                尚未新增興趣愛好
              </div>
              <div
                v-for="(interest, index) in profile.interests"
                :key="`interest-${index}-${interest}`"
                class="interest-tag group"
              >
                {{ interest }}
                <button
                  @click="removeInterest(index)"
                  class="ml-2 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>            </div>
            <p class="text-xs text-gray-400 mt-2">建議：音樂、閱讀、運動、攝影、旅遊等（可用 、/,， 分隔多個項目）</p>
          </div>          <!-- 提交按鈕 -->
          <div class="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              @click="debugProfile"
              class="tech-button-complex border-yellow-500 text-yellow-400 hover:bg-yellow-500"
            >
              調試數據
            </button>
            <button
              type="button"
              @click="loadProfile"
              :disabled="loading"
              class="tech-button-complex border-gray-500 text-gray-400 hover:bg-gray-500"
            >
              <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              重新載入
            </button>
            <button
              type="submit"
              :disabled="loading"
              class="tech-button-complex bg-cyan-400 border-cyan-400 text-gray-900 hover:bg-cyan-300"
            >
              <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
              </svg>
              {{ loading ? '儲存中...' : '儲存資料' }}
            </button>
          </div>
        </form>

        <!-- 成功/錯誤訊息 -->
        <div v-if="message" class="mt-6 p-4 rounded-lg border" :class="messageClass">
          <div class="flex items-center">
            <svg v-if="messageType === 'success'" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <svg v-else class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
            </svg>
            {{ message }}
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
</template>

<script setup>
import { taiwanAcademicGroups } from '~/data/academic-groups'

definePageMeta({
  middleware: 'auth'
})

const { user, signOut, saveUserProfile, getUserProfile } = useAuth()

const profile = ref({
  name: '',
  nickname: '',
  education: '',
  major: '',
  birthday: '',
  height: null,
  weight: null,
  skills: [],
  interests: []
})

const loading = ref(false)
const message = ref('')
const messageType = ref('success')
const newSkill = ref('')
const newInterest = ref('')

// 學群資料
const academicGroups = taiwanAcademicGroups

const messageClass = computed(() => ({
  'bg-green-900 border-green-500 text-green-300': messageType.value === 'success',
  'bg-red-900 border-red-500 text-red-300': messageType.value === 'error'
}))

// 載入使用者資料
const loadProfile = async () => {
  console.log('=== 載入個人資料 ===')
  
  const userData = await getUserProfile()
  console.log('從 Firebase 載入的資料:', userData)
  
  if (userData) {
    // 處理專長技能 - 支援多種格式
    let skills = []
    if (Array.isArray(userData.skills)) {
      skills = userData.skills
    } else if (typeof userData.skills === 'string') {
      skills = userData.skills.split(',').map(s => s.trim()).filter(s => s)
    }
    
    // 處理興趣愛好 - 支援多種格式
    let interests = []
    if (Array.isArray(userData.interests)) {
      interests = userData.interests
    } else if (typeof userData.interests === 'string') {
      interests = userData.interests.split(',').map(s => s.trim()).filter(s => s)
    }
    
    profile.value = {
      name: userData.name || '',
      nickname: userData.nickname || '',
      education: userData.education || '',
      major: userData.major || userData.department || '', // 兼容舊的 department 欄位
      birthday: userData.birthday || '',
      height: userData.height || null,
      weight: userData.weight || null,
      skills: skills,
      interests: interests
    }
    
    console.log('載入後的專長技能:', profile.value.skills)
    console.log('載入後的興趣愛好:', profile.value.interests)
  } else {
    console.log('沒有找到用戶資料')
  }
}

// 新增專長
const addSkill = () => {
  if (newSkill.value.trim()) {
    console.log('新增專長輸入:', newSkill.value)
    
    // 使用多種分隔符號分割字串
    const separators = /[、\/,，]/
    const skills = newSkill.value.split(separators)
      .map(skill => skill.trim())
      .filter(skill => skill && !profile.value.skills.includes(skill))
    
    console.log('分割後的專長:', skills)
    
    if (skills.length > 0) {
      profile.value.skills.push(...skills)
      console.log('更新後的專長列表:', profile.value.skills)
    }
    
    newSkill.value = ''
  }
}

// 處理專長輸入
const handleSkillInput = () => {
  const separators = /[、\/,，]/
  if (separators.test(newSkill.value)) {
    addSkill()
  }
}

// 移除專長
const removeSkill = (index) => {
  profile.value.skills.splice(index, 1)
}

// 新增興趣
const addInterest = () => {
  if (newInterest.value.trim()) {
    console.log('新增興趣輸入:', newInterest.value)
    
    // 使用多種分隔符號分割字串
    const separators = /[、\/,，]/
    const interests = newInterest.value.split(separators)
      .map(interest => interest.trim())
      .filter(interest => interest && !profile.value.interests.includes(interest))
    
    console.log('分割後的興趣:', interests)
    
    if (interests.length > 0) {
      profile.value.interests.push(...interests)
      console.log('更新後的興趣列表:', profile.value.interests)
    }
    
    newInterest.value = ''
  }
}

// 處理興趣輸入
const handleInterestInput = () => {
  const separators = /[、\/,，]/
  if (separators.test(newInterest.value)) {
    addInterest()
  }
}

// 移除興趣
const removeInterest = (index) => {
  profile.value.interests.splice(index, 1)
}

// 僅新增技能（不覆蓋現有，直接從Firebase合併）
const addSkillsOnly = async () => {
  if (!newSkill.value.trim()) return
  
  console.log('=== 僅新增技能模式 ===')
  
  // 分割新輸入的技能
  const separators = /[、\/,，]/
  const newSkills = newSkill.value.split(separators)
    .map(skill => skill.trim())
    .filter(skill => skill)
  
  console.log('要新增的技能:', newSkills)
  
  if (newSkills.length === 0) return
  
  try {
    loading.value = true
    
    // 從 Firebase 獲取最新的現有技能
    const userData = await getUserProfile()
    const existingSkills = userData?.skills || []
    console.log('Firebase 中現有的技能:', existingSkills)
    
    // 合併並去重
    const mergedSkills = [...new Set([...existingSkills, ...newSkills])]
    console.log('合併後的技能列表:', mergedSkills)
    
    // 更新前端顯示
    profile.value.skills = mergedSkills
    
    // 儲存到 Firebase
    const result = await saveUserProfile({
      ...profile.value,
      skills: mergedSkills
    })
    
    if (result.success) {
      message.value = `成功新增技能：${newSkills.join('、')}`
      messageType.value = 'success'
      newSkill.value = ''
    } else {
      message.value = '新增技能失敗：' + result.error
      messageType.value = 'error'
    }
    
  } catch (error) {
    console.error('新增技能失敗:', error)
    message.value = '新增技能失敗：' + error.message
    messageType.value = 'error'
  } finally {
    loading.value = false
    
    // 3秒後清除訊息
    setTimeout(() => {
      message.value = ''
    }, 3000)
  }
}

// 僅新增興趣（不覆蓋現有，直接從Firebase合併）
const addInterestsOnly = async () => {
  if (!newInterest.value.trim()) return
  
  console.log('=== 僅新增興趣模式 ===')
  
  // 分割新輸入的興趣
  const separators = /[、\/,，]/
  const newInterests = newInterest.value.split(separators)
    .map(interest => interest.trim())
    .filter(interest => interest)
  
  console.log('要新增的興趣:', newInterests)
  
  if (newInterests.length === 0) return
  
  try {
    loading.value = true
    
    // 從 Firebase 獲取最新的現有興趣
    const userData = await getUserProfile()
    const existingInterests = userData?.interests || []
    console.log('Firebase 中現有的興趣:', existingInterests)
    
    // 合併並去重
    const mergedInterests = [...new Set([...existingInterests, ...newInterests])]
    console.log('合併後的興趣列表:', mergedInterests)
    
    // 更新前端顯示
    profile.value.interests = mergedInterests
    
    // 儲存到 Firebase
    const result = await saveUserProfile({
      ...profile.value,
      interests: mergedInterests
    })
    
    if (result.success) {
      message.value = `成功新增興趣：${newInterests.join('、')}`
      messageType.value = 'success'
      newInterest.value = ''
    } else {
      message.value = '新增興趣失敗：' + result.error
      messageType.value = 'error'
    }
    
  } catch (error) {
    console.error('新增興趣失敗:', error)
    message.value = '新增興趣失敗：' + error.message
    messageType.value = 'error'
  } finally {
    loading.value = false
    
    // 3秒後清除訊息
    setTimeout(() => {
      message.value = ''
    }, 3000)
  }
}

// 提交表單
const handleSubmit = async () => {
  loading.value = true
  message.value = ''
  
  console.log('=== 儲存個人資料 ===')
  console.log('完整資料:', profile.value)
  console.log('專長技能:', profile.value.skills)
  console.log('興趣愛好:', profile.value.interests)
  
  const result = await saveUserProfile(profile.value)
  
  if (result.success) {
    message.value = '資料已成功儲存！能力分數已更新。技能樹將根據您的資料自動推薦。'
    messageType.value = 'success'
    
    // 驗證 localStorage 是否儲存成功
    const savedProfile = localStorage.getItem('userProfile')
    console.log('✅ 個人資料已儲存到 localStorage:', savedProfile)
    
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile)
      console.log('✅ 儲存的專長技能:', parsedProfile.skills)
      console.log('✅ 儲存的興趣愛好:', parsedProfile.interests)
    }
    
  } else {
    message.value = '儲存失敗：' + result.error
    messageType.value = 'error'
    console.error('❌ 儲存失敗:', result.error)
  }
  
  loading.value = false
  
  // 3秒後清除訊息
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// 登出
const handleSignOut = async () => {
  await signOut()
}

// 調試函數
const debugProfile = () => {
  console.log('=== 調試個人資料數據 ===')
  console.log('當前 profile.value:', profile.value)
  console.log('專長技能數組 (長度:', profile.value.skills.length, '):', profile.value.skills)
  console.log('興趣愛好數組 (長度:', profile.value.interests.length, '):', profile.value.interests)
  
  const localData = localStorage.getItem('userProfile')
  console.log('localStorage 原始資料:', localData)
  
  if (localData) {
    try {
      const parsed = JSON.parse(localData)
      console.log('localStorage 解析後:', parsed)
      console.log('localStorage 專長技能:', parsed.skills)
      console.log('localStorage 興趣愛好:', parsed.interests)
    } catch (e) {
      console.error('localStorage 解析失敗:', e)
    }
  }
  
  // 顯示在頁面上
  message.value = `專長: ${profile.value.skills.length} 個 [${profile.value.skills.join(', ')}] | 興趣: ${profile.value.interests.length} 個 [${profile.value.interests.join(', ')}]`
  messageType.value = 'success'
}

// 頁面載入時自動載入資料
onMounted(() => {
  loadProfile()
})
</script>
