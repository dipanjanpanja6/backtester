import firebase from "firebase/app";

const config = process.env.REACT_APP_FIREBASE_CONFIG as string;
const firebaseConfig = JSON.parse(config)
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

