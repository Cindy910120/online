import { ref, computed } from 'vue'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from './useFirebase'

const user = ref<User | null>(null)
const loading = ref(true)

export const useAuth = () => {
  const isAuthenticated = computed(() => !!user.value)
  // 監聽認證狀態變化
  onAuthStateChanged(auth, async (firebaseUser) => {
    user.value = firebaseUser
    loading.value = false
    
    // 如果用戶已登入，自動載入個人資料到 localStorage
    if (firebaseUser && process.client) {
      try {
        const docRef = doc(db, 'users', firebaseUser.uid)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const userData = docSnap.data()
          localStorage.setItem('userProfile', JSON.stringify(userData))
          console.log('✅ 用戶登入時自動載入個人資料到 localStorage:', userData)
        }
      } catch (error) {
        console.error('❌ 登入時載入個人資料失敗:', error)
      }
    }
  })

  // 登入
  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: userCredential.user }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  // 註冊
  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      return { success: true, user: userCredential.user }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  // 登出
  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
      await navigateTo('/login')
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }  // 儲存使用者資料
  const saveUserProfile = async (profileData: any) => {
    if (!user.value) return { success: false, error: 'No user logged in' }
    
    try {
      console.log('=== saveUserProfile 開始 ===')
      console.log('原始輸入資料:', profileData)
      console.log('專長技能 (輸入):', profileData.skills)
      console.log('興趣愛好 (輸入):', profileData.interests)
      
      // 動態導入能力計算函數
      const { calculateUserAbilities } = await import('~/composables/useAbilities')
      
      // 計算能力分數
      const abilities = calculateUserAbilities(
        profileData.major,
        profileData.skills || [],
        profileData.interests || []
      )

      const userProfileData = {
        ...profileData,
        abilities,
        email: user.value.email,
        uid: user.value.uid,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      console.log('完整儲存資料:', userProfileData)
      console.log('專長技能 (儲存):', userProfileData.skills)
      console.log('興趣愛好 (儲存):', userProfileData.interests)
      
      // 儲存到 Firebase
      await setDoc(doc(db, 'users', user.value.uid), userProfileData)
      console.log('✅ Firebase 儲存成功')
      
      // 同時儲存到 localStorage 供技能樹系統使用
      if (process.client) {
        localStorage.setItem('userProfile', JSON.stringify(userProfileData))
        console.log('✅ localStorage 儲存成功')
      }
      
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }
  // 獲取使用者資料
  const getUserProfile = async () => {
    if (!user.value) return null
      try {
      console.log('=== getUserProfile 開始 ===')
      const docRef = doc(db, 'users', user.value.uid)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const userData = docSnap.data()
        console.log('從 Firebase 載入的資料:', userData)
        console.log('專長技能 (Firebase):', userData.skills)
        console.log('興趣愛好 (Firebase):', userData.interests)
        
        // 同步到 localStorage 供技能樹系統使用
        if (process.client) {
          localStorage.setItem('userProfile', JSON.stringify(userData))
          console.log('✅ 資料已同步到 localStorage')
        }
        
        return userData
      } else {
        console.log('❌ Firebase 中沒有找到用戶資料')
        return null
      }
    } catch (error: any) {
      console.error('❌ 載入用戶資料時發生錯誤:', error)
      return null
    }
  }

  return {
    user: readonly(user),
    loading: readonly(loading),
    isAuthenticated,
    signIn,
    signUp,
    signOut,
    saveUserProfile,
    getUserProfile
  }
}
