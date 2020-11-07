import React, { Component } from "react";
import { Card, Col, Row, Container, Dropdown, Button } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../Component.module.css";
// import DropMenu from "./DropMenu";
import EditModalHomework from "../modals/EditHomeworkModal";
import AddNewHomeworkModal from "../modals/AddNewHomeworkModal";
import { BsThreeDots } from "react-icons/bs";
class Homeworks extends Component {
  state = {
    homeworks: [],
  };

  handleShow1 = (props) => {
    props();
  };

  homeworkFetch = async () => {
    const response = await fetch("http://localhost:5000/api/homeworks", {
      method: "GET",
      credentials: "include",
    });
    const fetchedhomeworks = await response.json();

    this.setState({ homeworks: fetchedhomeworks });
  };
  homeworkDelete = async (id) => {
    const response = await fetch("http://localhost:5000/api/homeworks/" + id, {
      method: "DELETE",
      credentials: "include",
    });
    if (response.ok) {
      this.homeworkFetch();
    }
  };

  componentDidMount = async () => {
    this.homeworkFetch();
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
              <AddNewHomeworkModal
                homeworkFetch={this.homeworkFetch}
                className={`${mainStyle.cardDesignClean}`}
              />
            </Col>
          </Row>
        </Container>{" "}
        <Row
          style={{ margin: "0px", padding: "0px" }}
          className=" justify-content-center"
        >
          <Col sm={12} md={8}>
            {this.state.homeworks && this.state.homeworks.length > 0 ? (
              this.state.homeworks.map((homework) => {
                return (
                  <Card
                    key={`card-${homework._id}`}
                    style={{ border: "0px" }}
                    className={`mb-4 ${mainStyle.bg}`}
                  >
                    <Row>
                      <Col sm={9}>
                        {" "}
                        <Card.Title
                          className={`mt-2 ml-3 text-left ${mainStyle.titleBig} `}
                        >
                          <h3>{homework.myTitle}</h3>
                        </Card.Title>
                      </Col>
                      <Col sm={3}>
                        <Dropdown
                          className={` ${mainStyle.dropdownToggle} ml-auto mr-2 `}
                        >
                          <Dropdown.Toggle
                            className={` ${mainStyle.dropdownToggle}  `}
                            variant="primary"
                            id="dropdown-basic"
                          >
                            <BsThreeDots className={`${mainStyle.menuIcon} `} />
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
                              <Button
                                className={`${mainStyle.btnGradient}`}
                                onClick={() =>
                                  this.homeworkDelete(homework._id)
                                }
                                style={{ width: "100%" }}
                              >
                                Delete
                              </Button>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                    <Card.Body>
                      <Card.Text className={` ${mainStyle.textJustify}`}>
                        {homework.description}
                      </Card.Text>
                      {homework.image && (
                        <div
                          style={{
                            objectFit: "cover",
                            width: "100%",
                          }}
                        >
                          {" "}
                          <Card.Img
                            variant="top"
                            className={`rounded d-block ${mainStyle.bg}`}
                            style={{
                              objectFit: "cover",
                              height: "450px",
                              objectPosition: "center",
                            }}
                            src={homework.image}
                          />
                        </div>
                      )}
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
                  show={this.handleShow}
                />
              </Row>
            )}{" "}
          </Col>
        </Row>
      </>
    );
  }
}
export default Homeworks;
