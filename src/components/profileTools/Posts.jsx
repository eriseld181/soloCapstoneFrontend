import React, { Component } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import DefaultComponent from "./DefaultComponent";
import mainStyle from "../../components/Component.module.css";

class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount = async () => {
    const response = await fetch(
      "http://localhost:5000/api/posts/otherUsersPosts",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const fetchedProjects = await response.json();

    this.setState({ projects: fetchedProjects });
  };

  render() {
    return (
      <>
        <Row
          className="justify-content-center"
          style={{ margin: "0px", padding: "0px" }}
        >
          <Col sm={12} md={4} lg={4}>
            {" "}
            {this.state.projects && this.state.projects.length > 0 ? (
              this.state.projects.map((feed, i) => {
                return (
                  <Card
                    key={`card-${feed._id}`}
                    style={{ border: "none" }}
                    className={`mb-4 ${mainStyle.bg} `}
                  >
                    <Card.Body>
                      <Row>
                        {" "}
                        <Image
                          variant="top"
                          className={`text-left  `}
                          style={{
                            height: "50px",
                            width: "50px",
                          }}
                          src={feed.userId.profilePhoto}
                          roundedCircle
                        />{" "}
                        <span className={`pt-2 pl-2 ${mainStyle.label}`}>
                          {feed.userId.firstname} {feed.userId.lastname}
                        </span>
                      </Row>
                      <Card.Text
                        className={`text-left mt-1  ${mainStyle.text}`}
                      >
                        {feed.myTitle}
                      </Card.Text>

                      <Card.Img
                        variant="top"
                        className={`rounded mx-auto d-block ${mainStyle.bg}`}
                        style={{
                          height: "auto",
                          width: "120vh",
                          maxWidth: "600px",
                          position: "center",
                        }}
                        src={feed.image}
                      />
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <DefaultComponent
                img="./publication.png"
                title="There is nothing to see now!"
                text="All your Publications will be shown here. Add a new post..."
              />
            )}
          </Col>
        </Row>
      </>
    );
  }
}
export default Projects;
