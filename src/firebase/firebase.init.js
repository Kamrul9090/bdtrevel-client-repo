// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0aIJ2msXNpUjk7AE8BMjyt95JnUKvcYc",
    authDomain: "bdtrevels.firebaseapp.com",
    projectId: "bdtrevels",
    storageBucket: "bdtrevels.appspot.com",
    messagingSenderId: "1039641789785",
    appId: "1:1039641789785:web:b283141f5e8fe8984f3848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;