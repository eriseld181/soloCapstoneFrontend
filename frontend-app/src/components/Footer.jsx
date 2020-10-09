import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import mainStyle from './Component.module.css'
const Footer = () => (
    <>
        <Row className={`text-center mt-5 pt-3  ${mainStyle.bgBlack}`}>
            <Col xs={{ span: 6, offset: 3 }}>
                <Row>
                    <Col xs={12} className="text-left mb-2">
                        <i className="fa fa-facebook footer-icon"></i>
                        <i className="fa fa-instagram footer-icon"></i>
                        <i className="fa fa-twitter footer-icon"></i>
                        <i className="fa fa-youtube footer-icon"></i>
                    </Col>
                </Row>
                <Row className={`row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 `}>
                    <Col>
                        <Row>
                            <Col xs={12} className="footer-links">
                                <p>
                                    <Link to="/" className={`  ${mainStyle.webLinks}`}>Main Page</Link>
                                </p>
                                <p>
                                    <Link to="/feed" className={`  ${mainStyle.webLinks}`}>Home</Link>
                                </p>
                                <p>
                                    <Link to="/profile" className={`  ${mainStyle.webLinks}`}>Profile</Link>
                                </p>


                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="footer-links">
                                <p>
                                    <Link to="/profile/hw" className={`  ${mainStyle.webLinks}`}>menu 1</Link>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">menu 2</a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">menu 3</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="footer-links">
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">menu 4</a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">menu 5</a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">menu 6</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="footer-links">
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">menu 7</a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link"> menu 8</a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">menu 9</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-left mb-2">

                    </Col>
                </Row>
            </Col>
        </Row>
        <Row style={{ backgroundColor: "black" }}>
            <Col xs={12} className="text-center mb-2 mt-2 " >
                &copy; {new Date().getFullYear()} Copyright: <a className={`  ${mainStyle.webLinks}`} href="/"> e-tech.com </a>
            </Col>
        </Row>
    </>
);

export default Footer;
