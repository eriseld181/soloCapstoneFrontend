import React, { useState } from "react";
import { Button, Modal, Col, Form, Row } from "react-bootstrap";
import { BsUpload } from "react-icons/bs";
import mainStyle from "../Component.module.css";

function AddNewPostModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row className="justify-content-center">
        <Button
          variant="white"
          className={`${mainStyle.cardDesignClean}`}
          style={{ width: "100%" }}
          onClick={handleShow}
        >
          {" "}
          <Col
            xs={12}
            className=" mt-3 mb-3"
            style={
              {
                //   border: "1px solid gray",
              }
            }
          >
            {" "}
            <Row className="justify-content-center mt-3">
              {" "}
              <Col
                xs={11}
                className="text-left"
                variant="light"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  padding: "10px",
                  fontSize: "17px",
                  borderRadius: "14px",
                }}
              >
                Add a new post...
              </Col>
            </Row>
            <Row className="mt-3  " style={{ marginLeft: "80%" }}>
              {" "}
              {/* <Col
                xs={9}
                className=" mr-auto mb-3"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  padding: "5px",
                  fontSize: "17px",
                  borderRadius: "14px",
                }}
              >
                Post
              </Col> */}
            </Row>
          </Col>{" "}
          {/* <Col xs={3} className="text-left">
            {" "}
            <Button
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "17px",
              }}
            >
              Post
            </Button>
          </Col>{" "} */}
        </Button>
      </Row>
      <Modal
        // className={`${mainStyle.cardDesignClean}`}
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Body className={`${mainStyle.cardDesignClean}`}>
          {" "}
          <Row className={`mt-2 mb-3 ml-1 ${mainStyle.mediumTitleBlue}`}>
            <h5>Write a new post</h5>
          </Row>
          <Row>
            {" "}
            <Col xs={12}>
              {" "}
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={2} />
                </Form.Group>
              </Form>
              <Row className="justify-content-right ml-3">
                {" "}
                <Button>
                  {" "}
                  <Col xs={12} className={`text-left ml-4 `}>
                    {" "}
                    <BsUpload
                      className={`mt-2 mb-2 ml-2 text-center ${mainStyle.mediumTitleBlue}`}
                    />{" "}
                  </Col>
                  <Col xs={12}>
                    {" "}
                    <p
                      className={` text-left ${mainStyle.smallTitleBlue}`}
                      style={{}}
                    >
                      {" "}
                      Upload a photo
                    </p>{" "}
                  </Col>{" "}
                </Button>
              </Row>
            </Col>{" "}
            <Col
              xs={3}
              className="mt-2"
              // style={{ outline: "1px solid red" }}
            >
              {" "}
              {/* <Button
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "17px",
                }}
              >
                Post
              </Button> */}
            </Col>{" "}
          </Row>
        </Modal.Body>
        <Modal.Footer className={`${mainStyle.cardDesignClean}`}>
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Publish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewPostModal;
