import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import mainStyle from "../Component.module.css";
export default function EditModal(props) {
  const [homeworkTitle, setHomeworkTitle] = useState(props.homework.myTitle);

  const [homeworkDescription, setHomeworkDescription] = useState(
    props.homework.description
  );
  const [myImage, setHomeworkImage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditHomeworkFetch = async () => {
    const response = await fetch(
      "http://localhost:5000/api/homeworks/" + props.homework._id,
      {
        method: "PUT",
        body: JSON.stringify({
          myTitle: homeworkTitle,
          description: homeworkDescription,
        }),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      const uploadImage = myImage;
      const image = new FormData();
      image.append("image", uploadImage);
      const uploadPhoto = await fetch(
        "http://localhost:5000/api/homeworks/" +
          props.homework._id +
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
      props.homeworkFetch();
    }
  };

  return (
    <div
      onKeyDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      onFocus={(e) => e.stopPropagation()}
      onMouseOver={(e) => e.stopPropagation()}
    >
      <Button style={{ width: "100%" }} onClick={handleShow}>
        Edit
      </Button>

      <Modal style={{ color: "black" }} show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Change Homework Title.</Form.Label>
              <Form.Control
                type="name"
                value={homeworkTitle}
                onChange={(e) => setHomeworkTitle(e.target.value)}
                placeholder="Enter A New Title"
              />
            </Form.Group>
            <Form.Label>Change the Description.</Form.Label>
            <Form.Control
              value={homeworkDescription}
              onChange={(e) => setHomeworkDescription(e.target.value)}
              as="textarea"
              rows={3}
              placeholder="Enter a new Description..."
            />

            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Add A new Photo"
                onChange={(e) => setHomeworkImage(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ backgroundColor: "blue" }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              EditHomeworkFetch();
            }}
            style={{ backgroundColor: "blue" }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
