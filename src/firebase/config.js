
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmH3xOYvLLr6m3aowb7VPoH6ksSln1_TI",
  authDomain: "la-tienda-del-rey.firebaseapp.com",
  projectId: "la-tienda-del-rey",
  storageBucket: "la-tienda-del-rey.appspot.com",
  messagingSenderId: "1048430747763",
  appId: "1:1048430747763:web:8bc1bd7fad1d8e40e04a06"
};


const app = initializeApp(firebaseConfig);

export const initiFirebase = ()=> app