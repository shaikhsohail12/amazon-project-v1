import React from 'react';
import "./App.css";
import Header from'./Header';
import Home from'./home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>   
        </Switch>
      </div>
    </Router>
  );
}

export default App;
