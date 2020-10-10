import React from "react";
import NavBar from "../components/NavBar/MainNavBar";
import UserProfile from "../components/userProfile/UserProfile";
import MyTab from "../components/MyTabs";
import Footer from "../components/Footer";
import { Component } from "react";
import Cookies from "js-cookie";

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
        <MyTab />
        <Footer />
      </>
    );
  }
}
export default Profile;
