import React from "react";
import { Container, Card } from "react-bootstrap";
import mainStyle from "./Component.module.css";
export default function DefaultComponent(props) {
  return (
    <Container>
      <Card className={`${mainStyle.cardDesignClean} mt-5 mb-5 text-center`}>
        <Card.Img
          className={`${mainStyle.bg} mx-auto ${mainStyle.imageContent} `}
          variant="top"
          src={props.img}
        />
        <Card.Body className={`${mainStyle.bg} `}>
          <Card.Title className={`${mainStyle.label} mt-3 text-left`}>
            {props.title}
          </Card.Title>
          <Card.Text className={`${mainStyle.text} text-left  `}>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
