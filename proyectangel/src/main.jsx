import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs0NrY-N5nxIeSioemEDV1BYi-xkCZ9i8",
  authDomain: "entregafinal-angelbuitrago.firebaseapp.com",
  projectId: "entregafinal-angelbuitrago",
  storageBucket: "entregafinal-angelbuitrago.appspot.com",
  messagingSenderId: "818819705248",
  appId: "1:818819705248:web:11ff8c1e7d7df884a61cc5",
  measurementId: "G-96H6ECX5GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
