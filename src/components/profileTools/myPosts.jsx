import React, { Component } from "react";
import { Card, Col, Row, Image, Dropdown, Button } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../../components/Component.module.css";
import { BsThreeDots } from "react-icons/bs";
import PostLoader from "../loader/PostLoader";

import EditModalPosts from "../modals/EditPostModal";
import AddNewPostModal from "../modals/AddNewPostModal";
const url = process.env.REACT_APP_URL;
class Posts extends Component {
  state = {
    posts: [],
    show: false,
    loading: true,
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  postFetch = async () => {
    const response = await fetch(`${url}/api/users/me/posts`, {
      method: "GET",
      credentials: "include",
    });
    const fetchedposts = await response.json();
    if (fetchedposts) {
      this.setState({ posts: fetchedposts });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    } else {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    }
  };

  postDelete = async (id) => {
    const response = await fetch(`${url}/api/posts/${id}`, {
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
        {" "}
        <Row
          className="justify-content-center mb-1 mt-2  "
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
        <Row className={`justify-content-center ${mainStyle.clearSpaces}  `}>
          <Col sm={12} md={4} lg={6} className={` ${mainStyle.clearSpaces}  `}>
            {" "}
            {/* {this.state.loading ? (
              <>
                <PostLoader />
                <PostLoader />
                <PostLoader />
              </>
            ) : ( */}
            <>
              {this.state.posts && this.state.posts.length > 0 ? (
                this.state.posts.map((feed) => {
                  return (
                    <Card
                      key={`card-${feed._id}`}
                      className={`mb-1 ${mainStyle.cardDesignClean} `}
                    >
                      <Card.Body>
                        <Row className={` ${mainStyle.clearSpaces} `}>
                          {" "}
                          <Col
                            className={` ${mainStyle.clearSpaces} `}
                            sm={7}
                            md={9}
                          >
                            <Image
                              variant="top"
                              className={`text-left ${mainStyle.postProfileImage}  `}
                              src={feed.userId.profilePhoto}
                              roundedCircle
                            />{" "}
                            <span
                              className={` pt-3 ml-2 ${mainStyle.smallProfileTitle}`}
                            >
                              {feed.userId.firstname} {feed.userId.lastname}
                            </span>
                          </Col>{" "}
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
                        </Row>{" "}
                        <Card.Text
                          className={`text-left mb-2 mt-1  ${mainStyle.postText} ${mainStyle.textJustify}`}
                        >
                          {feed.myTitle}
                        </Card.Text>
                        {feed.image && (
                          <div>
                            <Card.Img
                              variant="top"
                              className={`rounded mx-auto d-block ${mainStyle.bg} ${mainStyle.postImage}`}
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
            </>
            {/* )} */}
          </Col>
        </Row>
      </>
    );
  }
}
export default Posts;
