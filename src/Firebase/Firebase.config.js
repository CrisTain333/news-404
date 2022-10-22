// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoQskepa6CdObLWhmGzbVFm0_DzS-cRj8",
  authDomain: "news-404.firebaseapp.com",
  projectId: "news-404",
  storageBucket: "news-404.appspot.com",
  messagingSenderId: "218311145693",
  appId: "1:218311145693:web:f055f1b98ae69d40540334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;