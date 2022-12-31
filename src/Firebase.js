// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQECsHG4Hc3ADAoaFwV30vnd63qMMgEfo",
  authDomain: "amazoon-clone-367aa.firebaseapp.com",
  projectId: "amazoon-clone-367aa",
  storageBucket: "amazoon-clone-367aa.appspot.com",
  messagingSenderId: "334696111924",
  appId: "1:334696111924:web:e06479a577b6d5f4634f61",
  measurementId: "G-FR4QV70009",
});

const auth = firebase.auth();

export { auth };
