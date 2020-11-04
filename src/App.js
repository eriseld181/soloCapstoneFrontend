import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import MainProjects from "./pages/Mainprojects";
import Homeworks from "./components/profileTools/Homework";
import Posts from "./components/profileTools/Posts";
import Notes from "./components/profileTools/Notes";
import Cookie from "js-cookie";
// import style from "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavBar from "./components/NavBar/MainNavBar";
function App() {
  const [Check, setCheck] = useState(true);
  const [CheckActive, setCheckActive] = useState(false);
  const myCheck = async () => {
    if ((Cookie.get = "activeL")) {
      setCheck(false);
      setCheckActive(true);
    } else if ((Cookie.get = "")) {
      setCheck(true);
      setCheckActive(false);
    }
  };
  useEffect(() => {
    myCheck();
  }, []);
  return (
    <>
      <Router>
        <MainNavBar Check={Check} CheckActive={CheckActive} myCheck={myCheck} />

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login">
            <Login myCheck={myCheck} />
          </Route>
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/home" exact component={Home} />
          <Route path="/home2" exact component={Home2} />
          <Route path="/contact" exact component={Contact} />
          <Route path="#about" exact component={MainPage} />
          <Route path="/" exact component={MainNavBar} />
          <Route path="/projects" exact component={MainProjects} />
          <Route path="/homeworks" exact component={Homeworks} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/notes" exact component={Notes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
