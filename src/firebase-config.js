// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyB4DZff3-nF_isBWbphO6MVS7tCPqqWX_M",
  authDomain: "chatapp-f4052.firebaseapp.com",
  projectId: "chatapp-f4052",
  storageBucket: "chatapp-f4052.firebasestorage.app",
  messagingSenderId: "173315550686",
  appId: "1:173315550686:web:7619ccdace7566aa35c14f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
