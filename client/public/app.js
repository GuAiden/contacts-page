// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpd_n5g2g8N5PDckGNWyuBzn-3Y5NUnIY",
  authDomain: "contacts-site-57a35.firebaseapp.com",
  projectId: "contacts-site-57a35",
  storageBucket: "contacts-site-57a35.appspot.com",
  messagingSenderId: "55964329925",
  appId: "1:55964329925:web:016fcee48b8d967cf24dac",
  measurementId: "G-JCDJ07LGN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);