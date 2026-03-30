// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ must import this

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNEv8TLSLJC0UwIZJHNn6DS4ZKOD77KEo",
  authDomain: "ambisec-nominees.firebaseapp.com",
  projectId: "ambisec-nominees",
  storageBucket: "ambisec-nominees.appspot.com",
  messagingSenderId: "101467482967",
  appId: "1:101467482967:web:db9c9626c267c0561fec12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
export const db = getFirestore(app); // ✅ named export