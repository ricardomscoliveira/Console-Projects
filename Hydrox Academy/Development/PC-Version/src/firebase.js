import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCfhQzy_tbtmawZODDQRDx6mXnzxiLGZWg",
    authDomain: "hydroxpc.firebaseapp.com",
    databaseURL: "https://hydroxpc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hydroxpc",
    storageBucket: "hydroxpc.appspot.com",
    messagingSenderId: "456895809275",
    appId: "1:456895809275:web:43bf0979d15dbc87ae125e"
});

const db = firebaseApp.firestore();

export default db;