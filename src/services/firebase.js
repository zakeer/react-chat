// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore  } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAP1oOiy8dSN_ON50yL1_wtPrcpXkGQhDY",
    authDomain: "react-chatapp-60e97.firebaseapp.com",
    projectId: "react-chatapp-60e97",
    storageBucket: "react-chatapp-60e97.appspot.com",
    messagingSenderId: "927520523218",
    appId: "1:927520523218:web:98c684588a80074e71be0b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// FireStore DB
export const firebaseDB = getFirestore(firebaseApp);

export default firebaseApp;