import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Auth from "./components/Sign_Up/Auth"
import SpeechRecognitionComponent from './components/Speech/SpeechRecognitionComponent';
import BasicExample, { Navbar } from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import  Analytics from './components/Analytics/Analytics';

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
        <Route path ="/" element ={<Home />} />
        <Route path ="/pricing" element ={<Pricing />} />
        <Route path ="/analytics" element ={<Analytics />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;