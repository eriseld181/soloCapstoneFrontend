import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import mainStyle from "../Component.module.css";
export default function EditModalNotes(props) {
  const [noteTitle, setNoteTitle] = useState(props.note.myTitle);

  const [noteDescription, setNoteDescription] = useState(
    props.note.description
  );
  const [myImage, setNoteImage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditNotesFetch = async () => {
    const response = await fetch(
      "http://localhost:5000/api/notes/" + props.note._id,
      {
        method: "PUT",
        body: JSON.stringify({
          myTitle: noteTitle,
          description: noteDescription,
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
        "http://localhost:5000/api/notes/" + props.note._id + "/uploadImage",
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
      props.noteFetch();
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
              <Form.Label>Change notes Title.</Form.Label>
              <Form.Control
                type="name"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder="Enter A New Title"
              />
            </Form.Group>
            <Form.Label>Change the Description.</Form.Label>
            <Form.Control
              value={noteDescription}
              onChange={(e) => setNoteDescription(e.target.value)}
              as="textarea"
              rows={3}
              placeholder="Enter a new Description..."
            />

            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Add A new Photo"
                onChange={(e) => setNoteImage(e.target.files[0])}
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
              EditNotesFetch();
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
