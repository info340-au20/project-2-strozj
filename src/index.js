import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

import FOOD from './food.json';

// const SAMPLE_CARDS = [
//       {name: "beef", landUse: 20, feed: 15.2, farm: 9, process: 31.6, transport: 50.6, package: 0.2, retail: 8},
//       {name: "cheese", landUse: 2, feed: 5.7, farm: 2, process: 0.6, transport: 1.9, package: 0.2, retail: 4}
// ];

ReactDOM.render(
  <BrowserRouter>
    <App foods={FOOD} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
