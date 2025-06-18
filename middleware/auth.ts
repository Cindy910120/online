import { auth } from '~/composables/useFirebase'

export default defineNuxtRouteMiddleware((to, from) => {
  // 只在客戶端運行
  if (process.server) return
  
  // 檢查用戶是否登入
  if (!auth.currentUser) {
    return navigateTo('/login')
  }
})
