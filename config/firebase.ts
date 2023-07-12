// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfy74DOqPcKU2cf812DP5s1btlQMg7OKA",
  authDomain: "code-compass-11ebd.firebaseapp.com",
  projectId: "code-compass-11ebd",
  storageBucket: "code-compass-11ebd.appspot.com",
  messagingSenderId: "380143675526",
  appId: "1:380143675526:web:bdcede8853275c0f1b0907",
  measurementId: "G-48RLLVDMVP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth:firebase.auth.Auth = app.auth();
// const analytics = getAnalytics(app);
