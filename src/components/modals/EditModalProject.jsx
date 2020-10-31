import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import mainStyle from "../Component.module.css";

export default function EditModalProject(props) {
  const url = process.env.REACT_APP_URL;
  const [projectTitle, setProjectTitle] = useState(props.projects.myTitle);
  const [projectDescription, setprojectDescription] = useState(
    props.projects.description
  );
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
      }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const uploadImage = myImage;
      const image = new FormData();
      image.append("image", uploadImage);
      const uploadPhoto = await fetch(
        "http://localhost:5000/api/projects/" +
          props.projects._id +
          "/uploadImage",
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className={`${mainStyle.cardDesignClean}`}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Change Project Title.</Form.Label>
              <Form.Control
                type="name"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Enter A New Title"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Change the Project Description.</Form.Label>
              <Form.Control
                value={projectDescription}
                onChange={(e) => setprojectDescription(e.target.value)}
                as="textarea"
                rows={3}
                placeholder="Enter a new Description..."
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Add A new Photo"
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
