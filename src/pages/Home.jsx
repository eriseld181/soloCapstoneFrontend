import React from "react";
import NavBar from "../components/NavBar/MainNavBar";
//import { Link } from "react-router-dom";
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
import { ImGithub } from "react-icons/im";

class Home extends React.Component {
  state = {
    users: [],
    singleUser: [],
    feedCategory: [],
    categorySelected: "projects",
  };
  //to get change the category
  // handleDropDownChange = (category) => {
  //   this.setState({ categorySelected: category });
  // };
  // //search events
  handleSearchQuery = (searchQuery) => {
    if (searchQuery) {
      let feedCategory = this.state.feedCategory.filter((feed) =>
        feed.projectName.toLowerCase().includes(searchQuery.toLowerCase())
      );

      console.log(this.state.feedCategory, feedCategory);
      if (feedCategory.length === 0) {
        this.fetchFeed();
      } else {
        this.setState({ feedCategory });
      }
    } else {
      this.fetchFeed();
      // this.setState({
      //   feedCategory: categoryFetch[this.state.categorySelected].slice(0, 3),
      // });
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
    ///////
  };

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.categorySelected !== this.state.categorySelected) {
      this.fetchFeed();
    }
  }
  // const fetchedSingleFeed = await FetchDataFeed.json();
  // this.setState({ singleUser: fetchedSingleFeed });

  // /////////////////////////////////////
  // const userResponse = await fetch('http://localhost:5000/api/users/me', {
  //   credentials: 'include',
  // });
  // const fetchedSingleUser = await userResponse.json();
  // this.setState({ singleUser: fetchedSingleUser });
  // console.log(this.state.singleUser);

  // const response = await fetch('http://localhost:5000/api/users/me', {
  //   credentials: 'include',
  // });
  // const fetchedUsers = await response.json();
  // this.setState({ users: fetchedUsers });
  // };

  render() {
    return (
      <>
        <NavBar />
        <Row>
          <Col xs={3}>
            <Row>
              <Col className="ml-5 text-center">hello</Col>
            </Row>
          </Col>
          <Col xs={9} className="text-center">
            <Row className="mt-5">
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
                        onClick={() =>
                          this.setState({ categorySelected: "projects" })
                        }
                      >
                        Projects
                      </Dropdown.Item>{" "}
                      <Dropdown.Item
                        style={{ backgroundColor: "#0F1F26" }}
                        onClick={() =>
                          this.setState({ categorySelected: "homeworks" })
                        }
                      >
                        Homeworks
                      </Dropdown.Item>{" "}
                      <Dropdown.Item
                        style={{ backgroundColor: "#0F1F26" }}
                        onClick={() =>
                          this.setState({ categorySelected: "posts" })
                        }
                      >
                        Posts
                      </Dropdown.Item>
                      {/* {postCategory.map((category, index) => {
                        return (
                          <Dropdown.Item
                            style={{ backgroundColor: '#0F1F26' }}
                            href='#/action-1'
                            key={index}
                            onClick={() => this.handleDropDownChange(category)}
                          >
                            {category}
                          </Dropdown.Item>
                        );
                      })} */}
                    </DropdownButton>
                    <FormControl
                      placeholder="Search posts using category"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      onChange={(e) => this.handleSearchQuery(e.target.value)}
                    />
                  </InputGroup>

                  <Row>
                    {this.state.feedCategory.map((feed) => {
                      return (
                        <Col xs={12} key={`card-${feed._id}`}>
                          <Card className=" mb-4">
                            <Card.Img
                              variant="top"
                              className="rounded mx-auto d-block"
                              style={{
                                height: "350px",
                                width: "250px",
                                position: "center",
                              }}
                              src={feed.projectPhoto}
                            />
                            <Card.Body>
                              <Card.Title style={{ height: "60px" }}>
                                {feed.title}
                              </Card.Title>
                              <Card.Text>
                                <h4> ${feed.projectDescription}</h4>
                              </Card.Text>
                              <Button href={feed.projectLink} variant="primary">
                                Order now
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
