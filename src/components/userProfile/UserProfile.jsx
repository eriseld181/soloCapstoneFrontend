import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import mainStyle from "../Component.module.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { RiImageAddFill } from "react-icons/ri";
import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { ImUserTie } from "react-icons/im";
import EditProfileModal from "../modals/EditProfileModal";

const url = process.env.REACT_APP_URL;
class UserProfile extends Component {
  state = {
    show: false,
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    const handleUpload = async (e) => {
      const uploadImage = e.target.files[0];
      const image = new FormData();
      image.append("image", uploadImage);

      const uploadPhoto = await fetch(`${url}/api/users/uploadImage`, {
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
        console.log("Uploading profile image has failed...");
      }
    };
    return (
      <>
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
            className={` ${mainStyle.uploadPhoto} `}
            htmlFor="file-input"
            aria-required="true"
          >
            <RiImageAddFill className={` ${mainStyle.imageUploadBG} `} />
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
          className={` justify-content-around `}
        >
          {" "}
          <p className={`text-left mt-1 pr-5 mr-5 ${mainStyle.title}`}>
            About
          </p>{" "}
          <p className={`text-right mt-1 ${mainStyle.title}`}>
            <Button
              className={`${mainStyle.btnSettings}`}
              onClick={() => this.handleShow()}
              style={{ width: "100%" }}
            >
              <FiSettings />
            </Button>{" "}
          </p>
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
              md={7}
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
                There is on description yet, please update your description by
                clicking on the settings button.
              </p>{" "}
            </Col>
          </Row>
        )}
        {/* end of about row */}
        <Row
          style={{ margin: "0px", padding: "0px" }}
          // style={{ outline: "solid red 2px" }}
          className=" justify-content-between mb-3"
        >
          <Col xs={6} sm={6} md={5}>
            <div>
              {" "}
              {this.props.role && this.props.role === "student" ? (
                <div className={`mb-2 text-right ${mainStyle.postText}`}>
                  <FaUserGraduate className="mb-1 mr-2" /> {this.props.role}
                </div>
              ) : (
                <div
                  xs={10}
                  md={10}
                  className={`mb-2 text-right ${mainStyle.postText}`}
                >
                  <ImUserTie className="mb-1 mr-2" /> {this.props.role}
                </div>
              )}
            </div>
            {/* end of role div */}
            <div>
              {" "}
              {this.props.country && this.props.city ? (
                <div className={`mb-2 text-right ${mainStyle.postText}`}>
                  <BsGeoAlt className="mb-1 mr-2" />
                  {this.props.country}, {this.props.city}
                </div>
              ) : (
                <div
                  xs={10}
                  md={10}
                  className={`mb-2 text-right ${mainStyle.postText}`}
                >
                  <BsGeoAlt className="mb-1 mr-2" />
                  <i>Add a Location</i>
                </div>
              )}
            </div>
            {/* end of location div */}
            <div>
              {" "}
              {this.props.email ? (
                <div className={`mb-2 text-right ${mainStyle.postText}`}>
                  <BsEnvelopeFill className={`mb-1 mr-2 text-right `} />{" "}
                  {this.props.email}
                </div>
              ) : (
                <div
                  xs={10}
                  md={10}
                  className={`mb-2 text-right ${mainStyle.postText}`}
                >
                  <BsEnvelopeFill className={`mb-1 mr-2 text-right `} />
                  <i>Add an Email</i>
                </div>
              )}
            </div>
          </Col>{" "}
          <Col xs={6} sm={6} md={5}>
            {" "}
            <div>
              {" "}
              {this.props.github ? (
                <div className={`mb-2 text-left ${mainStyle.postText}`}>
                  <a
                    className={` text-left  ${mainStyle.webLinks} ${mainStyle.postText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={this.props.github}
                  >
                    <ImGithub className="mb-1 mr-2 " /> GitHub
                  </a>
                </div>
              ) : (
                <div
                  xs={10}
                  md={10}
                  className={`mb-2 text-left ${mainStyle.postText}`}
                >
                  <ImGithub className="mb-1 mr-2 " />
                  <i>Add a Github</i>
                </div>
              )}
            </div>
            <div>
              {" "}
              {this.props.linkedin ? (
                <div className={`mb-2 text-left ${mainStyle.postText}`}>
                  <a
                    className={` text-left  ${mainStyle.webLinks} ${mainStyle.postText}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={this.props.linkedin}
                  >
                    {" "}
                    <SiLinkedin className="mb-1 mr-2" /> LinkedIn
                  </a>
                </div>
              ) : (
                <div
                  xs={10}
                  md={10}
                  className={`mb-2 text-left ${mainStyle.postText}`}
                >
                  <SiLinkedin className="mb-1 mr-2" />
                  <i>Add a Linkedin</i>
                </div>
              )}
            </div>
            <div>
              {" "}
              {this.props.portfolio ? (
                <div className={`mb-2 text-left ${mainStyle.postText}`}>
                  <a
                    className={`  text-left ${mainStyle.webLinks} ${mainStyle.postText}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={this.props.portfolio}
                  >
                    <FaLaptopCode className="mb-1 mr-2" /> Portfolio
                  </a>
                </div>
              ) : (
                <div
                  xs={10}
                  md={10}
                  className={`mb-2 text-left ${mainStyle.postText}`}
                >
                  <FaLaptopCode className="mb-1 mr-2" />
                  <i>Add a portfolio</i>
                </div>
              )}
            </div>
          </Col>{" "}
        </Row>
        <EditProfileModal
          show={this.state.show}
          handleClose={this.handleClose}
          userId={this.props.id}
          userFetch={this.props.userFetch}
        />
      </>
    );
  }
}
export default UserProfile;
