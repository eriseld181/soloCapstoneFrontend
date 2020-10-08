
import React, { Component } from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import mainStyle from '../Component.module.css'
import { ImGithub } from 'react-icons/im';
import { SiLinkedin } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import Info from '../InfoText/Info'
export default class UserProfile extends Component {
    render() {
        return (
            <div className="mx-auto mt-2 mb-2" style={{ width: "100%" }}>
                <Row className={` ml-3 mr-3 `}>
                    <Col md={12} lg={12} xl={4} className={`text-center`}>
                        <Image className={` m-5  ${mainStyle.profilePhoto}`} src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg" rounded />
                    </Col>
                    <Col md={6} lg={6} xl={4} className="pt-5 " >

                        <Row> <Col xs={4} className={`text-right  ${mainStyle.label}`}>First name:</Col> <Col className={`mb-2 ${mainStyle.textLabel}`}> Eriseld</Col> </Row>
                        <Row> <Col xs={4} className={`  text-right   ${mainStyle.label}`}>Last name:</Col> <Col className={`mb-2 ${mainStyle.textLabel}`}> Kosta</Col> </Row>
                        <Row> <Col xs={4} className={`  text-right   ${mainStyle.label}`}>Username:</Col> <Col className={`mb-2 ${mainStyle.textLabel}`}> eriseld181</Col> </Row>
                        <Row> <Col xs={4} className={` text-right   ${mainStyle.label}`}>Role:</Col> <Col className={`mb-2 ${mainStyle.textLabel}`} >  Student</Col> </Row>
                        <Row> <Col xs={4} className={` text-right   ${mainStyle.label}`}>About: </Col> <Col className={`mb-2 ${mainStyle.aboutText}`}> Part from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text boaaa.</Col> </Row>

                    </Col>
                    <Col md={6} lg={6} xl={4} className="text-left pt-5 " >

                        <Row>
                            <Col xs={4} className={`  text-right   ${mainStyle.label}`}>GitHub: </Col> <Col className={`mb-2 ${mainStyle.textLabel}`}>
                                <a style={{ fontStyle: "oblique" }} className={`  ${mainStyle.webLinks}`} rel="stylesheet" href="https://www.google.com/">
                                    <ImGithub className="mb-1 mr-2" />eriseld181 </a> <Info name="GitHub User Link" description={`click on the logo or username to go to www.github.com`} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} className={`  text-right   ${mainStyle.label}`}>LinkedIn:</Col> <Col className={`mb-2 ${mainStyle.textLabel}`}>
                                <a style={{ fontStyle: "oblique" }} className={`  ${mainStyle.webLinks}`} rel="stylesheet" href="https://www.google.com/">
                                    <SiLinkedin className="mb-1 mr-2" />eriseld181 </a><Info name="GitHub User Link" description={`Click on the logo or username to go to user personal LinkedIn`} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} className={`  text-right   ${mainStyle.label}`}>Portfolio:</Col> <Col className={`mb-2 ${mainStyle.textLabel}`}>
                                <a style={{ fontStyle: "oblique" }} className={`  ${mainStyle.webLinks}`} rel="stylesheet" href="https://www.google.com/">
                                    <FaLaptopCode className="mb-1 mr-2" />eriseld181 </a><Info name="Portfolio User Link" description={`Click on the logo or username to go to student portfolio`} />
                            </Col>
                        </Row>


                    </Col>

                </Row >
            </div>
        )
    }
}

