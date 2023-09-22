import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Auth from "./components/Auth"
import SpeechRecognitionComponent from './components/SpeechRecognitionComponent';
import BasicExample, { Navbar } from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    // <div className="App">
    //   <SpeechRecognitionComponent />
    // </div>
    <BrowserRouter>
    <BasicExample />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/record" element={<SpeechRecognitionComponent />} />
        <Route path ="/home" element ={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;