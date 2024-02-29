// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_YEI54L3qJLqa5FoCoP0f3gixPBxcVUU",
  authDomain: "chat-app-f0e1d.firebaseapp.com",
  projectId: "chat-app-f0e1d",
  storageBucket: "chat-app-f0e1d.appspot.com",
  messagingSenderId: "110050475280",
  appId: "1:110050475280:web:956c2fcb53c85b26ff7995",
  measurementId: "G-QK5MCLER1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firebaseFirestore = getFirestore(app);
const firebaseStorage = getStorage(app);

export { firebaseAuth, firebaseFirestore, firebaseStorage };
