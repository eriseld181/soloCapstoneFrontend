import React, { Component } from "react";
import NavBar from "../components/NavBar/MainNavBar";
import Projects from "../components/project/Projects";
export default class projects extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Projects />
      </>
    );
  }
}
