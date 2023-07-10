// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW1KrKktrtmMgZ0dkmCqEeTotxKtZ_73s",
  authDomain: "shopgenie-d25ec.firebaseapp.com",
  projectId: "shopgenie-d25ec",
  storageBucket: "shopgenie-d25ec.appspot.com",
  messagingSenderId: "929789318253",
  appId: "1:929789318253:web:d70356089cccac71359b64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app);
