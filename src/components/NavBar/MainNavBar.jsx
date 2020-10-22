//import React, { useState } from "react";
import React from "react";

import {
  Nav,
  Navbar,
  Image,
  NavDropdown,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
//import { AiFillHome } from "react-icons/ai";
//import { FaUser } from "react-icons/fa";
import { connect } from "react-redux";
//import Cookies from 'js-cookie'
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch({ type: "TOGGLE_LOGIN", payload: false }),
});
const logOut = async (props) => {
  const result = await fetch("http://localhost:5000/api/users/logout", {
    // const result = await fetch('http://localhost:4006/profile/login', {
    method: "POST",
  });

  if (result.ok) {
    props.toggleLogin();
    // document.cookie = "accessToken=p";
    document.cookie = `accessToken=hello00;domain=http://localhost:000/`;

    props.history.push("/");
  }
};

function MainNavBar(props) {
  //const [show, setShow ]=useState(false)
  console.log("status of logged in", props.isLoggedIn);
  return (
    <>
      <Navbar
        variant="dark"
        className={` ${styles.bg} ${styles.text}`}
        expand="lg"
      >
        <Navbar.Brand>
          {" "}
          <Link to="/">
            <Image
              src="../../e-tech-logo-main.png"
              style={{ width: "200px" }}
              className="App-log ml-5"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.isLoggedIn && (
              <Nav>
                {/* <AiFillHome className={` ${styles.icons}`} /> */}
                <Link className="mr-3" to="/home">
                  Home
                </Link>
              </Nav>
            )}

            {props.isLoggedIn && (
              <Nav>
                {/* <FaUser className={` ${styles.icons}`} /> */}
                <Link className="mr-3 " to="/profile">
                  {" "}
                  Profile
                </Link>
              </Nav>
            )}

            {!props.isLoggedIn && (
              <Nav>
                <Link className="mr-3  pt-2" to="about">
                  About
                </Link>
              </Nav>
            )}
            {!props.isLoggedIn && (
              <Nav>
                <Link className="mr-3 pt-2" to="/contact">
                  Contact
                </Link>{" "}
              </Nav>
            )}
            {!props.isLoggedIn && (
              <NavDropdown bg="black" title="Tools" id="basic-nav-dropdown">
                <NavDropdown.Item
                  className={`pb-2 ${styles.bg} ${styles.text}`}
                >
                  <Link to="/homeworks">Homeworks</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className={` ${styles.bg} ${styles.text}`}>
                  <Link to="/projects">Projects</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className={` ${styles.bg} ${styles.text}`}>
                  <Link to="/notes">Notes</Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Form inline>
            {!props.isLoggedIn && (
              <Nav>
                <Link to="/login">
                  <AiFillLock className={` ${styles.icons}`} />
                  Login
                </Link>
              </Nav>
            )}
            {props.isLoggedIn && (
              <Nav>
                <Link to="/">
                  <BiExit
                    className={` ${styles.icons}`}
                    onClick={() => logOut()}
                  />
                  Log out
                </Link>
              </Nav>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
