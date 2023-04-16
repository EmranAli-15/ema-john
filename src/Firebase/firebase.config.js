// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPyeF5jqs94G_Y2ziKQ3DhTekDSj0c2f0",
  authDomain: "ema-john-with-firebase-d8bc3.firebaseapp.com",
  projectId: "ema-john-with-firebase-d8bc3",
  storageBucket: "ema-john-with-firebase-d8bc3.appspot.com",
  messagingSenderId: "625329819310",
  appId: "1:625329819310:web:4783bedc72b6c168a9a73f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;