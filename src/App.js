import React from 'react';
import './App.css';
import Nav from "./componants/navbar/navbar"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./componants/home/Home";


function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
    </div>
    </Router>
    </>
  );
}

export default App;
