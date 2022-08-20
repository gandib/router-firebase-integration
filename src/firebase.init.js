// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR1A5v_ZA7NCoQq5J9q8Ai2rmE4bIOKzw",
    authDomain: "router-firebase-integrat-daf0f.firebaseapp.com",
    projectId: "router-firebase-integrat-daf0f",
    storageBucket: "router-firebase-integrat-daf0f.appspot.com",
    messagingSenderId: "924297105553",
    appId: "1:924297105553:web:1ab75e97207e3244df2f30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;