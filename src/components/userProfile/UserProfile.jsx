import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import mainStyle from "../Component.module.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
const url = process.env.REACT_APP_URL;
class UserProfile extends Component {
  render() {
    const handleUpload = async (e) => {
      const uploadImage = e.target.files[0];
      const image = new FormData();
      image.append("image", uploadImage);
      const uploadPhoto = await fetch(`${url}/api/users/me/uploadImage`, {
        method: "POST",
        body: image,
        credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (uploadPhoto.ok) {
        this.props.userFetch();
      } else {
        console.log("upload photo is not working");
      }
    };
    return (
      <div style={{ margin: "0px", padding: "0px" }}>
        <Row
          style={{ margin: "0px", padding: "0px" }}
          className="justify-content-center mr-1 mt-5 "
        >
          {" "}
          <Image
            style={{ objectFit: "cover" }}
            className={` mb-4  ${mainStyle.profilePhoto} `}
            src={this.props.image}
            roundedCircle
          />{" "}
          <label
            className={` ${mainStyle.uploadPhoto} ${mainStyle.show} `}
            htmlFor="file-input"
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
          style={{ margin: "0px", padding: "0px" }}
          className={`mb-2 justify-content-center ${mainStyle.profileTitle}`}
        >
          {this.props.name} {this.props.lastname}
        </Row>
        {this.props.headline ? (
          <Row
            style={{ margin: "0px", padding: "0px" }}
            className={`mb-2 justify-content-center ${mainStyle.profileSubTitle}`}
          >
            <i>{this.props.headline}</i>
          </Row>
        ) : (
          <Row
            style={{ margin: "0px", padding: "0px" }}
            className={`mb-2 justify-content-center ${mainStyle.profileSubTitle}`}
          >
            <i>Add a headline...</i>
          </Row>
        )}
        {/* end of full name row */}
        <Row
          style={{ margin: "0px", padding: "0px" }}
          className={` justify-content-center `}
        >
          <Col xs={10} sm={10} md={8} style={{ margin: "0px", padding: "0px" }}>
            {" "}
            <p className={`text-left mt-1 ${mainStyle.title}`}>About</p>
          </Col>
        </Row>{" "}
        {this.props.about ? (
          <Row
            style={{ margin: "0px", padding: "0px" }}
            className={` justify-content-center   ${mainStyle.text}`}
          >
            <Col
              style={{ margin: "0px", padding: "0px" }}
              xs={11}
              sm={11}
              md={8}
            >
              <p style={{ textAlign: " justify" }}>{this.props.about}</p>{" "}
            </Col>
          </Row>
        ) : (
          <Row
            style={{ margin: "0px", padding: "0px" }}
            className={` justify-content-center   ${mainStyle.text}`}
          >
            <Col
              style={{ margin: "0px", padding: "0px" }}
              xs={11}
              sm={11}
              md={8}
            >
              <p style={{ textAlign: " justify" }}>
                There is no desrciption yet.
              </p>{" "}
            </Col>
          </Row>
        )}
        {/* end of about row */}
        <Row
          style={{ margin: "0px", padding: "0px" }}
          className={` justify-content-center `}
        >
          <Col
            style={{ margin: "0px", padding: "0px" }}
            className={`mt-3 ml-5 `}
            sm={12}
            md={6}
            lg={4}
            // style={{ outline: "solid blue 1px" }}
          >
            <Row
              style={{ margin: "0px", padding: "0px" }}
              className={` justify-content-center `}
            >
              {" "}
              {this.props.country && this.props.city ? (
                <Col
                  xs={10}
                  md={10}
                  className={`mb-2 text-left ${mainStyle.postText}`}
                >
                  <BsGeoAlt className="mb-1 mr-2" />
                  {this.props.country}, {this.props.city}
                </Col>
              ) : (
                <Col
                  xs={10}
                  md={10}
                  className={`mb-2 text-left ${mainStyle.postText}`}
                >
                  <BsGeoAlt className="mb-1 mr-2" />
                  Location missing
                </Col>
              )}
            </Row>
            <Row
              style={{ margin: "0px", padding: "0px" }}
              className={`justify-content-center `}
            >
              <Col xs={10} className={`mb-2 text-left ${mainStyle.postText}`}>
                <BsEnvelopeFill className={`mb-1 mr-2 text-left `} />{" "}
                {this.props.email}
              </Col>
            </Row>
            <Row
              style={{ margin: "0px", padding: "0px" }}
              className={` justify-content-center `}
            >
              <Col xs={10} className={`mb-2 text-left ${mainStyle.postText}`}>
                {this.props.role && this.props.role === "student" ? (
                  <span>
                    {" "}
                    <FaUserGraduate className="mb-1 mr-2" /> {this.props.role}
                  </span>
                ) : (
                  <span>
                    {" "}
                    <ImUserTie className="mb-1 mr-2" /> {this.props.role}
                  </span>
                )}
              </Col>
            </Row>
          </Col>

          <Col
            sm={12}
            md={6}
            lg={4}
            className=" pt-3 mr-5 "
            // style={{ outline: "solid green 1px" }}
          >
            <Row
              style={{ margin: "0px", padding: "0px" }}
              className={`mb-2 justify-content-center  mr-4 ${mainStyle.postText}`}
            >
              <ImGithub className="mb-1 mr-1 " />
              <a
                className={` text-left  ${mainStyle.webLinks} ${mainStyle.postText}`}
                rel="stylesheet"
                href={this.props.github}
              >
                GitHub
              </a>
            </Row>
            <Row
              className={`mb-2 justify-content-center  mr-4  ${mainStyle.postText}`}
            >
              {" "}
              <SiLinkedin className="mb-1 mr-1" />
              <a
                className={` text-left  ${mainStyle.webLinks} ${mainStyle.postText}`}
                rel="stylesheet"
                href={this.props.linkedin}
              >
                {" "}
                LinkedIn
              </a>
            </Row>
            <Row
              className={`mb-2 justify-content-center mr-4  ${mainStyle.postText}`}
            >
              <a
                className={`  text-left ${mainStyle.webLinks} ${mainStyle.postText}`}
                rel="stylesheet"
                href={this.props.portfolio}
              >
                <FaLaptopCode className="mb-1 mr-2" /> Portfolio
              </a>
            </Row>
          </Col>
        </Row>
        {/* end of personal info */}
      </div>
    );
  }
}
export default UserProfile;
