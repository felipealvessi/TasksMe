import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb_sn57RKIftfDEmqiZQSnfLInLhdcKFI",
  authDomain: "tasksme-f422f.firebaseapp.com",
  projectId: "tasksme-f422f",
  storageBucket: "tasksme-f422f.appspot.com",
  messagingSenderId: "527453069184",
  appId: "1:527453069184:web:22b062fc0a6283b5502b65"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };