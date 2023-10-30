// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore  } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI_uVRAG0jsts07F1Lo7QGmDSAMZAz0e8",
  authDomain: "react-chat-b2254.firebaseapp.com",
  projectId: "react-chat-b2254",
  storageBucket: "react-chat-b2254.appspot.com",
  messagingSenderId: "16086727643",
  appId: "1:16086727643:web:399eb0419f4b2133eac5fe"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// FireStore DB
export const firebaseDB = getFirestore(firebaseApp);

export default firebaseApp;