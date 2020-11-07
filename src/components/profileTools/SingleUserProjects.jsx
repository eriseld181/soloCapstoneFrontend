import React, { Component } from "react";
import { Card, Col, Button, Container, Row, Dropdown } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../Component.module.css";
// import DropMenu from "./DropMenu";
import { BsThreeDots } from "react-icons/bs";
import EditProjectModal from "../modals/EditProjectModal";
import AddNewProjectModal from "../modals/AddNewProjectModal";
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
    return (
      <>
        <Container>
          {" "}
          <Row
            className="justify-content-center mb-1 mt-3 "
            style={{ margin: "0px", padding: "0px" }}
          >
            <Col
              xs={6}
              style={{
                margin: "0px",
                padding: "0px",
                // outline: "solid red 2px",
              }}
            >
              <AddNewProjectModal
                projectfetch={this.projectfetch}
                className={`${mainStyle.cardDesignClean}`}
              />
            </Col>
          </Row>
        </Container>{" "}
        <Row
          className=" justify-content-center"
          style={{ margin: "0px", padding: "0px" }}
        >
          <Col sm={12} md={8}>
            {this.state.projects && this.state.projects.length > 0 ? (
              this.state.projects.map((project) => {
                return (
                  <Card
                    key={`card-${project._id}`}
                    className={`mb-4 ${mainStyle.cardDesignClean}`}
                  >
                    <Row>
                      <Col sm={9}>
                        {" "}
                        <h3 className={`  text-left mb-2  `}>
                          {project.myTitle}
                        </h3>
                      </Col>
                      <Col sm={3}>
                        {" "}
                        <Dropdown
                          className={` ${mainStyle.dropdownToggle} ml-auto mr-2 `}
                        >
                          <Dropdown.Toggle
                            className={` ${mainStyle.dropdownToggle}
                             `}
                            variant="primary"
                            id="dropdown-basic"
                          >
                            <BsThreeDots className={`${mainStyle.menuIcon} `} />
                          </Dropdown.Toggle>

                          <Dropdown.Menu className={`${mainStyle.bg}`}>
                            <Dropdown.Item className="text-right mb-2">
                              <EditProjectModal
                                projects={project}
                                projectsFetch={this.projectfetch}
                              />
                            </Dropdown.Item>
                            <Dropdown.Item className="text-right mb-1">
                              <Button
                                className={`${mainStyle.btnGradient}`}
                                onClick={() => this.projectDelete(project._id)}
                                style={{ width: "100%" }}
                              >
                                Delete
                              </Button>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                    {project.image && (
                      <div>
                        {" "}
                        <Card.Img
                          variant="top"
                          className={`rounded mx-auto d-block ${mainStyle.bg} ${mainStyle.postImage}`}
                          src={project.image}
                        />
                      </div>
                    )}
                    <Card.Text
                      className={`text-left mt-2 ${mainStyle.textJustify}  ${mainStyle.postText}`}
                    >
                      {project.description}
                    </Card.Text>
                    <Card.Text className="text-center">
                      <Button
                        className={`${mainStyle.btnGradient}`}
                        href={project.link}
                        target="_blank"
                        variant="primary"
                      >
                        View Source Code
                      </Button>
                    </Card.Text>
                  </Card>
                );
              })
            ) : (
              <Row className={` ${mainStyle.clearSpaces}  `}>
                {" "}
                <DefaultComponent
                  img="./projects.png"
                  title="There is nothing to see now!"
                  text="All your Projects will be shown here. Add a new project..."
                />
              </Row>
            )}
          </Col>
        </Row>{" "}
      </>
    );
  }
}
export default Projects;
