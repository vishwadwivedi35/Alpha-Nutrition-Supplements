// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqQmkeUEkqZncA9PBKcN2z54i71goKBvw",
  authDomain: "alpha-nutrition-supplements.firebaseapp.com",
  projectId: "alpha-nutrition-supplements",
  storageBucket: "alpha-nutrition-supplements.appspot.com",
  messagingSenderId: "173511615944",
  appId: "1:173511615944:web:ba63e1ad8d4f2ec3cfccfd",
  measurementId: "G-W07ZHNF9ZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
