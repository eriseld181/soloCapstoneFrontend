import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainStyles from "../Component.module.css";
export default function JumbotronComponent(props) {
  return (
    <>
      <Jumbotron className={`${mainStyles.jumbotron}  text-center`}>
        <Container>
          <h1 className={`${mainStyles.jumboTitle} text-left `}>
            {" "}
            {props.title}
          </h1>
          <p className={`${mainStyles.jumboText} text-left `}>
            {props.subtitle}
          </p>

          <Button
            className={`${mainStyles.jumboButton} mt-4 `}
            variant="primary"
          >
            <Link to="/register">{props.buttonText}</Link>
          </Button>
        </Container>
      </Jumbotron>
    </>
  );
}
