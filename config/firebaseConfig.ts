import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY, 
    authDomain: "muncaxapp.firebaseapp.com",
    databaseURL: "https://muncaxapp.firebaseio.com",
    projectId: "muncaxapp",
    storageBucket: "muncaxapp.appspot.com",
    messagingSenderId: "974196022626",
    appId: "1:974196022626:web:e0c010a2f603285a6fe03b",
    measurementId: "G-P5HK2XTJB0"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { storage, db, auth, timestamp }