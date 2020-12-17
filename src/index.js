import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'

import FOOD from './food.json';

const firebaseConfig = {
  apiKey: "AIzaSyAcj8y3kMWPoRI1uQZSmewWU33s6c5xaY8",
  authDomain: "food-print-724e6.firebaseapp.com",
  projectId: "food-print-724e6",
  storageBucket: "food-print-724e6.appspot.com",
  messagingSenderId: "1035916557929",
  appId: "1:1035916557929:web:78dc06624e98b49fec6cf8",
  measurementId: "G-724122JF9E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App foods={FOOD} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
