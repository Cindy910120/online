// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApEyszWO7wyzVfugYn484pQxq_mAQVQfA",
  authDomain: "online-42d14.firebaseapp.com",
  projectId: "online-42d14",
  storageBucket: "online-42d14.firebasestorage.app",
  messagingSenderId: "823341498824",
  appId: "1:823341498824:web:c44ced980d9ee2dc51c0fd",
  measurementId: "G-GBD3YFQ0ND"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
export const auth = getAuth(app)
export const db = getFirestore(app)

// Initialize Analytics (only in browser)
export let analytics: any = null
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}

export const useFirebase = () => {
  // 保存用戶進度到 Firestore
  const saveUserProgress = async (userId: string, progressData: any) => {
    try {
      const userProgressRef = doc(db, 'userProgress', userId)
      await setDoc(userProgressRef, progressData, { merge: true })
      console.log('用戶進度已保存到Firebase')
    } catch (error) {
      console.error('保存用戶進度失敗:', error)
      throw error
    }
  }

  // 從 Firestore 獲取用戶進度
  const getUserProgress = async (userId: string) => {
    try {
      const userProgressRef = doc(db, 'userProgress', userId)
      const docSnap = await getDoc(userProgressRef)
      
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        console.log('未找到用戶進度資料')
        return null
      }
    } catch (error) {
      console.error('獲取用戶進度失敗:', error)
      throw error
    }
  }

  return {
    saveUserProgress,
    getUserProgress
  }
}

export default app
