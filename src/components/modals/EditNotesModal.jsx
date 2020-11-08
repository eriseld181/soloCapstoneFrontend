import React, { useState } from "react";
import { Modal, Button, Form, Row } from "react-bootstrap";
import mainStyle from "../Component.module.css";
export default function EditModalNotes(props) {
  const [noteTitle, setNoteTitle] = useState(props.note.myTitle);
  const url = process.env.REACT_APP_URL;
  const [noteDescription, setNoteDescription] = useState(
    props.note.description
  );
  // const [myImage, setNoteImage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditNotesFetch = async () => {
    const response = await fetch(`${url}/api/notes/${props.note._id}`, {
      method: "PUT",
      body: JSON.stringify({
        myTitle: noteTitle,
        description: noteDescription,
      }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // const uploadImage = myImage;
      //   const image = new FormData();
      //   image.append("image", uploadImage);
      //   const uploadPhoto = await fetch(
      //     "http://localhost:5000/api/notes/" + props.note._id + "/uploadImage",
      //     {
      //       method: "POST",
      //       body: image,
      //       credentials: "include",
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //       },
      //     }
      //   );
      //   if (uploadPhoto.ok) {
      //     console.log("data is added");
      //   } else {
      //     console.log("upload photo is not working");
      //   }
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
      <Button
        className={`${mainStyle.btnGradient}`}
        style={{ width: "100%" }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Body className={`${mainStyle.cardDesignClean}`}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Row className={`mt-2 mb-3 ml-1 ${mainStyle.mediumTitleBlue}`}>
                <h3 className={`${mainStyle.title}`}>Edit the note</h3>
              </Row>
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change the title
              </Form.Label>
              <Form.Control
                type="name"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder="Enter a new title"
              />
            </Form.Group>
            <Form.Label className={`${mainStyle.labelWhite}`}>
              Change the description
            </Form.Label>
            <Form.Group>
              <Form.Control
                value={noteDescription}
                onChange={(e) => setNoteDescription(e.target.value)}
                as="textarea"
                rows={3}
                placeholder="Enter a new description..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className={`${mainStyle.cardDesignClean}`}>
          <Button
            variant="secondary"
            onClick={handleClose}
            className={`${mainStyle.btnGradient}`}
          >
            Discard
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              EditNotesFetch();
            }}
            className={`${mainStyle.btnGradient}`}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
