import React, { useState } from "react";
import { Modal, Button, Form, Row } from "react-bootstrap";
import mainStyle from "../Component.module.css";
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
      <Button
        className={`${mainStyle.btnGradient}`}
        style={{ width: "100%" }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Body className={`${mainStyle.cardDesignClean}`}>
          <Row className={`mt-2 mb-3 ml-1 ${mainStyle.mediumTitleBlue}`}>
            <h3 className={`${mainStyle.title}`}>Edit the homework</h3>
          </Row>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change the title
              </Form.Label>
              <Form.Control
                type="name"
                value={homeworkTitle}
                onChange={(e) => setHomeworkTitle(e.target.value)}
                placeholder="Enter A New Title"
              />
            </Form.Group>
            <Form.Label className={`${mainStyle.labelWhite}`}>
              Change the description
            </Form.Label>
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

        <Modal.Footer className={`${mainStyle.cardDesignClean}`}>
          <Button
            className={`${mainStyle.btnGradient}`}
            onClick={handleClose}
            style={{ backgroundColor: "blue" }}
          >
            Discard
          </Button>
          <Button
            className={`${mainStyle.btnGradient}`}
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
