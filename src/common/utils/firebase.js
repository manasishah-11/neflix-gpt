// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-4129f.firebaseapp.com",
  projectId: "netflixgpt-4129f",
  storageBucket: "netflixgpt-4129f.firebasestorage.app",
  messagingSenderId: "797397627526",
  appId: "1:797397627526:web:7112cd3545e51d5b841707",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
