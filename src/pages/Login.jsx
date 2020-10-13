//import React, { useState } from "react";
import React from "react";
import { Container, } from "react-bootstrap";
import LoginForm from "../components/login/LoginForm";

import mainStyle from "../components/Component.module.css";
export default function Login() {
 // const [key, setKey] = useState("login");
  return (
    <>
      <Container
        className={`justify-content-center mt-5 pt-5 
        ${mainStyle.webLinks}`}
      >
        <LoginForm />
      </Container>
    </>
  );
}
