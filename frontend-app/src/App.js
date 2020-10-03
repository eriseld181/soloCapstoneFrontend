import React from "react";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Router>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router >


  );
}

export default App;
