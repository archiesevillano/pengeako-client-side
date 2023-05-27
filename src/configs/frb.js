// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAj5E6C0ytjJlCAIeua3X4dJRdNSrI1bhA",
    authDomain: "pengeako-862f8.firebaseapp.com",
    projectId: "pengeako-862f8",
    storageBucket: "pengeako-862f8.appspot.com",
    messagingSenderId: "1027734912688",
    appId: "1:1027734912688:web:f52f62ec74f9646130c575",
    measurementId: "G-CPCNVR324D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const g_provider = new GoogleAuthProvider();
export const fb_provider = new FacebookAuthProvider();