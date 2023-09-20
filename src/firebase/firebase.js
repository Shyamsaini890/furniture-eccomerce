import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-zvIwBEkFpMNITiFXfaI0-NajEVdsy1k",
  authDomain: "furni-eccomerce.firebaseapp.com",
  projectId: "furni-eccomerce",
  storageBucket: "furni-eccomerce.appspot.com",
  messagingSenderId: "160786079082",
  appId: "1:160786079082:web:9c20f0d045e84c75cad913",
  measurementId: "G-7F7H9M46ML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth , provider};
