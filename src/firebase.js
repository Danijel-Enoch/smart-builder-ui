
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Z8NxTMQ8kmTKy4467kqggsXI11euRzE",
  authDomain: "smartbuilder-16eec.firebaseapp.com",
  projectId: "smartbuilder-16eec",
  storageBucket: "smartbuilder-16eec.appspot.com",
  messagingSenderId: "324341227892",
  appId: "1:324341227892:web:c058cabe863d01ab7a4c21",
  measurementId: "G-ZRB2KYDRL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);