// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "",
  authDomain: "mern-netflix-clone-vk.firebaseapp.com",
  projectId: "mern-netflix-clone-vk",
  storageBucket: "mern-netflix-clone-vk.appspot.com",
  messagingSenderId: "18501391712",
  appId: "1:18501391712:web:86e5dbcba12df500977a05",
  measurementId: "G-PD2JN34CMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
