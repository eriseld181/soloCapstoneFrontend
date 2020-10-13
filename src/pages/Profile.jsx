import React from "react";
import NavBar from "../components/NavBar/MainNavBar";
import UserProfile from "../components/userProfile/UserProfile";
import { Tab, Tabs, Row, Col, Carousel } from "react-bootstrap";
import mainStyle from "../components/Component.module.css";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import SingleUserProjects from "../components/profileTools/SingleUserProjects";

class Profile extends React.Component {
  state = {
    user: [],
  };

  componentDidMount = async () => {
    console.log("this is cookie.get", Cookies.get("accessToken"));
    const response = await fetch("http://localhost:5000/api/users/me", {
      credentials: "include",
    });
    const fetchedUsers = await response.json();
    this.setState({ user: fetchedUsers });
    console.log(this.state.user);
  };

  render() {
    return (
      <>
        <NavBar />

        <UserProfile
          image={this.state.user.profilePhoto}
          name={this.state.user.firstname}
          lastname={this.state.user.lastname}
          username={this.state.user.username}
          role={this.state.user.role}
          about={this.state.user.about}
          github={this.state.user.github}
          linkedin={this.state.user.linkedin}
          portfolio={this.state.user.portfolio}
        />

        <Tabs
          variant="pills"
          transition={false}
          className={`justify-content-center `}
          defaultActiveKey="projects"
          id="uncontrolled-tab-example"
        >
          <Tab
            className={`justify-content-center`}
            eventKey="myPosts"
            title="My Posts"
            to="/hw"
            component={Link}
          ></Tab>
          <Tab
            className={`justify-content-center `}
            eventKey="homeworks"
            title="Homeworks"
          ></Tab>
          <Tab eventKey="notes" title="Notes"></Tab>
          <Tab eventKey="projects" title="Projects">
            <SingleUserProjects />
          </Tab>
          <Tab eventKey="students" title="Students"></Tab>
        </Tabs>

        <Footer />
      </>
    );
  }
}
export default Profile;
