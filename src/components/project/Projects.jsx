import React, { Component } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import DefaultComponent from '../../components/DefaultComponent'
 class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount = async () => {
    const response = await fetch("http://localhost:5000/api/projects/", {
      method: "GET",
      credentials: "include",
    });
    const fetchedProjects = await response.json();

    this.setState({ projects: fetchedProjects });
  };

  render() {
    console.log("aleks project first", this.state.projects.length>0&& this.state.projects[0].userId.username);

    return (
      <>
      
        <div className=" text-center" style={{ outline: "solid blue 2px" }}>
          { this.state.projects&& this.state.projects.length>0 ? 
            this.state.projects.map((project, i) => {
              return (
                <Row key={i}>
                  <Col></Col>
                  <Col xs={12} md={6}>
                    {" "}
                    <Card
                      className=" mb-4"
                      style={{
                        backgroundColor: "#0F1F26",
                        border: "none",
                      }}
                    >
                      <Card.Img
                        className=" mx-auto"
                        variant="top"
                        style={{ width: "300px" }}
                        src={project.projectPhoto}
                      />
                      <Card.Body>
                        <Card.Title>{project.projectName}</Card.Title>
                    <Card.Title>Created By: {project.userId.username}</Card.Title>
                        <Card.Text>{project.projectDescription}</Card.Text>
                        <Button href={project.projectLink} variant="primary">
                          View Source Code
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col></Col>
                </Row>
                // <li key={i} className="d-flex justify-content-center">
                //   {project.projectName}
                // </li>
              );
            }) :  <DefaultComponent
            img="./publication.png"
            title="There is nothing to see now!"
            text="All your Publications will be shown here. Add a new post..."
          />} 
        </div>
      </>
    );
  }
}
export default Projects