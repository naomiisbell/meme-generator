import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAR5l-Iz4KrlPrkg5ZwJb80LsX99uI8n4g",
    authDomain: "meme-generator-eb5c0.firebaseapp.com",
    databaseURL: "https://meme-generator-eb5c0.firebaseio.com",
    projectId: "meme-generator-eb5c0",
    storageBucket: "meme-generator-eb5c0.appspot.com",
    messagingSenderId: "125537289625",
    appId: "1:125537289625:web:7059053c2aecb2df1fbf08",
    measurementId: "G-V6NJ2JT7NE"
    });

    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();

    export default { db, auth, storage, firebase }