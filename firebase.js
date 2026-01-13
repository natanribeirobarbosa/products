// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgvCxI2uwKlShUVDQByHq5whK2hUwSIGs",
  authDomain: "quemvenceleva.firebaseapp.com",
  databaseURL: "https://quemvenceleva-default-rtdb.firebaseio.com",
  projectId: "quemvenceleva",
  storageBucket: "quemvenceleva.firebasestorage.app",
  messagingSenderId: "968863791569",
  appId: "1:968863791569:web:7caa5f737fb36c5714c8f0",
  measurementId: "G-PG4F8XL93J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);