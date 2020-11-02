import React from "react";

import FeatureComponent from "../components/FeatureComponent";
import { Container, Row, Col } from "react-bootstrap";
import mainStyles from "../components/Component.module.css";
import JumbotronComponent from "../components/Jumbotron/Jumbotron";
import { Link } from "react-router-dom";
import myImg from "./aboutPhotoLandingPage.png";
import Footer from "../components/Footer";
export default function MainPage() {
  return (
    <div>
      <JumbotronComponent
        title="E-Tech"
        subtitle="All your school tools in one platform."
        buttonText="Register"
      />
      <Container className={`mt-5 mb-5`}>
        <Row>
          <Col sm={12} md={6} id="about" className="text-left pr-5 pb-4 ">
            <h1 className={`${mainStyles.title} mb-5`}>What is E-Tech?</h1>
            <p
              className={`${mainStyles.textLabel} ${mainStyles.textJustify} mb-3 mt-3`}
            >
              E-Tech was founded in August 15 2020. Company purpose is to
              provide high quality services for every IT course online.We want
              to help students and tutors to work together in one environment
              will all the necessary tools to make their process comfortable and
              effective...
            </p>
            <div className="text-center pt-3 mb-4">
              <Link
                to="/contact"
                className={`mt-2 pb-2 pt-2 pl-4 pr-4  ${mainStyles.btnGradient} ${mainStyles.textLabel} `}
              >
                Learn more
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img
              style={{ fill: "white" }}
              src={myImg}
              className={`{${mainStyles.lpImage} `}
              width="100%"
              height="auto"
              alt=""
            />
          </Col>
        </Row>

        <Row>
          <Col></Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <h1
            className={`${mainStyles.title}  mb-4`}
            style={{ color: "white" }}
          >
            E-Tech Features
          </h1>{" "}
        </Row>
        <Row className="text-center ">
          <Col md={12} lg={4}>
            <FeatureComponent
              img="./publication.png"
              title="All your Publications"
              text=" Who said that learning is only hard working and no fun? Well, we have thought 
              even for that. Share your memes, thoughts, funny videos in your publication sesson...
              "
            />
          </Col>

          <Col md={12} lg={4}>
            <FeatureComponent
              img="./homeworks.png"
              title="Track your Homeworks"
              text="All your homeworks will be avaible in one place. Imagine to have them in
              one single page, well organized and ready to be solved... "
            />
          </Col>
          <Col md={12} lg={4}>
            <FeatureComponent
              img="./notes.png"
              title="Write your own notes or tasks."
              text="Are you tired of papers anywhere and some of them missing?
              We have organised your notes in your profile, you can add new one, edit or delete it. 
              No more with papers and pens..."
            />
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col md={12} lg={4}>
            <FeatureComponent
              img="./projects.png"
              title="Publish your projects"
              text=" Students and tutors will share the finished projects in the project tool. 
              Its easier for the tutor or students to find projects in one place. Tutor can see student project and the other way around."
            />
          </Col>

          <Col md={12} lg={4}>
            <FeatureComponent
              img="./chat.png"
              title="Chat with tutors or students"
              text="All users, students and tutors will have a brand new tool to comunicate together.
              They can chat with each other privately or they will have the opportunity to chat on the 
              general room.
              This feature is still on progress, it will be available soon..."
            />
          </Col>
          <Col md={12} lg={4}>
            <FeatureComponent
              img="./books.png"
              title="Upload your e-books"
              text="Tutor can upload new books in different formats and can share with others.
              E-Tech will provide user friendly page with different designs to read the book, for 
              example: Dark background, text in white color...

               This feature is still on progress, it will be available soon..."
            />
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Row></Row>
          {/* <Row>
            <Link
              to="/login"
              className={`mt-2 p-2  ${mainStyles.btnGradient} `}
            >
              Log in
            </Link>
          </Row> */}
        </Row>

        <Row id="contact">
          <h1 className={`${mainStyles.title} mx-auto mb-5`}>
            We Would Love To Hear From You
          </h1>
          <p className={`${mainStyles.textLabel} mb-3 mt-3 `}>
            Whether you have a question about features, pricing, how to apply
            for a job, or anything else, E-Tech team is ready to answer all your
            questions. Contact us now!
          </p>
          <div className="text-center mx-auto pt-3 mb-4">
            <Link
              to="/contact"
              className={`mt-2 pb-2 pt-2 pl-4 pr-4 mx-auto  ${mainStyles.btnGradient} 
              ${mainStyles.textLabel} `}
            >
              Contact us
            </Link>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
