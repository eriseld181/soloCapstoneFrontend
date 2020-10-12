import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
// import style from "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavBar from "./components/NavBar/MainNavBar";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/home" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="#about" exact component={MainPage} />
          <Route path="/contact" exact component={MainNavBar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
