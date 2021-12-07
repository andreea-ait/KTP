import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';
import { render } from "react-dom";
import Header from './components/Header';


const rootElement = document.getElementById("root");

render(
  <div>
    <BrowserRouter>    
      <Header/>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/quiz" element={<Quiz />} />
        {/* <Route exact path="/quizz" element={<Quizz />} /> */}
      </Routes>
    </BrowserRouter>

  </div>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
