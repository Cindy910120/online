<template>  <div class="min-h-screen tech-bg tech-grid-bg flex items-center justify-center p-4">
    <div class="tech-frame w-full max-w-md">
      <div class="p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-white mb-2">系統登入</h1>
          <p class="text-gray-400">請驗證您的身份以繼續</p>
          <div class="tech-status mt-4">
            <span>安全連線</span>
          </div>
        </div>

        <!-- 登入表單 -->
        <form v-if="!isSignUp" @submit.prevent="handleSignIn" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">電子郵件</label>
            <input
              v-model="email"
              type="email"
              required
              class="tech-input"
              placeholder="請輸入您的電子郵件"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">密碼</label>
            <input
              v-model="password"
              type="password"
              required
              class="tech-input"
              placeholder="請輸入您的密碼"
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="tech-button-complex w-full"
          >
            {{ loading ? '驗證中...' : '登入系統' }}
          </button>
        </form>

        <!-- 註冊表單 -->
        <form v-else @submit.prevent="handleSignUp" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">電子郵件</label>
            <input
              v-model="email"
              type="email"
              required
              class="tech-input"
              placeholder="請輸入您的電子郵件"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">密碼</label>
            <input
              v-model="password"
              type="password"
              required
              minlength="6"
              class="tech-input"
              placeholder="請輸入至少6個字元的密碼"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">確認密碼</label>
            <input
              v-model="confirmPassword"
              type="password"
              required
              class="tech-input"
              placeholder="請再次輸入密碼"
            />
          </div>

          <button
            type="submit"
            :disabled="loading || password !== confirmPassword"
            class="tech-button-complex w-full"
          >
            {{ loading ? '建立中...' : '建立帳號' }}
          </button>
        </form>

        <!-- 錯誤訊息 -->
        <div v-if="error" class="mt-4 p-3 bg-red-900 border border-red-500 text-red-300 rounded-lg">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
            </svg>
            {{ error }}
          </div>
        </div>

        <!-- 切換模式 -->
        <div class="mt-6 text-center">
          <button
            @click="toggleMode"
            class="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            {{ isSignUp ? '已有帳號？點此登入' : '沒有帳號？點此註冊' }}
          </button>
        </div>

        <!-- 裝飾元素 -->
        <div class="mt-8 flex justify-center space-x-2">
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
          <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
        </div>
      </div>
      
      <!-- 邊框裝飾 -->
      <div class="tech-corner tech-corner-tl"></div>
      <div class="tech-corner tech-corner-tr"></div>
      <div class="tech-corner tech-corner-bl"></div>
      <div class="tech-corner tech-corner-br"></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const { signIn, signUp } = useAuth()

const isSignUp = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref('')

const toggleMode = () => {
  isSignUp.value = !isSignUp.value
  error.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}

const handleSignIn = async () => {
  loading.value = true
  error.value = ''
  
  const result = await signIn(email.value, password.value)
  
  if (result.success) {
    await navigateTo('/')
  } else {
    error.value = getErrorMessage(result.error)
  }
  
  loading.value = false
}

const handleSignUp = async () => {
  if (password.value !== confirmPassword.value) {
    error.value = '密碼不匹配'
    return
  }

  loading.value = true
  error.value = ''
  
  const result = await signUp(email.value, password.value)
  
  if (result.success) {
    await navigateTo('/')
  } else {
    error.value = getErrorMessage(result.error)
  }
  
  loading.value = false
}

const getErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/user-not-found': '找不到此電子郵件的帳號',
    'auth/wrong-password': '密碼錯誤',
    'auth/email-already-in-use': '此電子郵件已被使用',
    'auth/weak-password': '密碼強度不足',
    'auth/invalid-email': '電子郵件格式不正確',
    'auth/too-many-requests': '嘗試次數過多，請稍後再試'
  }
  
  return errorMessages[errorCode] || '發生未知錯誤，請稍後再試'
}
</script>
