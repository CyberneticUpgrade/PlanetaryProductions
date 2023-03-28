// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzmgyBdobraTPSfPSJMbmUbbR49birX-Q",
  authDomain: "planetaryprodmus.firebaseapp.com",
  projectId: "planetaryprodmus",
  storageBucket: "planetaryprodmus.appspot.com",
  messagingSenderId: "1006412544871",
  appId: "1:1006412544871:web:0a12b4eb227cac00af4dc2",
  measurementId: "G-0XT5ES1SE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
