import React, { Component } from "react";
import {
  Card,
  Modal,
  Col,
  Row,
  Image,
  Dropdown,
  Container,
  Button,
  Form,
} from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../../components/Component.module.css";
import { BsThreeDots } from "react-icons/bs";

import EditModalPosts from "../modals/EditModalPosts";
import AddNewPostModal from "../modals/AddNewPostModal";

class Posts extends Component {
  state = {
    posts: [],
    show: false,
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  postFetch = async () => {
    const response = await fetch("http://localhost:5000/api/users/me/posts", {
      method: "GET",
      credentials: "include",
    });
    const fetchedposts = await response.json();

    this.setState({ posts: fetchedposts });
  };

  componentDidMount = async () => {
    this.postFetch();
  };

  render() {
    console.log(
      "eriseld all posts ",
      this.state.posts.length > 0 && this.state.posts
    );

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
              <AddNewPostModal className={`${mainStyle.cardDesignClean}`} />
            </Col>
          </Row>
        </Container>

        <Row
          className="justify-content-center"
          style={{ margin: "0px", padding: "0px" }}
        >
          <Col sm={12} md={6} lg={7}>
            {" "}
            {this.state.posts && this.state.posts.length > 0 ? (
              this.state.posts.map((feed) => {
                return (
                  <Card
                    key={`card-${feed._id}`}
                    style={{ border: "none" }}
                    className={`mb-4 ${mainStyle.bg} `}
                  >
                    <Card.Body>
                      <Row>
                        {" "}
                        <Col>
                          <Image
                            variant="top"
                            className={`text-left  `}
                            style={{
                              height: "50px",
                              width: "50px",
                            }}
                            src={feed.userId.profilePhoto}
                            roundedCircle
                          />{" "}
                          <span className={` pt-3 ml-3 ${mainStyle.label}`}>
                            {feed.userId.firstname} {feed.userId.lastname}
                          </span>
                        </Col>
                        <Col xs={3} className="mr-4">
                          {" "}
                          {/* End of profile name and photo */}
                          <Card.Title
                            className={` text-right ${mainStyle.titleBig} `}
                          >
                            <Dropdown
                              className={` ${mainStyle.dropdownToggle} `}
                            >
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
                                  <EditModalPosts
                                    posts={feed}
                                    postsFetch={this.postFetch}
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
                      <Card.Text
                        className={`text-left mt-1  ${mainStyle.text}`}
                      >
                        {feed.myTitle}
                      </Card.Text>

                      <Card.Img
                        variant="top"
                        className={`rounded mx-auto d-block ${mainStyle.bg}`}
                        style={{
                          height: "auto",
                          width: "700px",
                          maxWidth: "100%",
                          position: "center",
                        }}
                        src={feed.image}
                      />
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <DefaultComponent
                img="./publication.png"
                title="There is nothing to see now!"
                text="All your Publications will be shown here. Add a new post..."
              />
            )}
          </Col>
        </Row>
      </>
    );
  }
}
export default Posts;
