import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import mainStyle from "../Component.module.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import Info from "../InfoText/Info";

class UserProfile extends Component {
  render() {
    return (
      <div
        className="mx-auto mt-2 mb-2"
        style={{ width: "100%", height: "auto" }}
      >
        <Row className={` ml-3 mr-3 `}>
          <Col md={12} lg={12} xl={4} className={`text-center`}>
            <Image
              className={` m-5  ${mainStyle.profilePhoto}`}
              src={this.props.image}
              roundedCircle
            />
          </Col>
          <Col md={6} lg={6} xl={4} className="pt-5 ">
            <Row>
              <Col xs={4} className={`text-right  ${mainStyle.label}`}>
                First name:
              </Col>
              <Col className={`mb-2 ${mainStyle.textLabel}`}>
                {this.props.name}
              </Col>
            </Row>
            <Row>
              <Col xs={4} className={`  text-right   ${mainStyle.label}`}>
                Last name:
              </Col>
              <Col className={`mb-2 ${mainStyle.textLabel}`}>
                {this.props.lastname}
              </Col>
            </Row>
            <Row>
              <Col xs={4} className={`  text-right   ${mainStyle.label}`}>
                Username:
              </Col>
              <Col className={`mb-2 ${mainStyle.textLabel}`}>
                {this.props.username}
              </Col>
            </Row>
            <Row>
              <Col xs={4} className={` text-right   ${mainStyle.label}`}>
                Role:
              </Col>
              <Col className={`mb-2 ${mainStyle.textLabel}`}>
                {this.props.role}
              </Col>
            </Row>
            <Row>
              <Col xs={4} className={` text-right   ${mainStyle.label}`}>
                About:
              </Col>
              <Col className={`mb-2 ${mainStyle.aboutText}`}>
                {this.props.about}
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={6} xl={4} className="text-left pt-5 ">
            <Row>
              <Col xs={4} className={`  text-right   ${mainStyle.label}`}>
                GitHub:
              </Col>
              <Col className={`mb-2 ${mainStyle.textLabel}`}>
                <a
                  style={{ fontStyle: "oblique" }}
                  className={`  ${mainStyle.webLinks}`}
                  rel="stylesheet"
                  href={this.props.github}
                >
                  <ImGithub className="mb-1 mr-2" />
                  {this.props.username}
                </a>
                <Info
                  name="GitHub User Link"
                  description={`click on the logo or username to go to ${this.props.github}${this.props.username}`}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4} className={`  text-right   ${mainStyle.label}`}>
                LinkedIn:
              </Col>
              <Col className={`mb-2 ${mainStyle.textLabel}`}>
                <a
                  style={{ fontStyle: "oblique" }}
                  className={`  ${mainStyle.webLinks}`}
                  rel="stylesheet"
                  href={this.props.linkedin}
                >
                  <SiLinkedin className="mb-1 mr-2" />
                  {this.props.username}
                </a>
                <Info
                  name="LinkedIn User Link"
                  description={`Click on the logo or username to go to ${this.props.linkedin}${this.props.username}`}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4} className={`  text-right   ${mainStyle.label}`}>
                Portfolio:
              </Col>
              <Col className={`mb-2 ${mainStyle.textLabel}`}>
                <a
                  style={{ fontStyle: "oblique" }}
                  className={`  ${mainStyle.webLinks}`}
                  rel="stylesheet"
                  href={this.props.portfolio}
                >
                  <FaLaptopCode className="mb-1 mr-2" />
                  {this.props.username}
                </a>
                <Info
                  name="Portfolio User Link"
                  description={`Click on the logo or username to go to ${this.props.portfolio}${this.props.username}`}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default UserProfile;
