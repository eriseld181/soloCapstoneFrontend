import React, { Component } from "react";
import { Card, Col, Button, Container, Row, Dropdown } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../Component.module.css";
// import DropMenu from "./DropMenu";
import { BsThreeDots } from "react-icons/bs";
import EditProjectModal from "../modals/EditModalProject";
class Projects extends Component {
  state = {
    projects: [],
    show: false,
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  projectfetch = async () => {
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
  projectDelete = async (id) => {
    const response = await fetch("http://localhost:5000/api/projects/" + id, {
      method: "DELETE",
      credentials: "include",
    });
    if (response.ok) {
      this.projectfetch();
    }
  };

  componentDidMount = async () => {
    this.projectfetch();
  };

  render() {
    console.log(
      "diego all projects ",
      this.state.projects.length > 0 && this.state.projects
    );

    return (
      <Container>
        {" "}
        <Row className=" justify-content-center">
          <Col sm={12} md={10}>
            {this.state.projects && this.state.projects.length > 0 ? (
              this.state.projects.map((project) => {
                return (
                  <Card
                    key={`card-${project._id}`}
                    style={{ border: "0px" }}
                    className={`mb-4 ${mainStyle.bg}`}
                  >
                    <Row>
                      <Col>
                        {" "}
                        <Card.Title
                          className={`mt-5 mb-4 ml-3 text-left ${mainStyle.titleBig} `}
                        >
                          <h3>{project.myTitle}</h3>
                        </Card.Title>
                      </Col>
                      <Col className="mr-4">
                        {" "}
                        <Card.Title
                          className={`mt-5 mb-4 text-right ${mainStyle.titleBig} `}
                        >
                          <Dropdown className={` ${mainStyle.dropdownToggle} `}>
                            <Dropdown.Toggle
                              style={{
                                border: "none",
                                boxShadow: "none",
                              }}
                              className={` ${mainStyle.dropdownToggle} ${mainStyle.bg}`}
                              variant="primary"
                              id="dropdown-basic"
                            >
                              <BsThreeDots style={{ fontSize: "35px" }} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                              className={`${mainStyle.bg}`}
                              style={{
                                backgroundColor: "#0f1f26",
                              }}
                            >
                              <Dropdown.Item
                                style={{
                                  backgroundColor: "#0f1f26",
                                }}
                                className="text-right mb-2"
                              >
                                <EditProjectModal
                                  projects={project}
                                  projectsFetch={this.projectfetch}
                                />
                              </Dropdown.Item>
                              <Dropdown.Item
                                className="text-right mb-1"
                                style={{
                                  backgroundColor: "#0f1f26",
                                }}
                              >
                                <Button
                                  onClick={() =>
                                    this.projectDelete(project._id)
                                  }
                                  style={{ width: "100%" }}
                                >
                                  Delete
                                </Button>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Card.Title>
                      </Col>
                    </Row>

                    <Card.Img
                      variant="top"
                      className={`rounded mx-auto d-block ${mainStyle.bg}`}
                      style={{
                        height: "auto",
                        width: "100%",
                        maxWidth: "890px",
                        position: "center",
                      }}
                      src={project.image}
                    />
                    <Card.Body>
                      <Card.Text className={`text-left`}>
                        {project.description}
                      </Card.Text>
                      <Card.Body>
                        <Card.Text className="text-center">
                          <Button href={project.projectLink} variant="primary">
                            View Source Code
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <Row style={{ margin: "0px", padding: "0px" }}>
                {" "}
                <DefaultComponent
                  img="./publication.png"
                  title="There is nothing to see now!"
                  text="All your Publications will be shown here. Add a new post..."
                />
              </Row>
            )}
          </Col>
        </Row>{" "}
      </Container>
    );
  }
}
export default Projects;
