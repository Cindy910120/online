export default defineNuxtRouteMiddleware((to, from) => {
  // 只在客戶端運行
  if (process.server) return
  
  // 如果正在載入，先不做重定向
  const { isAuthenticated, loading } = useAuth()
  
  // 等待認證狀態確定後再處理
  if (loading.value) return
  
  // 檢查用戶是否登入
  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
})
