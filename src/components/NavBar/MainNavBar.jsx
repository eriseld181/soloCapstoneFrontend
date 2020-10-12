import React, { useState } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;

const logOut = async (props) => {
  //const [link, setLink] = useState(false);
  const result = await fetch("http://localhost:5000/api/users/logout", {
    // const result = await fetch('http://localhost:4006/profile/login', {
    method: "POST",
  });

  if (result.ok) {
    // setLink(link);
    props.history.push("/");
  } else {
    // setLink(!link);
  }
};

function MainNavBar(props) {
  console.log("status of logged in", props.isLoogedIn);
  return (
    <>
      <Navbar className={` ${styles.bg} ${styles.text}`} variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <Image
              src="../../e-tech-logo-main.png"
              style={{ width: "200px" }}
              className="App-log ml-5"
            />
          </Link>
        </Navbar.Brand>
        <Nav className={` ${styles.bg} ${styles.text} ml-auto mr-5`}>
          {props.isLoogedIn && (
            <Nav.Link>
              <Link to="/home">
                <AiFillHome className={` ${styles.icons}`} />
                Home
              </Link>
            </Nav.Link>
          )}
          {props.isLoogedIn && (
            <Nav.Link>
              <Link to="/profile">
                <FaUser className={` ${styles.icons}`} />
                Profile
              </Link>
            </Nav.Link>
          )}

          {!props.isLoogedIn && (
            <Nav.Link>
              <Link to="about">About</Link>
            </Nav.Link>
          )}
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>

          {!props.isLoogedIn && (
            <Nav.Link>
              <Link to="/login">
                <AiFillLock className={` ${styles.icons}`} />
                Login
              </Link>
            </Nav.Link>
          )}
          {props.isLoogedIn && (
            <Nav.Link>
              <Link to="/">
                <BiExit
                  className={` ${styles.icons}`}
                  onClick={() => logOut()}
                />
                Log out
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </>
  );
}
export default connect(mapStateToProps)(MainNavBar);
