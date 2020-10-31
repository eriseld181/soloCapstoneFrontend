import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  Image,
  Dropdown,
  Container,
  Button,
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
    console.log(fetchedposts);
    this.setState({ posts: fetchedposts });
  };

  postDelete = async (id) => {
    const response = await fetch("http://localhost:5000/api/posts/" + id, {
      method: "DELETE",
      credentials: "include",
    });
    if (response.ok) {
      this.postFetch();
    }
  };

  componentDidMount = async () => {
    this.postFetch();
  };

  render() {
    return (
      <>
        <Container>
          {" "}
          <Row
            className="justify-content-center mb-1 mt-3  "
            style={{ margin: "0px", padding: "0px" }}
          >
            <Col
              className="mx-auto"
              xs={6}
              style={{
                margin: "0px",
                padding: "0px",
                // outline: "solid red 2px",
              }}
            >
              <AddNewPostModal
                postsFetch={this.postFetch}
                className={`${mainStyle.cardDesignClean}`}
              />
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
                        <Col sm={7} md={9}>
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
                        <Col sm={4} md={3}>
                          {" "}
                          {/* End of profile name and photo */}
                          <Dropdown
                            className={` ${mainStyle.dropdownToggle} ml-auto `}
                          >
                            <Dropdown.Toggle
                              className={` ${mainStyle.dropdownToggle}  `}
                              variant="primary"
                              id="dropdown-basic"
                            >
                              <BsThreeDots
                                className={`${mainStyle.menuIcon}    `}
                              />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item className="text-right mb-2">
                                <EditModalPosts
                                  posts={feed}
                                  postsFetch={this.postFetch}
                                />
                              </Dropdown.Item>
                              <Dropdown.Item className="text-right mb-1">
                                <Button
                                  className={`${mainStyle.btnGradient}`}
                                  onClick={() => this.postDelete(feed._id)}
                                  style={{ width: "100%" }}
                                >
                                  Delete
                                </Button>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                      </Row>
                      <Card.Text className={`text-left   ${mainStyle.text}`}>
                        {feed.myTitle}
                      </Card.Text>
                      {feed.image && (
                        <div style={{ width: "100%", height: "500px" }}>
                          <Card.Img
                            variant="top"
                            className={`rounded mx-auto d-block ${mainStyle.bg}`}
                            style={{
                              height: "500px",

                              objectFit: "cover",
                            }}
                            src={feed.image}
                          />
                        </div>
                      )}
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
