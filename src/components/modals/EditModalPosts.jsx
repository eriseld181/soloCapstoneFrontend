import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import mainStyle from "../Component.module.css";

export default function EditModalPosts(props) {
  const url = process.env.REACT_APP_URLLOCAL;
  const [postTitle, setPostTitle] = useState(props.posts.myTitle);

  const [myImage, setPostImage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditPostFetch = async () => {
    const response = await fetch(` ${url}api/posts/${props.posts._id}`, {
      method: "PUT",
      body: JSON.stringify({
        myTitle: postTitle,
      }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const uploadImage = myImage;
      const image = new FormData();
      image.append("image", uploadImage);
      const uploadPhoto = await fetch(
        "http://localhost:5000/api/posts/" + props.posts._id + "/uploadImage",
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
      props.postsFetch();
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
              <Form.Label>Change the Description.</Form.Label>
              <Form.Control
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                as="textarea"
                rows={3}
                placeholder="Enter a new Description..."
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Add A new Photo"
                onChange={(e) => setPostImage(e.target.files[0])}
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
            Discard
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              EditPostFetch();
            }}
            style={{ backgroundColor: "blue" }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
