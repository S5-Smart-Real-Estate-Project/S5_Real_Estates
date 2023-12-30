// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "s5realestates.firebaseapp.com",
  projectId: "s5realestates",
  storageBucket: "s5realestates.appspot.com",
  messagingSenderId: "433242976625",
  appId: "1:433242976625:web:1045ec7ae0fe842c6e46d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);