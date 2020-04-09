import React from 'react';
import './App.css';
import Nav from "./componants/navbar/navbar"
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Nav />
      
    </div>
    </Router>
    </>
  );
}

export default App;
