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
  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
    loading.value = false
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
  }
  // 儲存使用者資料
  const saveUserProfile = async (profileData: any) => {
    if (!user.value) return { success: false, error: 'No user logged in' }
    
    try {
      // 動態導入能力計算函數
      const { calculateUserAbilities } = await import('~/composables/useAbilities')
      
      // 計算能力分數
      const abilities = calculateUserAbilities(
        profileData.major,
        profileData.skills || [],
        profileData.interests || []
      )
      
      await setDoc(doc(db, 'users', user.value.uid), {
        ...profileData,
        abilities,
        email: user.value.email,
        uid: user.value.uid,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  // 獲取使用者資料
  const getUserProfile = async () => {
    if (!user.value) return null
    
    try {
      const docRef = doc(db, 'users', user.value.uid)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        return null
      }
    } catch (error: any) {
      console.error('Error getting user profile:', error)
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
