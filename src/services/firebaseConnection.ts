import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmIOtILBSRsTX59SoDLcHIT2ltv-Pwd6w",
  authDomain: "tasksme-23fd3.firebaseapp.com",
  projectId: "tasksme-23fd3",
  storageBucket: "tasksme-23fd3.appspot.com",
  messagingSenderId: "335800411519",
  appId: "1:335800411519:web:69b537aad8428aa75fa64a"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };