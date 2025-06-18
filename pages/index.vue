<template>
  <div class="min-h-screen tech-bg tech-grid-bg relative">
    <!-- 載入畫面 -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="tech-panel text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p class="text-cyan-400 text-lg font-semibold">系統初始化中...</p>
      </div>
    </div>

    <!-- 主要內容 -->
    <div v-else-if="isAuthenticated" class="container mx-auto px-4 py-8">      <!-- 頂部歡迎區域 -->
      <div class="tech-frame mb-8">
        <div class="p-6">
          <div class="flex justify-between items-center">            <div>
              <h1 class="text-4xl font-bold text-white mb-2">
                <span class="tech-status mr-4">ONLINE</span>
                歡迎回來，<span class="text-cyan-400">{{ userDisplayName }}</span>
              </h1>
              <p class="text-gray-400 text-lg">選擇您要執行的操作</p>
              <div class="tech-progress mt-4 max-w-md">
                <div class="tech-progress-bar" style="width: 75%"></div>
              </div>
              <p class="text-sm text-cyan-400 mt-2">系統活躍度: 75%</p>
            </div>
            <button
              @click="handleSignOut"
              class="tech-button-complex"
            >
              <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              登出系統
            </button>
          </div>
        </div>
        <div class="tech-corner tech-corner-tl"></div>
        <div class="tech-corner tech-corner-tr"></div>
        <div class="tech-corner tech-corner-bl"></div>
        <div class="tech-corner tech-corner-br"></div>
      </div>

      <!-- 功能按鈕網格 -->
      <div class="relative">
        <!-- 連接線 -->
        <div class="tech-connector tech-connector-top"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">          <!-- 個人面板 -->
          <div @click="navigateTo('/panel')" class="tech-grid-card-v2 group relative">
            <div class="tech-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">個人面板</h3>
            <p class="text-gray-400 text-sm mb-4">查看個人統計和儀表板</p>
            
            <div class="tech-progress">
              <div class="tech-progress-bar" style="width: 60%"></div>
            </div>
            <div class="text-xs text-cyan-400 mt-2">數據載入: 60%</div>
            
            <div class="tech-corner tech-corner-tl"></div>
            <div class="tech-corner tech-corner-tr"></div>
            <div class="tech-connector tech-connector-bottom"></div>
          </div>

          <!-- 更新個人資料 -->
          <div @click="navigateTo('/profile')" class="tech-grid-card-v2 group relative">
            <div class="tech-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">更新個人資料</h3>
            <p class="text-gray-400 text-sm mb-4">管理和更新您的個人資訊</p>
            
            <div class="tech-progress">
              <div class="tech-progress-bar" style="width: 90%"></div>
            </div>
            <div class="text-xs text-cyan-400 mt-2">完成度: 90%</div>
            
            <div class="tech-corner tech-corner-tl"></div>
            <div class="tech-corner tech-corner-br"></div>
            <div class="tech-connector tech-connector-bottom"></div>
          </div>          <!-- 技能樹 -->
          <div @click="navigateTo('/skills')" class="tech-grid-card-v2 group relative">
            <div class="tech-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">技能樹</h3>
            <p class="text-gray-400 text-sm mb-4">查看和升級您的技能點數</p>
            
            <div class="tech-progress">
              <div class="tech-progress-bar" style="width: 60%"></div>
            </div>
            <div class="text-xs text-cyan-400 mt-2">技能進度: 60%</div>
            
            <div class="tech-corner tech-corner-tr"></div>
            <div class="tech-corner tech-corner-bl"></div>
            <div class="tech-connector tech-connector-bottom"></div>
          </div>

          <!-- 任務 -->
          <div @click="navigateTo('/tasks')" class="tech-grid-card-v2 group relative">
            <div class="tech-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">任務</h3>
            <p class="text-gray-400 text-sm mb-4">查看當前任務和進度</p>
            
            <div class="tech-progress">
              <div class="tech-progress-bar" style="width: 35%"></div>
            </div>
            <div class="text-xs text-cyan-400 mt-2">進度: 35%</div>
            
            <div class="tech-corner tech-corner-tl"></div>
            <div class="tech-corner tech-corner-tr"></div>
            <div class="tech-connector tech-connector-bottom"></div>
          </div>

          <!-- 成就 -->
          <div @click="showComingSoon('成就系統')" class="tech-grid-card-v2 group relative">
            <div class="tech-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">成就</h3>
            <p class="text-gray-400 text-sm mb-4">查看已解鎖的成就獎章</p>
            
            <div class="tech-progress">
              <div class="tech-progress-bar" style="width: 70%"></div>
            </div>
            <div class="text-xs text-cyan-400 mt-2">解鎖: 70%</div>
            
            <div class="tech-corner tech-corner-bl"></div>
            <div class="tech-corner tech-corner-br"></div>
            <div class="tech-connector tech-connector-bottom"></div>
          </div>
        </div>
      </div>

      <!-- 系統狀態 -->
      <div class="tech-frame mt-12">
        <div class="p-6">          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="relative">
              <div class="text-3xl font-bold text-cyan-400 mb-2">
                <span class="tech-status">ACTIVE</span>
              </div>
              <div class="text-gray-400 mb-3">系統狀態</div>
              <div class="tech-progress">
                <div class="tech-progress-bar" style="width: 100%"></div>
              </div>
            </div>
            <div class="relative">
              <div class="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div class="text-gray-400 mb-3">數據完整性</div>
              <div class="tech-progress">
                <div class="tech-progress-bar" style="width: 100%"></div>
              </div>
            </div>
            <div class="relative">
              <div class="text-3xl font-bold text-yellow-400 mb-2">{{ currentTime }}</div>
              <div class="text-gray-400 mb-3">系統時間</div>
              <div class="tech-progress">
                <div class="tech-progress-bar" style="width: 100%"></div>
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

<script setup>
definePageMeta({
  middleware: 'auth'
})

const { user, isAuthenticated, loading, signOut, getUserProfile } = useAuth()

const showNotification = ref(false)
const notificationMessage = ref('')
const currentTime = ref('')
const userProfile = ref(null)

// 計算顯示名稱
const userDisplayName = computed(() => {
  if (userProfile.value?.nickname) {
    return userProfile.value.nickname
  }
  if (userProfile.value?.name) {
    return userProfile.value.name
  }
  return user.value?.email || '使用者'
})

// 載入使用者資料
const loadUserProfile = async () => {
  if (user.value) {
    const profile = await getUserProfile()
    if (profile) {
      userProfile.value = profile
    }
  }
}

// 更新時間
const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('zh-TW', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

// 顯示即將推出通知
const showComingSoon = (feature) => {
  notificationMessage.value = `${feature}功能即將推出，敬請期待！`
  showNotification.value = true
}

// 登出處理
const handleSignOut = async () => {
  await signOut()
}

// 生命週期
onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
  loadUserProfile()
})

// 監聽認證狀態
watch([isAuthenticated, loading], ([authenticated, isLoading]) => {
  if (!isLoading && !authenticated) {
    navigateTo('/login')
  }
}, { immediate: true })

// 監聽使用者變化，重新載入資料
watch(user, (newUser) => {
  if (newUser) {
    loadUserProfile()
  }
}, { immediate: true })
</script>
