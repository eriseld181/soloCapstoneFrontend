import React, { Component } from "react";
import { Card, Col, Row, Container, Dropdown, Button } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../Component.module.css";
// import DropMenu from "./DropMenu";
import EditModalHomework from "../modals/EditModalHomework";
import { BsThreeDots } from "react-icons/bs";
class Homeworks extends Component {
  state = {
    homeworks: [],
  };

  homeworkFetch = async () => {
    const response = await fetch("http://localhost:5000/api/homeworks", {
      method: "GET",
      credentials: "include",
    });
    const fetchedhomeworks = await response.json();

    this.setState({ homeworks: fetchedhomeworks });
  };

  componentDidMount = async () => {
    this.homeworkFetch();
  };

  render() {
    console.log(
      "eriseld all homeworks ",
      this.state.homeworks.length > 0 && this.state.homeworks
    );

    return (
      <Container>
        {" "}
        <Row className=" justify-content-center">
          <Col sm={12} md={10}>
            {this.state.homeworks && this.state.homeworks.length > 0 ? (
              this.state.homeworks.map((homework) => {
                return (
                  <Card
                    key={`card-${homework._id}`}
                    style={{ border: "0px" }}
                    className={`mb-4 ${mainStyle.bg}`}
                  >
                    <Row>
                      <Col>
                        {" "}
                        <Card.Title
                          className={`mt-5 mb-4 text-center ${mainStyle.titleBig} `}
                        >
                          <h3>{homework.myTitle}</h3>
                        </Card.Title>
                      </Col>
                      <Col className="mr-3">
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
                                <EditModalHomework
                                  homework={homework}
                                  homeworkFetch={this.homeworkFetch}
                                />
                              </Dropdown.Item>
                              <Dropdown.Item
                                className="text-right mb-1"
                                style={{
                                  backgroundColor: "#0f1f26",
                                }}
                              >
                                <Button style={{ width: "100%" }}>
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
                      src={homework.image}
                    />
                    <Card.Body>
                      <Card.Text className=" text-left">
                        {homework.description}
                      </Card.Text>
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
            )}{" "}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Homeworks;
