// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey,    
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId, 
  // appId:import.meta.env.VITE_appId 

  apiKey: "AIzaSyCiWVa-KOCwsr0C3K-qfGNUw8GIW4KSyVM",
  authDomain: "chines-food-restaurant.firebaseapp.com",
  projectId: "chines-food-restaurant",
  storageBucket: "chines-food-restaurant.appspot.com",
  messagingSenderId: "977245395723",
  appId: "1:977245395723:web:90d8640f3f491185d4200e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);