import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const config = {
    apiKey: "AIzaSyCgZgM5qUUdVBCDA2IyX17YMeIx9azrkr8",
    authDomain: "magicaldigits-web.firebaseapp.com",
    projectId: "magicaldigits-web",
    storageBucket: "magicaldigits-web.appspot.com",
    messagingSenderId: "235335164718",
    appId: "1:235335164718:web:c76c77335384a3e87a90bf",
    measurementId: "G-DY4400M8HW"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }
initializeApp(config);
// const firestore = firebase.firestore();
const db = getFirestore();
const storage = getStorage(initializeApp(config));
export { storage, db };