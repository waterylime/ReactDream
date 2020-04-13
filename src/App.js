import React from 'react';
import './App.css';
import Nav from "./componants/navbar/navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./componants/home/Home";
import Book from "./componants/book/Book";
import Chapter from "./componants/chapter/Chapter"

function App() {

  

  return (
    <>
    <Router>
    <div className="App">
      <Nav />
    </div>

      <Switch>
      <Route exact path={["/", "/home"]}>
        <Home />
      </Route>
      <Route exact path="/:bookName">
        <Book 
        name="name"
        author="author"
        num="1"
        />
      </Route>
      <Route exact path="/:bookName/:id">
        <Chapter />
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
