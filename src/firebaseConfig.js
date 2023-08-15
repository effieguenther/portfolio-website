// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJuKkaqwzOcJU9wtPw021fleC3P4kQet0",
  authDomain: "portfolio-20b32.firebaseapp.com",
  projectId: "portfolio-20b32",
  storageBucket: "portfolio-20b32.appspot.com",
  messagingSenderId: "618791738869",
  appId: "1:618791738869:web:48b732043d10160f7ed4bc",
  measurementId: "G-VB0B31X3GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);