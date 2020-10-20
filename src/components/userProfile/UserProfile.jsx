import React, { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import mainStyle from "../Component.module.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import Info from "../InfoText/Info";

class UserProfile extends Component {
  render() {
    return (
      <Container className=" mt-5 mb-5 ">
        <Row className="justify-content-center mr-1 ">
          {" "}
          <Image
            className={` mb-4  ${mainStyle.profilePhoto}`}
            src={this.props.image}
            roundedCircle
          />
        </Row>
        {/* end of image row */}

        <Row
          className={`mb-2 justify-content-center ${mainStyle.profileTitle}`}
        >
          {this.props.name} {this.props.lastname}
        </Row>
        <Row className={`mb-2 justify-content-center ${mainStyle.textLabel}`}>
          <i>{this.props.headline}</i>
        </Row>
        {/* end of full name row */}

        <Row className={` justify-content-center ${mainStyle.label}`}>
          <Col xs={12} sm={6} md={8}>
            {" "}
            <p className={`text-left mt-3 ${mainStyle.label}`}>About:</p>
          </Col>
        </Row>
        <Row className={` justify-content-center   ${mainStyle.titleLabel}`}>
          <Col xs={12} sm={6} md={8}>
            {" "}
            {this.props.about}
          </Col>
        </Row>
        {/* end of about row */}
        <Row className={` ml-3 mr-3 text-center }`}>
          <Col sm={12} md={6} lg={6} className="pt-5 ">
            <Row>
              <Col xs={6} md={6} className={`  text-right  ${mainStyle.label}`}>
                Location:
              </Col>
              {this.props.country && this.props.city && (
                <Col
                  xs={6}
                  md={6}
                  className={`mb-2 text-left ${mainStyle.textLabel}`}
                >
                  {this.props.country}, {this.props.city}
                </Col>
              )}
            </Row>

            <Row>
              <Col xs={6} className={`  text-right   ${mainStyle.label}`}>
                Email:
              </Col>
              <Col xs={6} className={`mb-2 text-left ${mainStyle.textLabel}`}>
                {this.props.email}
              </Col>
            </Row>

            <Row>
              <Col xs={6} className={` text-right   ${mainStyle.label}`}>
                Role:
              </Col>
              <Col xs={6} className={`mb-2 text-left ${mainStyle.textLabel}`}>
                {this.props.role}
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={6} xl={4} className=" pt-5 ">
            <Row className={`mb-2  ${mainStyle.textLabel}`}>
              <a
                style={{ fontStyle: "oblique" }}
                className={` mx-auto ${mainStyle.webLinks}`}
                rel="stylesheet"
                href={this.props.github}
              >
                <ImGithub className="mb-1 mr-2" /> GitHub
              </a>
            </Row>
            <Row className={`mb-2 ${mainStyle.textLabel}`}>
              <a
                style={{ fontStyle: "oblique" }}
                className={` mx-auto  ${mainStyle.webLinks}`}
                rel="stylesheet"
                href={this.props.linkedin}
              >
                <SiLinkedin className="mb-1 mr-2" /> LinkedIn
              </a>
            </Row>
            <Row className={`mb-2 ${mainStyle.textLabel}`}>
              <a
                style={{ fontStyle: "oblique" }}
                className={`  mx-auto ${mainStyle.webLinks}`}
                rel="stylesheet"
                href={this.props.portfolio}
              >
                <FaLaptopCode className="mb-1 mr-2" /> Portfolio
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default UserProfile;
