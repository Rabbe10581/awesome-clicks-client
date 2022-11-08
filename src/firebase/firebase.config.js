// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuNnrH5MvhtEz3zGRNSq8CqBHr6Eq5mk0",
    authDomain: "my-awesome-clicks.firebaseapp.com",
    projectId: "my-awesome-clicks",
    storageBucket: "my-awesome-clicks.appspot.com",
    messagingSenderId: "168839613774",
    appId: "1:168839613774:web:0782e21698be976abaa21f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;