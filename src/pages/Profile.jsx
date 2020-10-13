import React from "react";
import NavBar from "../components/NavBar/MainNavBar";
import UserProfile from "../components/userProfile/UserProfile";
import { Tab, Tabs } from "react-bootstrap";
import MyTab from "../components/MyTabs";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Projects from '../components/project/Projects'
import DefaultComponent from '../components/DefaultComponent'

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
      defaultActiveKey="myPublications"
      id="uncontrolled-tab-example"
    >
      <Tab
        className={`justify-content-center`}
        eventKey="myPublications"
        title="Publications"
        to="/hw"
        component={Link}
      >
        <DefaultComponent
          img="./publication.png"
          title="There is nothing to see now!"
          text="All your Publications will be shown here. Add a new post..."
        />
      </Tab>
      <Tab
        className={`justify-content-center `}
        eventKey="homeworks"
        title="Homeworks"
      >
        <DefaultComponent
          img="./homeworks.png"
          title="There is nothing to see now!"
          text="All your Homeworks will be shown here. Add a new post..."
        />
      </Tab>
      <Tab eventKey="notes" title="Notes">
        <DefaultComponent
          img="./notes.png"
          title="There is nothing to see now!"
          text="All your Notes will be shown here. Add a new post..."
        />
      </Tab>
      <Tab eventKey="projects" title="Projects">
     
        <Projects / >
      </Tab>
    </Tabs>
      
        <Footer />
      </>
    );
  }
}
export default Profile;
