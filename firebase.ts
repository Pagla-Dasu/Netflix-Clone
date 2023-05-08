// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx9iAwkGpXRM2DbNpHM8v9hnAD7ohI0Wk",
  authDomain: "netflix-clone-29708.firebaseapp.com",
  projectId: "netflix-clone-29708",
  storageBucket: "netflix-clone-29708.appspot.com",
  messagingSenderId: "849251907252",
  appId: "1:849251907252:web:f214f93868dfe4212f09e1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
