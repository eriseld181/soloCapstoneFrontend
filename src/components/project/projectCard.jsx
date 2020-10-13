import React from "react";

export default function projectCard(props) {
  return (
    <Row>
      <Col></Col>
      <Col xs={12} md={6}>
        {" "}
        <Card
          className=" mb-4"
          style={{
            backgroundColor: "#0F1F26",
            border: "none",
          }}
        >
          <Card.Img
            className=" mx-auto"
            variant="top"
            style={{ width: "300px" }}
            src={props.projectImg}
          />
          <Card.Body>
            <Card.Title>{props.projectTitle}</Card.Title>
            <Card.Text>{props.projectDescription}</Card.Text>
            <Button href={props.projectLink} variant="primary">
              View Source Code
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
}
