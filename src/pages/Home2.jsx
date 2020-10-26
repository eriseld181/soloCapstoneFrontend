import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
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
} from "react-bootstrap";
import Cookies from "js-cookie";
import mainStyle from "../components/Component.module.css";

class Home2 extends React.Component {
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
    const resp = await fetch(
      "http://localhost:5000/api/" + this.state.categorySelected,
      {
        credentials: "include",
      }
    );
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      this.setState({
        feedCategory: data,
      });
    } else {
      this.setState({
        feedCategory: [],
      });
    }
  };
  fetchUser = async () => {
    const resp = await fetch("http://localhost:5000/api/users/me", {
      credentials: "include",
    });
    if (resp.ok) {
      const data = await resp.json();
      console.log(data.firstname, " is data");
      this.setState({
        users: data,
      });
    } else {
      this.setState({
        users: [],
      });
    }
  };

  checkLoggin = () => {
    if (Cookies.get("accessToken")) this.setState({ isLogged: true });
  };

  componentDidMount = async () => {
    this.fetchFeed();
    this.fetchUser();
  };

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.categorySelected !== this.state.categorySelected) {
      this.fetchFeed();
      this.fetchUser();
    }
  }
  render() {
    console.log(this.state.users, "is in user");
    return (
      <div
        style={{
          margin: "0px",
          padding: "0px",
          height: "100vh",
          // outline: "1px solid red",
          overflow: "hidden",
        }}
      >
        {/* End of navbar */}
        <Row style={{ margin: "0px", padding: "0px" }}>
          <Col
            xs={3}
            className={` ${mainStyle.stickyContainer}`}
            style={{ height: "60vh" }}
          >
            <Container
              className="text-center"
              style={{
                height: "100%",
                width: "80%",
                // outline: "1px solid red",
              }}
            >
              <>
                <Card
                  // key={`card-${user._id}`}
                  className={` ${mainStyle.bg}`}
                  style={{ border: "none" }}
                >
                  <Image
                    variant="top"
                    className={`mt-4 mx-auto `}
                    style={{
                      height: "100%",
                      width: "100%",
                      maxWidth: "200px",
                    }}
                    src={this.state.users.profilePhoto}
                    roundedCircle
                  />{" "}
                  <Card.Title className={`mt-3 `}>
                    <Link className={`  ${mainStyle.title}`} to="/profile">
                      <span style={{ color: "#03b8f7" }}>
                        {this.state.users.firstname} {this.state.users.lastname}
                      </span>
                    </Link>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text
                      className={` text-center   ${mainStyle.mediumTitleWhite}`}
                    >
                      <i>{this.state.users.headline}</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Row className="justify-content-center">
                  <Col className="ml-4">
                    <p
                      className={`text-left ml-3 ${mainStyle.mediumTitleBlue} `}
                    >
                      My Tools
                    </p>
                    <p className={` text-left ml-5 ${mainStyle.text}  `}>
                      <Link
                        className={` ${mainStyle.webLinks} `}
                        to="homeworks"
                        style={{ fontSize: "120%" }}
                      >
                        Homeworks
                      </Link>
                    </p>
                    <p className={` text-left ml-5   `}>
                      <Link
                        className={` ${mainStyle.webLinks} `}
                        style={{ fontSize: "120%" }}
                        to="projects"
                      >
                        My Projects
                      </Link>
                    </p>
                    <p className={` text-left ml-5   `}>
                      <Link
                        className={` ${mainStyle.webLinks} `}
                        to="notes"
                        style={{ fontSize: "120%" }}
                      >
                        My Notes
                      </Link>
                    </p>
                  </Col>
                </Row>
                {/*end of Tools */}
                <Row className="justify-content-center">
                  <Col className="ml-4">
                    <p
                      className={`text-left ml-3 ${mainStyle.mediumTitleBlue} `}
                    >
                      Important Links
                    </p>
                    <p className={` text-left ml-5 ${mainStyle.text}  `}>
                      <a
                        style={{ fontStyle: "oblique" }}
                        className={` mx-auto ${mainStyle.webLinks}`}
                        rel="stylesheet"
                        href={this.state.users.github}
                      >
                        <span style={{ fontSize: "125%" }}>
                          <ImGithub className="mb-1 mr-2" /> GitHub
                        </span>
                      </a>
                    </p>
                    <p className={` text-left ml-5   `}>
                      <a
                        style={{ fontStyle: "oblique" }}
                        className={` mx-auto  ${mainStyle.webLinks}`}
                        rel="stylesheet"
                        href={this.state.users.linkedin}
                      >
                        <span
                          style={{ fontSize: "125%" }}
                          className={` mx-auto  ${mainStyle.webLinks}`}
                        >
                          {" "}
                          <SiLinkedin className="mb-1 mr-2" /> LinkedIn
                        </span>
                      </a>
                    </p>
                    <p className={` text-left ml-5   `}>
                      <a
                        style={{ fontStyle: "oblique" }}
                        className={`  mx-auto ${mainStyle.webLinks}`}
                        rel="stylesheet"
                        href={this.state.users.portfolio}
                      >
                        <span style={{ fontSize: "125%" }}>
                          <FaLaptopCode className="mb-1 mr-2" /> Portfolio
                        </span>
                      </a>
                    </p>
                  </Col>
                </Row>
                {/*end of Tools */}
              </>
            </Container>
          </Col>
          <Col
            xs={8}
            className={`text-center  ${mainStyle.example} ${mainStyle.homeContent} `}
            style={{
              // outline: "solid blue 2px",
              height: "100vh",
            }}
          >
            <Row
              style={{
                margin: "0px",
                padding: "0px",
              }}
              className="mt-5 justify-content-right"
            >
              {/* start of the fetches */}
              <Col className="ml-3 ">
                <Container>
                  <InputGroup>
                    <DropdownButton
                      as={InputGroup.Prepend}
                      id="dropdown-basic-button"
                      title={
                        this.state.categorySelected.slice(0, 1).toUpperCase() +
                        this.state.categorySelected.slice(1)
                      }
                      className="mb-3"
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
                  <Row
                    style={{ margin: "0px", padding: "0px" }}
                    className="justify-content-center"
                  >
                    {this.state.categorySelected === "projects" && (
                      <>
                        {this.state.feedCategory.map((feed) => {
                          return (
                            <Col sm={12} md={10} key={`card-${feed._id}`}>
                              <Card
                                className={`mb-4 ${mainStyle.bg}`}
                                style={{ border: "none" }}
                              >
                                <Card.Title
                                  className={`mt-5 mb-4 ${mainStyle.titleBig} `}
                                >
                                  <h3>{feed.myTitle}</h3>
                                </Card.Title>
                                <Card.Img
                                  variant="top"
                                  className={`rounded mx-auto d-block ${mainStyle.bg}`}
                                  style={{
                                    height: "auto",
                                    width: "100%",
                                    maxWidth: "850px",
                                    position: "center",
                                  }}
                                  src={feed.image}
                                />
                                <Card.Body>
                                  <Card.Text
                                    className={` text-left mt-1 mb-2 ${mainStyle.label}`}
                                  >
                                    <p>Author: {feed.userId.username}</p>
                                  </Card.Text>
                                  <Card.Text className="text-left">
                                    <p> {feed.description}</p>
                                  </Card.Text>
                                  {feed.link && (
                                    <Button href={feed.link} variant="primary">
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
                                <Card.Img
                                  variant="top"
                                  className={`rounded mx-auto d-block ${mainStyle.bg}`}
                                  style={{
                                    height: "auto",
                                    width: "100%",
                                    maxWidth: "850px",
                                    position: "center",
                                  }}
                                  src={feed.image}
                                />
                                <Card.Body>
                                  <Card.Title
                                    className={` text-left mt-1 mb-2 ${mainStyle.title} `}
                                  >
                                    Author: {feed.userId.username}
                                  </Card.Title>
                                  <Card.Text className="text-left">
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
                          {this.state.feedCategory.map((feed) => {
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

                                  <Card.Img
                                    variant="top"
                                    className={`rounded mx-auto d-block ${mainStyle.bg}`}
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                      maxWidth: "800px",
                                      position: "center",
                                    }}
                                    src={feed.image}
                                  />
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
      </div>
    );
  }
}

export default Home2;
