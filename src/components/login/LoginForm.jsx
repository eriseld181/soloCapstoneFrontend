import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import { Card, Form, Button, Alert } from "react-bootstrap";
// import Info from "../InfoText/Info";
import styles from "./Login.module.css";
import mainStyle from "../Component.module.css";

import { connect } from "react-redux";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch({ type: "TOGGLE_LOGIN", payload: true }),
});

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState(true);

  const userLogin = async (e) => {
    const url = process.env.REACT_APP_URL;
    const result = await fetch(`${url}/api/users/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    if (result.ok) {
      setLink(link);
      props.toggleLogin();

      props.history.push("/home");
    } else {
      setLink(!link);
    }
  };

  return (
    <div>
      <Card className={`${styles.bg}`}>
        <Card.Img
          className={`mx-auto mt-4 ${styles.bg}`}
          variant="top"
          style={{ width: "400px" }}
          src="../../e-tech-logo-main.png"
        />
        <Card.Body className={`mx-auto ${styles.bg}`}>
          <Card.Title className={`mb-3 ${styles.bg}`}>
            Please Login to Continue!
          </Card.Title>
        </Card.Body>
        <Form style={{ width: "40%" }} className={`mx-auto mb-5 `}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={`${styles.labels}`}>
              Email address
              {/* <Info
                name="Email"
                description="Please enter your email, for example: john@gmail.com"
              /> */}
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className={`${styles.labels}`}>
              Password
              {/* <Info
                name="Password"
                description="Please enter your password, it should have one letter uppercase(A) at least one number(1)."
              /> */}
            </Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <p>
            Don't you have an account?{" "}
            <Link to="/register" className={`${mainStyle.webLinks}`}>
              Register here!
            </Link>
          </p>

          {link ? (
            <Button
              className={`mt-2 ${mainStyle.btnGradient}`}
              onClick={() => userLogin()}
            >
              Submit
            </Button>
          ) : (
            <>
              <Alert variant="danger">Please Check Your Login Details</Alert>
              <Button className="mt-2" onClick={() => userLogin()}>
                Submit
              </Button>
            </>
          )}
        </Form>
      </Card>
    </div>
  );
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
