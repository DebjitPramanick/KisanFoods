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
const api="AIzaSyA9uhmM6gsIwgjAu2-Rb5ofIlvqz69sGZQ"
const userDB = firebaseApp.firestore().collection('Users')
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const Products = firebaseApp.firestore().collection('Products')


export {auth,provider,userDB,Products,api }