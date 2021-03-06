import React, { useState, useEffect, useCallback } from "react";
import Home from "./pages/Home";
import Students from "./pages/Students";
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
// import Cookie from "js-cookie";
// import style from "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavBar from "./components/NavBar/MainNavBar";
const url = process.env.REACT_APP_URL;
function App() {
  const [CheckActive, setCheckActive] = useState(false);
  const [myNavBarEmpty, setMyNavBarEmpty] = useState(false);
  const [Check, setCheck] = useState(true);

  const myCheck = useCallback(async () => {
    const user = await fetch(`${url}/api/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (user.ok) {
      setCheck(false);
      setCheckActive(true);
      setMyNavBarEmpty(true);
    } else {
      setCheck(true);
      setCheckActive(false);
      setMyNavBarEmpty(false);
    }
  }, []);

  useEffect(() => {
    myCheck();
  }, [myCheck]);
  return (
    <>
      <Router>
        <MainNavBar
          Check={Check}
          CheckActive={CheckActive}
          myCheck={myCheck}
          myNavBarEmpty={myNavBarEmpty}
        />

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login">
            <Login myCheck={myCheck} />
          </Route>
          <Route path="/register" exact component={Register} />
          <Route path="/students" exact component={Students} />
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
