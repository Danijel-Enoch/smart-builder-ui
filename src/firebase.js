// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-u5pLxC8hq9dNRbF02-BZ-I0xSGC1XJM',
  authDomain: 'smartbuilder-134a8.firebaseapp.com',
  projectId: 'smartbuilder-134a8',
  storageBucket: 'smartbuilder-134a8.appspot.com',
  messagingSenderId: '837964295264',
  appId: '1:837964295264:web:fad817bbdfcdfc87916705',
  measurementId: 'G-C0VHQB8F5K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
