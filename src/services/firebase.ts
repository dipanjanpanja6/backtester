import firebase from "firebase/app";
import "firebase/storage"
import "firebase/auth"


const config = process.env.REACT_APP_FIREBASE_CONFIG as string;
const firebaseConfig = JSON.parse(config)

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

if (process.env.NODE_ENV === "development") {
    firebase.storage().useEmulator(
        process.env.REACT_APP_FIREBASE_STORAGE_HOST as string,
        Number(process.env.REACT_APP_FIREBASE_STORAGE_PORT as string)
    )
}


if (process.env.NODE_ENV === "development") {
    firebase.auth().useEmulator(process.env.REACT_APP_FIREBASE_AUTH_EMULATOR_URL as string)
    firebase.functions().useFunctionsEmulator("http://localhost:5001")
}

export default firebase.apps[0]
