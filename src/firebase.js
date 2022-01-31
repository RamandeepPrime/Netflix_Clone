// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7uSaHc8a3qoo7RWXpYok4iooBjmeYUo",
  authDomain: "netlix-clone-20396.firebaseapp.com",
  projectId: "netlix-clone-20396",
  storageBucket: "netlix-clone-20396.appspot.com",
  messagingSenderId: "56686896451",
  appId: "1:56686896451:web:680fb72185bf39bdefbbf6",
  measurementId: "G-4REEV5HL00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);