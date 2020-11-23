import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Nav, Navbar, Image, Form, Button } from "react-bootstrap";
import styles from "./Navbar.module.css";
import { AiFillLock } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { connect } from "react-redux";
const url = process.env.REACT_APP_URL;
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: (data) => dispatch({ type: "TOGGLE_LOGIN", payload: data }),
});

function MainNavBar(props) {
  const [user, setUser] = useState([]);
  // const [loader, setLoader] = useState(true);
  const userFetch = async () => {
    const response = await fetch(`${url}/api/users/me/`, {
      credentials: "include",
    });
    const fetchedUsers = await response.json();
    if (fetchedUsers) {
      setUser(fetchedUsers);
    }
  };

  const logOut = async () => {
    const result = await fetch(`${url}/api/users/logout`, {
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
  useEffect(() => {
    userFetch();
  }, []);

  return (
    <>
      <Navbar
        style={{
          margin: "0px",
          padding: "0px",
          width: "100%",
          backgroundColor: "#070a1d",
        }}
        className={`navbar-dark  ${styles.text}  `}
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
          <Nav className="mr-auto ml-3">
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
            {props.CheckActive && user.role === "tutor" && (
              <Nav>
                {/* <FaUser className={` ${styles.icons}`} /> */}
                <Link className="mr-3 pt-2" to="/students">
                  {" "}
                  Students
                </Link>
              </Nav>
            )}
            {props.Check && (
              <Nav>
                <Link className="mr-3 ml-1  pt-1" to="about">
                  About
                </Link>
              </Nav>
            )}
            {props.Check && (
              <Nav>
                <Link className="mr-3 pt-1" to="/contact">
                  Contact
                </Link>{" "}
              </Nav>
            )}{" "}
          </Nav>
          <Form inline>
            {props.Check && (
              <Nav>
                <Link to="/login" className="ml-2 mr-3 pt-1">
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
