import React, { Component } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../../components/Component.module.css";
class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount = async () => {
    const response = await fetch("http://localhost:5000/api/notes", {
      method: "GET",
      credentials: "include",
    });
    const fetchedProjects = await response.json();

    this.setState({ projects: fetchedProjects });
  };

  render() {
    return (
      <>
        {" "}
        <Row className=" text-left mt-5">
          {this.state.projects && this.state.projects.length > 0 ? (
            this.state.projects.map((project) => {
              return (
                <Col xs={6} key={`card-${project._id}`}>
                  {" "}
                  <Card
                    className=" mb-4 "
                    style={{
                      backgroundColor: "#0F1F26",
                      border: "none",
                    }}
                  >
                    <Card.Body>
                      <Card.Title className={` ${mainStyle.title}`}>
                        {project.myTitle}
                      </Card.Title>
                      <Card.Title>
                        {/* Created By: {project.userId.username} */}
                      </Card.Title>
                      <Card.Text className={` ${mainStyle.cutText} `}>
                        {project.description}
                      </Card.Text>
                      {/* <Card.Img
                      className=" mx-auto"
                      variant="top"
                      style={{ width: "200px" }}
                      src={project.image}
                    /> */}
                      <Button href={project.projectLink} variant="primary">
                        View Source Code
                      </Button>
                    </Card.Body>
                  </Card>{" "}
                </Col>
              );
            })
          ) : (
            <DefaultComponent
              img="./publication.png"
              title="There is nothing to see now!"
              text="All your Publications will be shown here. Add a new post..."
            />
          )}
        </Row>{" "}
      </>
    );
  }
}
export default Projects;
