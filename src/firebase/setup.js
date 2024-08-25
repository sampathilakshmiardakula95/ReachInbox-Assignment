import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAVITevRnQY9y3gwSq2QRhjPTxfjsrRaXE",
  authDomain: "reachinbox-6c7c8.firebaseapp.com",
  projectId: "reachinbox-6c7c8",
  storageBucket: "reachinbox-6c7c8.appspot.com",
  messagingSenderId: "771566064875",
  appId: "1:771566064875:web:a8fe3de7e65dea995c1aae"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)