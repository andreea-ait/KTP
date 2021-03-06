import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expert from './components/Expert';
import { render } from "react-dom";
import Header from './components/Header';
import Security from './components/info/Security';
import System from './components/info/System';
import Devs from './components/info/Devs';


const rootElement = document.getElementById("root");

render(
  <div>
    <BrowserRouter>    
      <Header/>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/expert" element={<Expert />} />
        <Route exact path="/info/expert-system" element={<System/>} />
        <Route exact path="/info/home-security" element={<Security/>} />
        <Route exact path="/info/developers" element={<Devs/>} />
      </Routes>
    </BrowserRouter>

  </div>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
