import React from "react";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import MainPage from './pages/MainPage'
import style from "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <div className={`${style.bg}`} >
      <Router>

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router >

    </div >
  );
}

export default App;
