// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF68G6i6RzAG8QWeWKwENbv-EtUfldUYE",
  authDomain: "kaplet-f82b1.firebaseapp.com",
  projectId: "kaplet-f82b1",
  storageBucket: "kaplet-f82b1.appspot.com",
  messagingSenderId: "1097599879279",
  appId: "1:1097599879279:web:46314b125598e83267a59a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);