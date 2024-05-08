// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3fTYUZGBrEQIlaiRfz8I5kWDix0CYTJM",
    authDomain: "linktify-28c2d.firebaseapp.com",
    projectId: "linktify-28c2d",
    storageBucket: "linktify-28c2d.appspot.com",
    messagingSenderId: "48649335990",
    appId: "1:48649335990:web:c66566c45e3941d1cae217"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)
const db = getFirestore(app);

export { db , auth}