import React, { useState } from "react";
import { Modal, Button, Form, Row } from "react-bootstrap";
import mainStyle from "../Component.module.css";

export default function EditModalProject(props) {
  const url = process.env.REACT_APP_URL;
  const [projectTitle, setProjectTitle] = useState(props.projects.myTitle);
  const [projectDescription, setprojectDescription] = useState(
    props.projects.description
  );
  const [projectLink, setProjectLink] = useState(props.projects.link);
  const [myImage, setProjectImage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditProjectFetch = async () => {
    const response = await fetch(` ${url}/api/projects/${props.projects._id}`, {
      method: "PUT",
      body: JSON.stringify({
        myTitle: projectTitle,
        description: projectDescription,
        link: projectLink,
      }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const uploadImage = myImage;
      const image = new FormData();
      image.append("image", uploadImage);
      const uploadPhoto = await fetch(
        `${url}/api/projects/` + props.projects._id + "/uploadImage",
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
        console.log("New photo  is added to the database");
      } else {
        console.log("upload photo is not working");
      }
      props.projectsFetch();
    }
  };

  return (
    <div
      onKeyDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      onFocus={(e) => e.stopPropagation()}
      onMouseOver={(e) => e.stopPropagation()}
    >
      <Button
        style={{ width: "100%" }}
        onClick={handleShow}
        className={`${mainStyle.btnGradient}`}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Body className={`${mainStyle.cardDesignClean}`}>
          {" "}
          <Row className={`mt-2 mb-3 ml-1 ${mainStyle.mediumTitleBlue}`}>
            <h3 className={`${mainStyle.title}`}>Edit the project</h3>
          </Row>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change the title
              </Form.Label>
              <Form.Control
                type="name"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Enter A new title"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change repository link
              </Form.Label>
              <Form.Control
                type="name"
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
                placeholder="Edit the repository link"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change the description
              </Form.Label>
              <Form.Control
                value={projectDescription}
                onChange={(e) => setprojectDescription(e.target.value)}
                as="textarea"
                rows={3}
                placeholder="Enter a new description..."
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Replace the project preview(image)"
                onChange={(e) => setProjectImage(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className={`${mainStyle.cardDesignClean}`}>
          <Button className={`${mainStyle.btnGradient}`} onClick={handleClose}>
            Discard
          </Button>
          <Button
            className={`${mainStyle.btnGradient}`}
            onClick={() => {
              handleClose();
              EditProjectFetch();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
