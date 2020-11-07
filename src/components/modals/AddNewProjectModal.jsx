import React, { useState } from "react";
import { Button, Modal, Col, Form, Row } from "react-bootstrap";
// import { BsUpload } from "react-icons/bs";
import mainStyle from "../Component.module.css";
// import myInfo from "../InfoText/Info";

function AddNewProjectModal(props) {
  const [newProjectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [myImage, setImage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const AddNewPost = async () => {
    const response = await fetch("http://localhost:5000/api/projects/add", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        myTitle: newProjectTitle,
        description: projectDescription,
        link: projectLink,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const data = await response.json();
    if (data) {
      // const uploadImage = myImage;
      const image = new FormData();
      image.append("image", myImage);
      const uploadPhoto = await fetch(
        "http://localhost:5000/api/projects/" + data._id + "/uploadImage",
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
        console.log("data is added");
      } else {
        console.log("upload photo is not working");
      }
      props.projectfetch();
    }
    handleClose();
    props.projectfetch();
    setProjectTitle("");
  };

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
                Post a new Project...
              </Col>
            </Row>
          </Col>{" "}
        </Button>
      </Row>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Body className={`${mainStyle.cardDesignClean}`}>
          {" "}
          <Row className={`mt-2 mb-3 ml-1 ${mainStyle.mediumTitleBlue}`}>
            <h3 className={`${mainStyle.title}`}>Post a new project</h3>
          </Row>
          <Row>
            {" "}
            <Col xs={12}>
              {" "}
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label className={`${mainStyle.labelWhite}`}>
                    Project Title
                  </Form.Label>
                  <Form.Control
                    type="name"
                    value={newProjectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="Enter a new title"
                  />
                  <Form.Label className={`${mainStyle.labelWhite} mt-3`}>
                    Respository Link
                  </Form.Label>
                  <Form.Control
                    type="name"
                    value={projectLink}
                    onChange={(e) => setProjectLink(e.target.value)}
                    placeholder="Paste the link here..."
                  />
                </Form.Group>
                <Form.Label className={`${mainStyle.labelWhite}`}>
                  Project Description
                </Form.Label>
                <Form.Control
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  as="textarea"
                  rows={3}
                  placeholder="Enter a new description..."
                />

                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Replace the project preview(image)"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Form.Group>
              </Form>
            </Col>{" "}
            <Col
              xs={3}
              className="mt-2"
              // style={{ outline: "1px solid red" }}
            ></Col>{" "}
          </Row>
        </Modal.Body>
        <Modal.Footer className={`${mainStyle.cardDesignClean}`}>
          <Button className={`${mainStyle.btnGradient}`} onClick={handleClose}>
            Discard
          </Button>
          <Button
            className={`${mainStyle.btnGradient}`}
            onClick={(handleClose, AddNewPost)}
          >
            Publish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddNewProjectModal;
