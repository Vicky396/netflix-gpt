// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXX4kS3p4qS84BYHraAOt0WKFO0P3VUTc",
  authDomain: "netflixgpt-4573e.firebaseapp.com",
  projectId: "netflixgpt-4573e",
  storageBucket: "netflixgpt-4573e.firebasestorage.app",
  messagingSenderId: "71258283485",
  appId: "1:71258283485:web:05855711a8903dbe4eaa34",
  measurementId: "G-9H5GHF1XBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth =getAuth();