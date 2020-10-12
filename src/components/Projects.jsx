import React, { Component } from "react";
import NavBar1 from "./NavBar/MainNavBar";
export default class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount = async () => {
    const response = await fetch("http://localhost:5000/api/projects/", {
      credentials: "include",
    });
    const fetchedProjects = await response.json();
    this.setState({ projects: fetchedProjects });
    console.log("this is projects", this.state.projects);
  };

  render() {
    <>
      <NavBar1 />
      {/* {this.state.projects &&
          this.state.projects.map((project, i) => {
            return <div>{project.projectName}</div>;
          })} */}
    </>;
  }
}
