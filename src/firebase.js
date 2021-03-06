import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgOlZ0nn6E2fxftNydTDqSQLW6idYotsU",
  authDomain: "capstone-turkey-giftify.firebaseapp.com",
  projectId: "capstone-turkey-giftify",
  storageBucket: "capstone-turkey-giftify.appspot.com",
  messagingSenderId: "370141310374",
  appId: "1:370141310374:web:de866e7b7d55f73ee37367",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, app };
export default db;
