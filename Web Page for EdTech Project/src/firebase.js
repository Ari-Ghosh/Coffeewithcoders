import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBl87aTXVVXfJEqPj_LumY1H5Ln5p-axM4",
  authDomain: "edtech-web-8a059.firebaseapp.com",
  projectId: "edtech-web-8a059",
  storageBucket: "edtech-web-8a059.appspot.com",
  messagingSenderId: "169049769232",
  appId: "1:169049769232:web:6b514798c3ac6bc4079195",
  measurementId: "G-M9QKSDV7D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;