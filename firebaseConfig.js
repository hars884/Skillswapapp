import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvX7YZ1Uq9jNXv5gG4JYbeTSK1S5YYB2o",
  authDomain: "skillswap-ab856.firebaseapp.com",
  projectId: "skillswap-ab856",
  storageBucket: "skillswap-ab856.firebasestorage.app",
  messagingSenderId: "992872302749",
  appId: "1:992872302749:web:d6ff95fa48e09a87cdac74",
  measurementId: "G-3Y7BWNFBNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;