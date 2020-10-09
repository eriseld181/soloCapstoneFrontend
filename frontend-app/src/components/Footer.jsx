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
                                    <a className={`  ${mainStyle.webLinks}`} href="/home" alt="footer link"> Home</a>
                                </p>
                                <p>
                                    <Link To="/home" className={`  ${mainStyle.webLinks}`}>Media Center</Link>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">Privacy </a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link"> Contact us</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="footer-links">
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">Audio Description </a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">Investor Relations</a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">Legal Notices</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="footer-links">
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link"> Help Center </a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">Jobs </a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">Cookie Preference </a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} className="footer-links">
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">Gift Cards</a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link"> Terms of Use</a>
                                </p>
                                <p>
                                    <a className={`  ${mainStyle.webLinks}`} href="/" alt="footer link">Corporate</a>
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
