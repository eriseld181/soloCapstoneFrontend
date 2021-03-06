import React from "react";
import { Container, Card } from "react-bootstrap";
import mainStyle from "../Component.module.css";
export default function DefaultComponent(props) {
  return (
    <Container style={{ margin: "0px", padding: "0px" }}>
      <Card className={`${mainStyle.cardDesignClean} mt-5 mb-5 text-center`}>
        <Card.Img
          className={`${mainStyle.bg} mx-auto ${mainStyle.imageContent} `}
          variant="top"
          src={props.img}
        />
        <Card.Body className={`${mainStyle.bg} `}>
          <Card.Title className={`${mainStyle.title} mt-3 `}>
            {props.title}
          </Card.Title>
          <Card.Text className={`${mainStyle.textLabel} `}>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
