import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Firebase project configuration
// Get these values from Firebase Console: Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "AIzaSyDzvTcJfArsrYcMsZvJASmVcBGV1QaCeuY",
  authDomain: "movieexplorer-ea323.firebaseapp.com",
  projectId: "movieexplorer-ea323",
  storageBucket: "movieexplorer-ea323.firebasestorage.app",
  messagingSenderId: "720602092409",
  appId: "1:720602092409:web:2c5bcc3973bd0383d515a8",
  measurementId: "G-74XJC58YXL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
