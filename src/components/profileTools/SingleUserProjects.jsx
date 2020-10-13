import React, { Component } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount = async () => {
    const response = await fetch(
      "http://localhost:5000/api/users/me/projects",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const fetchedProjects = await response.json();

    this.setState({ projects: fetchedProjects });
  };

  render() {
    console.log("aleksiii", this.state.projects[0]);
    return (
      <>
        <Row className="text-center ml-2 mr-2">
          {this.state.projects && this.state.projects.length > 0 ? (
            this.state.projects.map((project) => {
              return (
                <>
                  {project.projects.map((x) => {
                    return (
                      <Col xs={12} md={6}>
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
                            style={{ width: "200px" }}
                            src={x.projectPhoto}
                          />
                          <Card.Body>
                            <Card.Title>{x.projectName}</Card.Title>
                            <Card.Text className="pl-3 pr-3 text-left">
                              {x.projectDescription}
                            </Card.Text>

                            <Button href={x.projectLink} variant="primary">
                              Go somewhere
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </>
              );
            })
          ) : (
            <DefaultComponent
              img="./publication.png"
              title="There is nothing to see now!"
              text="All your Publications will be shown here. Add a new post..."
            />
          )}{" "}
          {/* </Col> */}
        </Row>
      </>
    );
  }
}
export default Projects;
