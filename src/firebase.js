// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkznrykEe8BrPdXhPNx3U1uGtgrgpVMbE",
  authDomain: "vuetest-38e05.firebaseapp.com",
  projectId: "vuetest-38e05",
  storageBucket: "vuetest-38e05.appspot.com",
  messagingSenderId: "835292247212",
  appId: "1:835292247212:web:96f87fa5ea8743fed91b09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };