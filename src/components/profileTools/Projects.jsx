import React, { Component } from "react";
import { Card, Button, Col, Container } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
const url = process.env.REACT_APP_URL;
class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount = async () => {
    const response = await fetch(`${url}/api/users/me/projects/`, {
      method: "GET",
      credentials: "include",
    });
    const fetchedProjects = await response.json();

    this.setState({ projects: fetchedProjects });
  };
  render() {
    return (
      <>
        <div className=" text-center">
          {this.state.projects && this.state.projects.length > 0 ? (
            this.state.projects.map((project, i) => {
              return (
                <Container
                  className="mt-5"
                  style={{
                    width: "100%",
                    columns: "1",
                  }}
                >
                  <Col>
                    <Card
                      key={i}
                      className=" mb-4 "
                      style={{
                        backgroundColor: "#0F1F26",
                        border: "none",
                      }}
                    >
                      <Card.Img
                        className=" mx-auto"
                        variant="top"
                        style={{ width: "200px" }}
                        src={project.image}
                      />
                      <Card.Body>
                        <Card.Title>{project.myTitle}</Card.Title>
                        <Card.Title>
                          Created By: {project.userId.username}
                        </Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Button href={project.projectLink} variant="primary">
                          View Source Code
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Container>
              );
            })
          ) : (
            <DefaultComponent
              img="./publication.png"
              title="There is nothing to see now!"
              text="All your Publications will be shown here. Add a new post..."
            />
          )}
        </div>
      </>
    );
  }
}
export default Projects;
