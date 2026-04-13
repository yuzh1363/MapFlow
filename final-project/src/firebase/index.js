import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-3IAk5Ix--UDyFfbnXFDv15R0AdxSDFE",
  authDomain: "mapflow-1dcac.firebaseapp.com",
  projectId: "mapflow-1dcac",
  storageBucket: "mapflow-1dcac.firebasestorage.app",
  messagingSenderId: "774277774988",
  appId: "1:774277774988:web:96a9ee55408db2cc2645a9",
  measurementId: "G-S4T1VPYJRG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);