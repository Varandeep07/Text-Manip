import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import About from './components/About';

function App() {
  const [mode,setMode] = useState("dark"); // dark mode feature
  const [alert,setAlert] = useState(null); // alert feature

  const showAlert = (message,type) => {
    setAlert({
      msgg: message,
      type: type
    });

    setInterval(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled",'success');
      document.title = 'TextUtils - Light';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled",'success');
      document.title = 'TextUtils - Dark'; 
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        {/* <About/>  */}
        <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode}/> 
      </div>
    </>
  );
}

export default App;
