// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnIyIPIUDdSblYD4DRgWwYErO8VRBvmg",
  authDomain: "chatterlot-b5700.firebaseapp.com",
  projectId: "chatterlot-b5700",
  storageBucket: "chatterlot-b5700.appspot.com",
  messagingSenderId: "939852323670",
  appId: "1:939852323670:web:cc2c4b216fa9a265da14f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()