import React, { useState } from "react";
import { Card, Form, Button, Col, Container } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import styles from "../Component.module.css";
import States from "./countries.json";

// import Info from "../InfoText/Info";
import mainStyle from "../Component.module.css";
function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const url = process.env.REACT_APP_URL;

  const userData = {
    email,
    password,
    firstname,
    lastname,
    country,
    city,
  };

  const userRegister = async () => {
    const register = await fetch(`${url}/api/users/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    if (register.ok) {
      props.history.push("/login");
    }
  };

  return (
    <div className={` mt-5 `}>
      <Card className={`${styles.bg} ${styles.cardDesignClean}`}>
        <Card.Img
          className={`mx-auto mt-5 ${styles.bg}`}
          variant="top"
          style={{ width: "300px" }}
          src="../../e-tech-logo-main.png"
        />
        <Card.Body className={`mx-auto ${styles.bg}`}>
          <Card.Title className={`mb-5 ${styles.bg}`}>
            Please Register to Continue!
          </Card.Title>
        </Card.Body>
        <Container>
          <Form style={{ width: "70%" }} className={`mx-auto  mb-5`}>
            <Form.Row className={`${styles.cardDesignClean}`}>
              <Form.Group
                className={`mx-auto  ${styles.bg}`}
                as={Col}
                controlId="formGridFirstName"
              >
                <Form.Label className={`${styles.labels}`}>
                  First Name
                  {/* <Info
                    name="First Name"
                    description="Please enter your first name,
                                         for example: John, Mickey"
                  /> */}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className={`mx-auto ${styles.bg}`}
              >
                <Form.Label className={`${styles.labels}`}>
                  Last Name
                  {/* <Info
                    name="Last Name"
                    description="Please enter your last name, for example: Connor, Mouse."
                  /> */}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row className={`${styles.cardDesignClean}`}>
              <Form.Group
                className={`mx-auto ${styles.bg}`}
                as={Col}
                controlId="formGridLastName"
              >
                <Form.Label className={`${styles.labels}`}>
                  Email
                  {/* <Info
                    name="Email"
                    description="Please enter your email, for example: john@gmail.com"
                  /> */}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} className={`mx-auto ${styles.bg}`}>
                <Form.Label className={`${styles.labels}`}>Password</Form.Label>
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
            </Form.Row>

            <Form.Row className={`${styles.cardDesignClean}`}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className={`${styles.labels}`}>State</Form.Label>
                <Form.Control
                  as="select"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <option className={`${styles.bgWhite}`}>Choose...</option>
                  {States.map((state, index) => {
                    return (
                      <option key={index} className={`${styles.bgWhite}`}>
                        {state.name}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group type="text" as={Col} controlId="formGridCity">
                <Form.Label className={`${styles.labels}`}>
                  City
                  {/* <Info
                    name="City"
                    description="Please enter the city where do you live."
                  /> */}
                </Form.Label>
                <Form.Control
                  placeholder="Ex: London"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <p>
              Do you have an account?{" "}
              <Link to="/login" className={`${mainStyle.webLinks}`}>
                Login here!
              </Link>
            </p>
            <Button
              className={` mt-2  ${styles.btnGradient}`}
              variant="primary"
              onClick={() => userRegister()}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </Card>
    </div>
  );
}
export default withRouter(RegisterForm);
