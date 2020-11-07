import React from "react";
import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import mainStyle from "./Component.module.css";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiPinterest } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Footer = () => (
  <>
    {/* <Row
      style={{
        margin: "0px",
        padding: "0px",
      }}
      className={`text-center mt-5 pt-3  mb-0 ${mainStyle.myfooter} $`}
    >
      <Col xs={{ span: 6, offset: 3 }}>
        <Row>
          <Col xs={12} className={`text-left mb-2 `}>
            <i className="fa fa-facebook footer-icon"></i>
            <i className="fa fa-instagram footer-icon"></i>
            <i className="fa fa-twitter footer-icon"></i>
            <i className="fa fa-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row
          className={`row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 `}
        >
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <Link to="/" className={`  ${mainStyle.webLinks}`}>
                    Main Page
                  </Link>
                </p>
                <p>
                  <Link to="/home" className={`  ${mainStyle.webLinks}`}>
                    About
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row style={{ margin: "0px", padding: "0px" }}>
              <Col xs={12} className="footer-links">
                <p>
                  <Link to="/profile/hw" className={`  ${mainStyle.webLinks}`}>
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/home" className={`  ${mainStyle.webLinks}`}>
                    Profile
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <Link to="/profile/hw" className={`  ${mainStyle.webLinks}`}>
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="/home" className={`  ${mainStyle.webLinks}`}>
                    How to use
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <Link to="/profile/hw" className={`  ${mainStyle.webLinks}`}>
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="/home" className={`  ${mainStyle.webLinks}`}>
                    How to use
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2"></Col>
        </Row>
      </Col>
    </Row> */}
    <Row style={{ backgroundColor: "#070a1d", margin: "0px", padding: "0px" }}>
      <Col xs={4} className="text-center mb-2 mt-2 "></Col>
      <Col xs={4} className="text-center mb-2 mt-2 ">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className={`  ${mainStyle.webLinks}`} href="/">
          e-tech.com{" "}
        </a>
      </Col>
      <Col xs={4} className="text-right mb-2 mt-2 pr-5 ">
        <a href="https://www.facebook.com/">
          <SiFacebook className={` ${mainStyle.socialIcons} `} />
        </a>
        <a href="https://www.instagram.com/">
          <SiInstagram className={` ${mainStyle.socialIcons} `} />
        </a>
        <a href="https://www.pinterest.com/">
          <SiPinterest className={` ${mainStyle.socialIcons} `} />
        </a>
        <a href="https://twitter.com/">
          <SiTwitter className={` ${mainStyle.socialIcons} `} />
        </a>
        <a href="https://www.linkedin.com/">
          <SiLinkedin className={` ${mainStyle.socialIcons} `} />
        </a>
      </Col>
    </Row>
  </>
);

export default Footer;
