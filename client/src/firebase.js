// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2S5MtxtKhuRbXyv2TcOnUxfQxO0KEJZQ",
  authDomain: "bloggingapp-1aa01.firebaseapp.com",
  projectId: "bloggingapp-1aa01",
  storageBucket: "bloggingapp-1aa01.appspot.com",
  messagingSenderId: "956015043158",
  appId: "1:956015043158:web:59b27876c62af3d3fe51f7",
  measurementId: "G-NB2J2P5KGF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
