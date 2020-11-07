import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Nav, Navbar, Image, Form, Button } from "react-bootstrap";
import styles from "./Navbar.module.css";

import { AiFillLock } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: (data) => dispatch({ type: "TOGGLE_LOGIN", payload: data }),
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
      props.myCheck();
    }
  };
  useEffect(() => {}, [props.isLoggedIn]);

  return (
    <>
      <Navbar
        variant="light"
        style={{
          margin: "0px",
          padding: "0px",
          width: "100%",
          backgroundColor: "#070a1d",
        }}
        className={`  ${styles.text}`}
        expand="lg"
      >
        {props.CheckActive ? (
          <>
            <Navbar.Brand>
              {" "}
              <Link to="/home">
                <Image
                  src="../../e-tech-logo-main.png"
                  style={{ width: "200px" }}
                  className="App-log ml-5"
                />
              </Link>
            </Navbar.Brand>
          </>
        ) : (
          <>
            <Navbar.Brand>
              {" "}
              <Link to="/">
                <Image
                  src="../../e-tech-logo-main.png"
                  style={{ width: "200px" }}
                  className="App-log ml-5"
                />
              </Link>
            </Navbar.Brand>{" "}
          </>
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.CheckActive && (
              <Nav>
                {/* <AiFillHome className={` ${styles.icons}`} /> */}
                <Link className="mr-3 pt-2" to="/home">
                  Home
                </Link>
              </Nav>
            )}
            {props.CheckActive && (
              <Nav>
                {/* <FaUser className={` ${styles.icons}`} /> */}
                <Link className="mr-3 pt-2" to="/profile">
                  {" "}
                  Profile
                </Link>
              </Nav>
            )}
            {props.Check && (
              <Nav>
                <Link className="mr-3  pt-2" to="about">
                  About
                </Link>
              </Nav>
            )}
            {props.Check && (
              <Nav>
                <Link className="mr-3 pt-2" to="/contact">
                  Contact
                </Link>{" "}
              </Nav>
            )}{" "}
          </Nav>
          <Form inline>
            {props.Check && (
              <Nav>
                <Link to="/login">
                  <AiFillLock className={` ${styles.icons}`} />
                  Login
                </Link>
              </Nav>
            )}
            {props.CheckActive && (
              <Nav>
                <Button
                  className={`${styles.text} `}
                  style={{
                    boxShadow: "none",
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
