import React from "react";
import NavBar from "../components/NavBar/MainNavBar";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

class Home extends React.Component {
  state = {
    users: [],
  };

  checkLoggin = () => {
    if (Cookies.get("accessToken")) this.setState({ isLogged: true });
  };
  componentDidMount = async () => {
    console.log("this is cookie.get", Cookies.get("accessToken"));
    const response = await fetch("http://localhost:5000/api/users/me", {
      credentials: "include",
    });
    const fetchedUsers = await response.json();
    this.setState({ users: fetchedUsers });
    console.log("aleks", fetchedUsers);
  };

  render() {
    console.log("hello", this.state.users);
    return (
      <>
        <NavBar />

        <>
          <div>{this.state.users.username}</div>
          <div>{this.state.users.firstName}</div>
          <div>{this.state.users.lastname}</div>

          <div>{this.state.users.role}</div>
        </>

        <div>
          {" "}
          <Link to="/login" className="styles.link">
            Login{" "}
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
