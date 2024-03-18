// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPCi7oYTy1QquN8dBJprbYLEDzTne_MbY",
  authDomain: "firetodo-7dcfd.firebaseapp.com",
  projectId: "firetodo-7dcfd",
  storageBucket: "firetodo-7dcfd.appspot.com",
  messagingSenderId: "311023665117",
  appId: "1:311023665117:web:35db22569afb1478c20034"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export const FIREBASE_APP=initializeApp(firebaseConfig);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);
//export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
