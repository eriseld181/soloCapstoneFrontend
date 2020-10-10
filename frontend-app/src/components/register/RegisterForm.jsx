import React, { useState } from "react";
import { Card, Form, Button, Col, Container } from "react-bootstrap";
import styles from "../Component.module.css";
import States from "./countries.json";
import Info from "../InfoText/Info";

function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const userData = {
    email,
    password,
    firstname,
    lastname,
    country,
    city,
  };

  const userRegister = async () => {
    const register = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    if (register.ok) {
      alert("You have to go to login now");
      props.setKey("login");
    }
  };

  return (
    <>
      <Card className={`${styles.bg}`}>
        <Card.Img
          className={`mx-auto mt-5 ${styles.bg}`}
          variant="top"
          style={{ width: "400px" }}
          src="../../e-tech-logo-main.png"
        />
        <Card.Body className={`mx-auto ${styles.bg}`}>
          <Card.Title className={`mb-5 ${styles.bg}`}>
            Please Register to Continue!
          </Card.Title>
        </Card.Body>
        <Container>
          <Form style={{ width: "70%" }} className={`mx-auto  mb-5`}>
            <Form.Row>
              <Form.Group
                className={`mx-auto  ${styles.bg}`}
                as={Col}
                controlId="formGridFirstName"
              >
                <Form.Label className={`${styles.labels}`}>
                  First Name
                  <Info
                    name="First Name"
                    description="Please enter your first name,
                                         for example: John, Mickey"
                  />
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
                  <Info
                    name="Last Name"
                    description="Please enter your last name, for example: Connor, Mouse."
                  />
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

            <Form.Row>
              <Form.Group
                className={`mx-auto ${styles.bg}`}
                as={Col}
                controlId="formGridLastName"
              >
                <Form.Label className={`${styles.labels}`}>
                  Email
                  <Info
                    name="Email"
                    description="Please enter your email, for example: john@gmail.com"
                  />
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className={`mx-auto ${styles.bg}`}
              >
                <Form.Label className={`${styles.labels}`}>
                  Password
                  <Info
                    name="Password"
                    description="Please enter your password, it should have one letter uppercase(A) at least one number(1)."
                  />
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className={`${styles.labels}`}>
                  State
                  <Info
                    name="Country"
                    description="Please choose your state from the dropdown list below, type or click to show the states"
                  />
                </Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
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
                  <Info
                    name="City"
                    description="Please enter the city where do you live."
                  />
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
    </>
  );
}
export default RegisterForm;
