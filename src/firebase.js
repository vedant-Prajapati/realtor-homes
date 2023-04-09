// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC92yd3_MxkdoPyJvMg_TCwWytmeuzhw6M",
  authDomain: "realtor-homes.firebaseapp.com",
  projectId: "realtor-homes",
  storageBucket: "realtor-homes.appspot.com",
  messagingSenderId: "241628723557",
  appId: "1:241628723557:web:42c7e866fe5921e11ec98c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore() 