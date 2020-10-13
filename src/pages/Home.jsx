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

let postCategory = ["posts", "projects", "homeworks"];

let categoryFetch = {
  projects: "http://localhost:5000/api/projects",
  posts: "http://localhost:5000/api/projects",
  homeworks: "http://localhost:5000/api/projects",
};

class Home extends React.Component {
  state = {
    users: [],
    singleUser: [],
    feedCategory: categoryFetch.projects,
    categorySelected: "projects",
  };
  //to get change the category
  handleDropDownChange = (category) => {
    this.setState({ categorySelected: category });
  };
  //search events
  handleSearchQuery = (searchQuery) => {
    if (searchQuery) {
      let FilteredFeeds = categoryFetch[
        this.state.categorySelected
      ].filter((feed) =>
        feed.projectName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ feedCategory: FilteredFeeds });
    } else {
      this.setState({
        feedCategory: categoryFetch[this.state.categorySelected].slice(0, 3),
      });
    }
  };

  checkLoggin = () => {
    if (Cookies.get("accessToken")) this.setState({ isLogged: true });
  };
  componentDidMount = async () => {
    ///////
    const FetchDataFeed = await fetch(this.categorySelected, {
      credentials: "include",
    });
    const fetchedSingleFeed = await FetchDataFeed.json();
    this.setState({ singleUser: fetchedSingleFeed });

    /////////////////////////////////////
    const userResponse = await fetch("http://localhost:5000/api/users/me", {
      credentials: "include",
    });
    const fetchedSingleUser = await userResponse.json();
    this.setState({ singleUser: fetchedSingleUser });
    console.log(this.state.singleUser);

    const response = await fetch("http://localhost:5000/api/users/me", {
      credentials: "include",
    });
    const fetchedUsers = await response.json();
    this.setState({ users: fetchedUsers });
  };

  render() {
    return (
      <>
        <NavBar />
        <Row>
          <Col xs={3} style={{ outline: "solid red 1px" }}>
            <Row>
              <Col
                style={{ outline: "solid green 1px" }}
                className="ml-5 text-center"
              >
                hello
              </Col>
            </Row>
          </Col>
          <Col
            xs={9}
            className="text-center"
            style={{ outline: "solid red 1px" }}
          >
            <Row>
              {/* start of the fetches */}
              <Col style={{ outline: "solid green 1px" }} className="ml-3">
                <Container>
                  <InputGroup>
                    <DropdownButton
                      as={InputGroup.Prepend}
                      id="dropdown-basic-button"
                      title={this.state.categorySelected}
                      className="mb-3"
                      style={{ color: "black" }}
                    >
                      {postCategory.map((category, index) => {
                        return (
                          <Dropdown.Item
                            style={{ backgroundColor: "#0F1F26" }}
                            href="#/action-1"
                            key={index}
                            onClick={() => this.handleDropDownChange(category)}
                          >
                            {category}
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton>
                    <FormControl
                      placeholder="Search posts using category"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      onChange={(e) => this.handleSearchQuery(e.target.value)}
                    />
                  </InputGroup>
                  {/* 
                  <Row>
                        {this.state.feedCategory.map(feed => {
                            return (<Col xs={4} key={`card-${feed._id}`}>
                                <Card className=" mb-4">
                                    <Card.Img variant="top" className="rounded mx-auto d-block" style={{ height: "350px", width: "250px", position: "center" }} src={feed.projectPhoto} />
                                    <Card.Body>
                                        <Card.Title style={{ height: "60px" }}>{feed.title}</Card.Title>
                                        <Card.Text >
                                            <h4  > ${feed.projectDescription}</h4>
                                        </Card.Text>
                                        <Button href={feed.projectLink} variant="primary">Order now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        })}

                    </Row>  */}
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
