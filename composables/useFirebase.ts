// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

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

export default app
