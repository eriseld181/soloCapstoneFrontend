import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Nav, Navbar, Image, NavDropdown, Form, Button } from "react-bootstrap";
import styles from "./Navbar.module.css";

import { AiFillLock } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch({ type: "TOGGLE_LOGIN", payload: false }),
});
function MainNavBar(props) {
  const logOut = async () => {
    const result = await fetch("http://localhost:5000/api/users/logout", {
      method: "POST",
      body: JSON.stringify(),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    if (result.ok) {
      props.history.push("/");
      props.toggleLogin();
    }
  };

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
            {!props.isLoggedIn && (
              <Nav>
                {/* <AiFillHome className={` ${styles.icons}`} /> */}
                <Link className="mr-3 pt-2" to="/home">
                  Home
                </Link>
              </Nav>
            )}

            {!props.isLoggedIn && (
              <Nav>
                {/* <FaUser className={` ${styles.icons}`} /> */}
                <Link className="mr-3 pt-2" to="/profile">
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
                  className={`mb-3 ${styles.bg} ${styles.text}`}
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
            {!props.isLoggedIn && (
              <Nav>
                <Button
                  className={`${styles.text}`}
                  style={{
                    backgroundColor: "#111111",
                    border: "none",
                  }}
                  onClick={logOut}
                >
                  <BiExit className={` ${styles.icons}`} />
                  Log out
                </Button>
              </Nav>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainNavBar)
);
