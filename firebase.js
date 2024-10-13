// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "life-coach-website.firebaseapp.com",
    projectId: "life-coach-website",
    storageBucket: "life-coach-website.appspot.com",
    messagingSenderId: "429183326055",
    appId: "1:429183326055:web:fef213f23e31a87acd41c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);