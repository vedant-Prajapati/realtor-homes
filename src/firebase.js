// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyiJOGnAFWkdJV7Qkl8W92plnXz5KPg8U",
  authDomain: "realtor-home.firebaseapp.com",
  projectId: "realtor-home",
  storageBucket: "realtor-home.appspot.com",
  messagingSenderId: "90113735535",
  appId: "1:90113735535:web:a0c19ab065d7f7b95fc69a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()