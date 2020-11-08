import React, { Component } from "react";
import { Card, Col, Row, Container, Dropdown, Button } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../Component.module.css";
// import DropMenu from "./DropMenu";
import EditModalHomework from "../modals/EditHomeworkModal";
import AddNewHomeworkModal from "../modals/AddNewHomeworkModal";
import { BsThreeDots } from "react-icons/bs";
const url = process.env.REACT_APP_URL;
class MyHomework extends Component {
  state = {
    homeworks: [],
  };

  handleShow1 = (props) => {
    props();
  };

  homeworkFetch = async () => {
    const response = await fetch(`${url}/api/users/me/homeworks`, {
      method: "GET",
      credentials: "include",
    });
    const fetchedhomeworks = await response.json();

    this.setState({ homeworks: fetchedhomeworks });
  };
  homeworkDelete = async (id) => {
    const response = await fetch(`${url}/api/homeworks/${id}`, {
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
            className={`justify-content-center mb-1 mt-3 ${mainStyle.clearSpaces}  `}
          >
            <Col xs={6} className={` ${mainStyle.clearSpaces}  `}>
              <AddNewHomeworkModal
                homeworkFetch={this.homeworkFetch}
                className={`${mainStyle.cardDesignClean}`}
              />
            </Col>
          </Row>
        </Container>{" "}
        <Row className={`justify-content-center ${mainStyle.clearSpaces}  `}>
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
                        <h3 className={`  text-left mb-2  `}>
                          {homework.myTitle}
                        </h3>
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

                          <Dropdown.Menu>
                            <Dropdown.Item className="text-right mb-2">
                              <EditModalHomework
                                homework={homework}
                                homeworkFetch={this.homeworkFetch}
                              />
                            </Dropdown.Item>
                            <Dropdown.Item className="text-right mb-1">
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

                    <Card.Text className={` ${mainStyle.textJustify}`}>
                      {homework.description}
                    </Card.Text>
                    {homework.image && (
                      <div>
                        {" "}
                        <Card.Img
                          variant="top"
                          className={`rounded mx-auto d-block ${mainStyle.bg} ${mainStyle.postImage}`}
                          src={homework.image}
                        />
                      </div>
                    )}
                  </Card>
                );
              })
            ) : (
              <Row className={` ${mainStyle.clearSpaces}  `}>
                {" "}
                <DefaultComponent
                  img="./homeworks.png"
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
export default MyHomework;
