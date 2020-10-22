import React, { Component } from "react";
import { Card, Col, Row, Container, Dropdown } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../Component.module.css";
import { BsThreeDots } from "react-icons/bs";
class Homeworks extends Component {
  state = {
    projects: [],
  };
  componentDidMount = async () => {
    const response = await fetch("http://localhost:5000/api/homeworks", {
      method: "GET",
      credentials: "include",
    });
    const fetchedProjects = await response.json();

    this.setState({ projects: fetchedProjects });
  };

  render() {
    console.log(
      "eriseld all projects ",
      this.state.projects.length > 0 && this.state.projects
    );

    return (
      <Container>
        {this.state.projects && this.state.projects.length > 0 ? (
          this.state.projects.map((project) => {
            return (
              <Row className=" justify-content-center">
                <Col sm={12} md={10} key={`card-${project._id}`}>
                  <Card
                    style={{ border: "0px" }}
                    className={`mb-4 ${mainStyle.bg}`}
                  >
                    <Row>
                      <Col>
                        {" "}
                        <Card.Title
                          className={`mt-5 mb-4 text-center ${mainStyle.titleBig} `}
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
                              style={{ border: "none", boxShadow: "none" }}
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
                              >
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item
                                style={{
                                  width: "50%",
                                  backgroundColor: "#0f1f26",
                                }}
                              >
                                Delete
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
                      <Card.Text className=" text-left">
                        {project.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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
      </Container>
    );
  }
}
export default Homeworks;
