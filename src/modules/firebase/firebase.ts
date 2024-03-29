// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { FirebaseConfig } from "../config/";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider}