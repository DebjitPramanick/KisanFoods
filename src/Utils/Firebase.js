import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCai3twmBrwAZjKFNp7uNgSapm9cNXd_lw",
    authDomain: "kisan-foods.firebaseapp.com",
    projectId: "kisan-foods",
    storageBucket: "kisan-foods.appspot.com",
    messagingSenderId: "160547147796",
    appId: "1:160547147796:web:c867be5d03d02eaaeb1701"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseDB = firebaseApp.database().ref();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider,firebaseDB}