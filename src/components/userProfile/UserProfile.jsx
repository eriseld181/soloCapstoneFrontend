import React, { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import mainStyle from "../Component.module.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

class UserProfile extends Component {
  render() {
    const handleUpload = async (e) => {
      const uploadImage = e.target.files[0];
      const image = new FormData();
      image.append("image", uploadImage);
      const uploadPhoto = await fetch(
        "http://localhost:5000/api/users/uploadImage",
        {
          method: "POST",
          body: image,
          credentials: "include",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (uploadPhoto.ok) {
        this.props.userFetch();
      } else {
        console.log("upload photo is not working");
      }
    };
    return (
      <Container className=" mt-5 mb-5 ">
        <Row className="justify-content-center mr-1 ">
          {" "}
          <Image
            className={` mb-4  ${mainStyle.profilePhoto} `}
            src={this.props.image}
            roundedCircle
          />{" "}
          <label
            className={` ${mainStyle.uploadPhoto} ${mainStyle.show} `}
            for="file-input"
            aria-required="true"
          >
            <BiImageAdd />
          </label>
          <input
            style={{ display: "none" }}
            key="image"
            id="file-input"
            type="file"
            accept="image/*"
            profile="file"
            // value={this.state.image}
            onChange={(e) => handleUpload(e)}
          />
          {/* <input id="fileItem" type="image"> */}
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
            <p className={`text-left mt-3 ${mainStyle.label}`}>About</p>
          </Col>
        </Row>
        <Row className={` justify-content-center   ${mainStyle.titleLabel}`}>
          <Col xs={12} sm={6} md={8} style={{ textAlign: " justify" }}>
            {" "}
            {this.props.about}
          </Col>
        </Row>
        {/* end of about row */}
        <Row className={` ml-3 mr-3 justify-content-center `}>
          <Col
            className={`mt-5 ml-3 mr-3 `}
            sm={12}
            md={6}
            lg={4}
            // style={{ outline: "solid blue 1px" }}
          >
            <Row className={` ml-3 mr-3 justify-content-center `}>
              {" "}
              {this.props.country && this.props.city && (
                <Col
                  xs={10}
                  md={10}
                  className={`mb-2 text-left ${mainStyle.textLabel}`}
                >
                  <BsGeoAlt className="mb-1 mr-2" />
                  {this.props.country}, {this.props.city}
                </Col>
              )}
            </Row>
            <Row className={` ml-3 mr-3 justify-content-center `}>
              <Col xs={10} className={`mb-2 text-left ${mainStyle.textLabel}`}>
                <BsEnvelopeFill className={`mb-1 mr-2 text-left `} />{" "}
                {this.props.email}
              </Col>
            </Row>
            <Row className={` ml-3 mr-3 justify-content-center `}>
              <Col xs={10} className={`mb-2 text-left ${mainStyle.textLabel}`}>
                <FaUserGraduate className="mb-1 mr-2" /> {this.props.role}
              </Col>
            </Row>
          </Col>
          <Col
            md={6}
            lg={6}
            xl={4}
            className=" pt-5 "
            // style={{ outline: "solid green 1px" }}
          >
            <Row
              className={`mb-2 justify-content-center  ${mainStyle.textLabel}`}
            >
              <a
                style={{ fontStyle: "oblique" }}
                className={` text-left ${mainStyle.webLinks}`}
                rel="stylesheet"
                href={this.props.github}
              >
                <ImGithub className="mb-1 mr-2" /> GitHub
              </a>
            </Row>
            <Row
              className={`mb-2 justify-content-center ${mainStyle.textLabel}`}
            >
              <a
                style={{ fontStyle: "oblique" }}
                className={` text-left  ${mainStyle.webLinks}`}
                rel="stylesheet"
                href={this.props.linkedin}
              >
                <SiLinkedin className="mb-1 mr-2" /> LinkedIn
              </a>
            </Row>
            <Row
              className={`mb-2 justify-content-center ${mainStyle.textLabel}`}
            >
              <a
                style={{ fontStyle: "oblique" }}
                className={`  text-left ${mainStyle.webLinks}`}
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
