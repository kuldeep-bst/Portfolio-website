import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/HomeScreen/Index';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
        </div>
      </Router>
      <Home/>
    </div>
  );
}

export default App;
