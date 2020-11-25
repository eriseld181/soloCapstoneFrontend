import React from "react";
//import { Link } from "react-router-dom";
import ProfileLoader from "../components/loader/ProfileLoader";

import Footer from "../components/Footer";
import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  Dropdown,
  FormControl,
  DropdownButton,
  Card,
  Button,
  Alert,
} from "react-bootstrap";
import Cookies from "js-cookie";
import mainStyle from "../components/Component.module.css";
const url = process.env.REACT_APP_URL;

class Home extends React.Component {
  state = {
    users: [],
    singleUser: [],
    feedCategory: [],
    categorySelected: "posts",
    loading: true,
  };
  handleSearchQuery = (searchQuery) => {
    if (searchQuery) {
      let filteredCategory = this.state.feedCategory.filter((feed) =>
        feed.myTitle.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

      if (filteredCategory.length === 0) {
        this.fetchFeed();
      } else {
        this.setState({ feedCategory: filteredCategory });
      }
    } else {
      this.fetchFeed();
    }
  };

  fetchFeed = async () => {
    const resp = await fetch(`${url}/api/` + this.state.categorySelected, {
      credentials: "include",
    });
    if (resp.ok) {
      const data = await resp.json();
      if (data) {
        this.setState({
          feedCategory: data,
        });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000);
      } else {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      }
    } else {
      this.setState({
        feedCategory: [],
      });
    }
  };

  checkLoggin = () => {
    if (Cookies.get("accessToken")) this.setState({ isLogged: true });
  };

  componentDidMount = async () => {
    this.fetchFeed();
  };

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.categorySelected !== this.state.categorySelected) {
      this.fetchFeed();
    }
  }
  render() {
    return (
      <>
        {this.state.loading ? (
          <ProfileLoader style={{ width: "100%" }} />
        ) : (
          <Row className={` ${mainStyle.clearSpaces}  `}>
            <Col xs={12} className="text-center">
              <Row className="justify-content-center mt-2">
                {/* start of the fetches */}
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Container>
                    <Row className="justify-content-center">
                      <Col xs={12} sm={12} md={12} lg={8}>
                        {" "}
                        <InputGroup
                          className={` ${mainStyle.imputGroupSize}  `}
                        >
                          <DropdownButton
                            className={`   ${mainStyle.btnGradient} mb-3`}
                            as={InputGroup.Prepend}
                            id="dropdown-basic-button"
                            title={
                              this.state.categorySelected
                                .slice(0, 1)
                                .toUpperCase() +
                              this.state.categorySelected.slice(1)
                            }
                            style={{ color: "black" }}
                          >
                            <Dropdown.Item
                              style={{ backgroundColor: "#0F1F26" }}
                              onClick={() => {
                                this.setState({ feedCategory: [] });
                                this.setState({
                                  categorySelected: "homeworks",
                                });
                                this.setState({
                                  loading: true,
                                });
                              }}
                            >
                              Homeworks
                            </Dropdown.Item>{" "}
                            <Dropdown.Item
                              style={{ backgroundColor: "#0F1F26" }}
                              onClick={() => {
                                this.setState({ feedCategory: [] });
                                this.setState({ categorySelected: "projects" });
                                this.setState({
                                  loading: true,
                                });
                              }}
                            >
                              Projects
                            </Dropdown.Item>{" "}
                            <Dropdown.Item
                              style={{ backgroundColor: "#0F1F26" }}
                              onClick={() => {
                                this.setState({ feedCategory: [] });
                                this.setState({ categorySelected: "posts" });
                                this.setState({
                                  loading: true,
                                });
                              }}
                            >
                              Posts
                            </Dropdown.Item>
                          </DropdownButton>
                          <FormControl
                            placeholder="Search posts using category"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            onChange={(e) =>
                              this.handleSearchQuery(e.target.value)
                            }
                          />
                        </InputGroup>{" "}
                      </Col>
                    </Row>

                    <Row className="justify-content-center">
                      {this.state.categorySelected === "projects" && (
                        <>
                          <Alert variant="primary" className="mt-2 ">
                            {" "}
                            <span className="text-center">
                              <i>
                                Check the Projects provided from tutors. You can
                                filter them by title or tutor name.
                              </i>
                            </span>{" "}
                          </Alert>
                          {this.state.feedCategory.map((feed) => {
                            return (
                              <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={7}
                                key={`card-${feed._id}`}
                              >
                                <Card
                                  className={`mb-3 ${mainStyle.bg}`}
                                  style={{ border: "none" }}
                                >
                                  <Card.Title
                                    className={`mt-3 text-left ${mainStyle.mediumTitleBlue} `}
                                  >
                                    {feed.myTitle}
                                  </Card.Title>
                                  {feed.image && (
                                    <div>
                                      <Card.Img
                                        variant="top"
                                        className={`rounded mb-3 mx-auto d-block ${mainStyle.bg} ${mainStyle.postImage}`}
                                        src={feed.image}
                                      />
                                    </div>
                                  )}

                                  <Card.Text
                                    className={` text-left   ${mainStyle.textB}`}
                                  >
                                    {feed.userId.role == "student" ? (
                                      <span>
                                        Student: {feed.userId.username}
                                      </span>
                                    ) : (
                                      <span>Tutor: {feed.userId.username}</span>
                                    )}
                                  </Card.Text>
                                  <Card.Text
                                    className={`   ${mainStyle.postText} ${mainStyle.textJustify}`}
                                  >
                                    {feed.description}
                                  </Card.Text>
                                  <Card.Body>
                                    {feed.link && (
                                      <Button
                                        href={feed.link}
                                        target="_blank"
                                        className={`${mainStyle.btnGradient}`}
                                      >
                                        View more
                                      </Button>
                                    )}
                                  </Card.Body>
                                </Card>
                              </Col>
                            );
                          })}
                        </>
                      )}
                      {/* end of project fetch */}
                      {this.state.loading ? (
                        <ProfileLoader style={{ width: "100%" }} />
                      ) : (
                        <>
                          {this.state.categorySelected === "homeworks" && (
                            <>
                              <Alert variant="primary" className="mt-2 ">
                                {" "}
                                <span className="text-center">
                                  <i>
                                    Check the homeworks provided from tutors.
                                    You can filter them by title or tutor name.
                                  </i>
                                </span>{" "}
                              </Alert>
                              {this.state.feedCategory.map((feed) => {
                                return (
                                  <Col
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={7}
                                    key={`card-${feed._id}`}
                                  >
                                    <Card
                                      style={{ border: "0px" }}
                                      className={`mb-2 ${mainStyle.bg}`}
                                    >
                                      <Card.Title
                                        className={`mt-4 text-left ${mainStyle.mediumTitleBlue} `}
                                      >
                                        {feed.myTitle}
                                      </Card.Title>
                                      <Card.Text
                                        className={` text-left ${mainStyle.textW} `}
                                      >
                                        Tutor: {feed.userId.username}
                                      </Card.Text>
                                      {feed.image && (
                                        <div>
                                          <Card.Img
                                            variant="top"
                                            className={`rounded mt-1 mb-2 mx-auto d-block ${mainStyle.bg} ${mainStyle.postImage}`}
                                            src={feed.image}
                                          />
                                        </div>
                                      )}{" "}
                                      <Card.Text
                                        className={` ${mainStyle.postText}  ${mainStyle.textJustify}`}
                                      >
                                        {feed.description}
                                      </Card.Text>
                                    </Card>
                                  </Col>
                                );
                              })}
                            </>
                          )}
                        </>
                      )}
                      {/* end of homework fetch */}

                      {this.state.categorySelected === "posts" && (
                        <Row className="justify-content-center ">
                          <Col sm={12} md={12}>
                            {this.state.feedCategory.length > 0 &&
                              this.state.feedCategory.map((feed) => {
                                return (
                                  <Card
                                    style={{ border: "0px" }}
                                    key={`card-${feed._id}`}
                                    className={`mb-4 ${mainStyle.bg}`}
                                  >
                                    <Card.Body>
                                      <Row>
                                        {" "}
                                        {feed.userId.profilePhoto ? (
                                          <>
                                            {" "}
                                            <Image
                                              variant="top"
                                              className={`text-left  `}
                                              style={{
                                                height: "50px",
                                                width: "50px",
                                                objectfit: "cover",
                                              }}
                                              src={feed.userId.profilePhoto}
                                              roundedCircle
                                            />
                                          </>
                                        ) : (
                                          <Image
                                            variant="top"
                                            className={`text-left  `}
                                            style={{
                                              height: "50px",
                                              width: "50px",
                                              objectfit: "cover",
                                            }}
                                            src="https://res.cloudinary.com/social4marketing/image/upload/v1606236191/E-TECH/iebfqrxwvvdj5fdefavb.jpg"
                                            roundedCircle
                                          />
                                        )}
                                        <span
                                          className={`pt-2 pl-2 ${mainStyle.label}`}
                                        >
                                          {feed.userId.firstname}{" "}
                                          {feed.userId.lastname}
                                        </span>
                                      </Row>
                                      <Card.Text
                                        className={`text-left mt-1  ${mainStyle.text}`}
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
                              })}
                          </Col>
                        </Row>
                      )}
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
        <Footer />
      </>
    );
  }
}

export default Home;
