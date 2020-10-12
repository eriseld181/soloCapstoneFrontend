import React from "react";
import NavBar from "../components/NavBar/MainNavBar";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  Dropdown,
  FormControl,
  DropdownButton,
} from "react-bootstrap";
import Cookies from "js-cookie";
import mainStyle from "../components/Component.module.css";
import { ImGithub } from "react-icons/im";

let postCategory = ["posts", "projects", "homeworks"];

class Home extends React.Component {
  state = {
    users: [],
    singleUser: [],
  };

  checkLoggin = () => {
    if (Cookies.get("accessToken")) this.setState({ isLogged: true });
  };
  componentDidMount = async () => {
    console.log("this is cookie.get", Cookies.get("accessToken"));
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
    console.log("hello", this.state.users);
    return (
      <>
        <NavBar />

        {/* <>
          <div>{this.state.users.username}</div>
          <div>{this.state.users.firstName}</div>
          <div>{this.state.users.lastname}</div>

          <div>{this.state.users.role}</div>
        </> */}

        <Row>
          <Col xs={3} style={{ outline: "solid red 1px" }}>
            <Row>
              <Col
                style={{ outline: "solid green 1px" }}
                className="ml-5 text-center"
              >
                <div>
                  {}{" "}
                  <Image
                    className={` m-5  ${mainStyle.profilePhoto}`}
                    src={this.state.singleUser.profilePhoto}
                    roundedCircle
                  />
                </div>

                <div className={`  ${mainStyle.title}`}>
                  {this.state.singleUser.firstname}{" "}
                  {this.state.singleUser.lastname}{" "}
                </div>
                <div className={`  ${mainStyle.label}`}>
                  {" "}
                  Role: {this.state.singleUser.role}
                </div>
                <div className={`mb-2 ${mainStyle.textLabel}`}>
                  {" "}
                  <a
                    style={{ fontStyle: "oblique" }}
                    className={`  ${mainStyle.webLinks}`}
                    rel="stylesheet"
                    href={this.state.singleUser.github}
                  >
                    <ImGithub className="mb-1 mr-2" />
                    {this.state.singleUser.username}
                  </a>
                </div>
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
                    >
                      {postCategory.map((category, index) => {
                        return (
                          <Dropdown.Item
                            style={{ backgroundColor: "black" }}
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
                      placeholder="Search posts using the right category"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      onChange={(e) => this.handleSearchQuery(e.target.value)}
                    />
                  </InputGroup>
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
