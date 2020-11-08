import React from "react";
//import { Link } from "react-router-dom";
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

      this.setState({
        feedCategory: data,
      });
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
        <Row className={` ${mainStyle.clearSpaces}  `}>
          <Col xs={12} className="text-center">
            <Row className="justify-content-center mt-5">
              {/* start of the fetches */}
              <Col xs={12}>
                <InputGroup className={` ${mainStyle.imputGroupSize}  `}>
                  <DropdownButton
                    className={`   ${mainStyle.btnGradient} mb-3`}
                    as={InputGroup.Prepend}
                    id="dropdown-basic-button"
                    title={
                      this.state.categorySelected.slice(0, 1).toUpperCase() +
                      this.state.categorySelected.slice(1)
                    }
                    style={{ color: "black" }}
                  >
                    <Dropdown.Item
                      style={{ backgroundColor: "#0F1F26" }}
                      onClick={() => {
                        this.setState({ feedCategory: [] });
                        this.setState({ categorySelected: "homeworks" });
                      }}
                    >
                      Homeworks
                    </Dropdown.Item>{" "}
                    <Dropdown.Item
                      style={{ backgroundColor: "#0F1F26" }}
                      onClick={() => {
                        this.setState({ feedCategory: [] });
                        this.setState({ categorySelected: "projects" });
                      }}
                    >
                      Projects
                    </Dropdown.Item>{" "}
                    <Dropdown.Item
                      style={{ backgroundColor: "#0F1F26" }}
                      onClick={() => {
                        this.setState({ feedCategory: [] });
                        this.setState({ categorySelected: "posts" });
                      }}
                    >
                      Posts
                    </Dropdown.Item>
                  </DropdownButton>
                  <FormControl
                    placeholder="Search posts using category"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={(e) => this.handleSearchQuery(e.target.value)}
                  />
                </InputGroup>
                <Container>
                  {" "}
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
                            <Col sm={12} md={8} key={`card-${feed._id}`}>
                              <Card
                                className={`mb-4 ${mainStyle.bg}`}
                                style={{ border: "none" }}
                              >
                                <Card.Title
                                  className={`mt-3 mb-1  text-left ${mainStyle.titleBig} `}
                                >
                                  <h3>{feed.myTitle}</h3>
                                </Card.Title>
                                {feed.image && (
                                  <div
                                    style={
                                      {
                                        // width: "100%",
                                        // objectFit: "cover",
                                      }
                                    }
                                  >
                                    {" "}
                                    <Card.Img
                                      variant="top"
                                      className={`rounded d-block ${mainStyle.bg}`}
                                      style={{
                                        objectFit: "cover",
                                        height: "400px",
                                        objectPosition: "center",
                                      }}
                                      src={feed.image}
                                    />
                                  </div>
                                )}
                                <Card.Body>
                                  <Card.Text
                                    className={` text-left  mb-1 ${mainStyle.label}`}
                                  >
                                    Author: {feed.userId.username}
                                  </Card.Text>
                                  <Card.Text
                                    className={`  ${mainStyle.textJustify}`}
                                  >
                                    {feed.description}
                                  </Card.Text>
                                  {feed.link && (
                                    <Button
                                      href={feed.link}
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
                    {this.state.categorySelected === "homeworks" && (
                      <>
                        <Alert variant="primary" className="mt-2 ">
                          {" "}
                          <span className="text-center">
                            <i>
                              Check the homeworks provided from tutors. You can
                              filter them by title or tutor name.
                            </i>
                          </span>{" "}
                        </Alert>
                        {this.state.feedCategory.map((feed) => {
                          return (
                            <Col sm={12} md={10} key={`card-${feed._id}`}>
                              <Card
                                style={{ border: "0px" }}
                                className={`mb-4 ${mainStyle.bg}`}
                              >
                                <Card.Title
                                  className={`mt-5 mb-4 ${mainStyle.titleBig} `}
                                >
                                  <h3>{feed.myTitle}</h3>
                                </Card.Title>
                                {feed.image && (
                                  <div
                                    style={{
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
                                      src={feed.image}
                                    />
                                  </div>
                                )}
                                <Card.Body>
                                  <Card.Title
                                    className={` text-left mt-1 mb-2 ${mainStyle.title} `}
                                  >
                                    Author: {feed.userId.username}
                                  </Card.Title>
                                  <Card.Text
                                    className={`  ${mainStyle.textJustify}`}
                                  >
                                    {feed.description}
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                          );
                        })}
                      </>
                    )}
                    {/* end of homework fetch */}
                    {this.state.categorySelected === "posts" && (
                      <Row className="justify-content-center ">
                        <Col sm={12} md={9}>
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
                                      />{" "}
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
                                      <div
                                        style={{
                                          width: "100%",
                                          height: "450px",
                                        }}
                                      >
                                        <Card.Img
                                          variant="top"
                                          className={`rounded mx-auto d-block ${mainStyle.bg}`}
                                          style={{
                                            height: "450px",

                                            objectFit: "cover",
                                          }}
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
        <Footer />
      </>
    );
  }
}

export default Home;
