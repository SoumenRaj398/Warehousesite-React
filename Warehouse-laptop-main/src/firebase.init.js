// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0F1Zf1yh1DW9Qp3Cuyu9DhU80gEr3dfI",
  authDomain: "warhouse-laptop-client.firebaseapp.com",
  projectId: "warhouse-laptop-client",
  storageBucket: "warhouse-laptop-client.appspot.com",
  messagingSenderId: "734279145932",
  appId: "1:734279145932:web:84234492eb334bfe5da569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;