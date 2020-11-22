import React from "react";

import UserProfile from "../components/userProfile/UserProfile";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleUserProjects from "../components/profileTools/SingleUserProjects";
import MyHomework from "../components/profileTools/MyHomework";
import Notes from "../components/profileTools/Notes";
import MyPosts from "../components/profileTools/myPosts";
import mainStyle from "../components/Component.module.css";
//import Students from "../components/profileTools/Students";
import ProfileLoader from "../components/loader/ProfileLoader";
const url = process.env.REACT_APP_URL;
class Profile extends React.Component {
  state = {
    user: [],
    allUsers: [],
    loading: true,
  };

  userFetch = async () => {
    const response = await fetch(`${url}/api/users/me/`, {
      credentials: "include",
    });
    const fetchedUsers = await response.json();
    if (fetchedUsers) {
      this.setState({ user: fetchedUsers });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    } else {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  };
  componentDidMount = async () => {
    this.userFetch();
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <ProfileLoader style={{ width: "100%" }} />
        ) : (
          <>
            <UserProfile
              userFetch={this.userFetch}
              image={this.state.user.profilePhoto}
              email={this.state.user.email}
              name={this.state.user.firstname}
              headline={this.state.user.headline}
              lastname={this.state.user.lastname}
              username={this.state.user.username}
              role={this.state.user.role}
              about={this.state.user.about}
              github={this.state.user.github}
              linkedin={this.state.user.linkedin}
              portfolio={this.state.user.portfolio}
              city={this.state.user.city}
              country={this.state.user.country}
              id={this.state.user._id}
            />
            <Tabs
              variant="pills"
              transition={false}
              className={`justify-content-center ${mainStyle.clearSpaces} `}
              defaultActiveKey="myPosts"
              id="uncontrolled-tab-example"
            >
              <Tab
                className={`mx-auto`}
                eventKey="myPosts"
                title="My Posts"
                to="/posts"
                component={Link}
              >
                <MyPosts />
              </Tab>
              {this.state.user.role && this.state.user.role === "tutor" && (
                <Tab
                  eventKey="homeworks"
                  className={`justify-content-center `}
                  title="Homework"
                >
                  {" "}
                  <MyHomework />
                </Tab>
              )}

              <Tab eventKey="notes" title="Notes">
                {" "}
                <Notes />
              </Tab>
              <Tab eventKey="projects" title="Projects">
                <SingleUserProjects />
              </Tab>
              {/* {this.state.user.role && this.state.user.role === "tutor" && (
            <Tab eventKey="students" title="Students">
              <Students />
            </Tab>
          )} */}
            </Tabs>
          </>
        )}

        {/* <Footer /> */}
      </>
    );
  }
}
export default Profile;
