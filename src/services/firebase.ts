import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGzv_ewiHYwFPhFoICNuZpNzB7l8PvSDs",
  authDomain: "evergreen-trading-system.firebaseapp.com",
  projectId: "evergreen-trading-system",
  storageBucket: "evergreen-trading-system.appspot.com",
  messagingSenderId: "211985681454",
  appId: "1:211985681454:web:215134dae6e58b644ee3bf",
  measurementId: "G-4KNWLB3H0F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().useEmulator("http://localhost:9099")
