import React, { useState } from "react";
import { Modal, Button, Form, Row } from "react-bootstrap";
import mainStyle from "../Component.module.css";

export default function EditModalPosts(props) {
  const url = process.env.REACT_APP_URL;
  const [postTitle, setPostTitle] = useState(props.posts.myTitle);

  const [myImage, setPostImage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditPostFetch = async () => {
    const response = await fetch(` ${url}/api/posts/${props.posts._id}`, {
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
            <h3 className={`${mainStyle.title}`}>Edit the post</h3>
          </Row>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change the text.
              </Form.Label>
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
                id="exampleFormControlFile"
                label="Add A new Photo"
                onChange={(e) => setPostImage(e.target.files[0])}
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
              EditPostFetch();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
