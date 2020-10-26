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
} from "react-bootstrap";
import Cookies from "js-cookie";
import mainStyle from "../components/Component.module.css";

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
      <div style={{ margin: "0px", padding: "0px" }}>
        <Row style={{ margin: "0px", padding: "0px" }}>
          <Col xs={3}>
            <Row className="justify-content-center">
              <Col className="ml-5 text-center"></Col>
            </Row>
          </Col>
          <Col xs={12} className="text-center">
            <Row style={{ margin: "0px", padding: "0px" }} className="mt-5">
              {/* start of the fetches */}
              <Col className="ml-3">
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

export default Home;
