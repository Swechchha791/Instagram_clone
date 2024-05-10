// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx18GQOOP3Nox8Nv5kFBb0kYjNMnJ5OXA",
  authDomain: "instagram-clone-506b3.firebaseapp.com",
  projectId: "instagram-clone-506b3",
  storageBucket: "instagram-clone-506b3.appspot.com",
  messagingSenderId: "786667970877",
  appId: "1:786667970877:web:c598b181e93b5d457f2554",
  measurementId: "G-T401JGDQR6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
