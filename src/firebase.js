import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUx_0-COrJ6oR43DpDIwPEeKPveX_lod4",
    authDomain: "university-management-58034.firebaseapp.com",
    projectId: "university-management-58034",
    storageBucket: "university-management-58034.firebasestorage.app",
    messagingSenderId: "1078883813891",
    appId: "1:1078883813891:web:f5c044dfb088d4abe1dc36"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);