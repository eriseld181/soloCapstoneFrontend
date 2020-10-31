import React, { useState } from "react";
import { Button, Modal, Col, Form, Row } from "react-bootstrap";
// import { BsUpload } from "react-icons/bs";
import mainStyle from "../Component.module.css";
// import myInfo from "../InfoText/Info";

function AddNewNoteModal(props) {
  const [newNoteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [myImage, setImage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const AddNewPost = async () => {
    const response = await fetch("http://localhost:5000/api/notes/add", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        myTitle: newNoteTitle,
        description: noteDescription,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const data = await response.json();

    if (data) {
      // const uploadImage = myImage;
      const image = new FormData();
      image.append("image", myImage);
      const uploadPhoto = await fetch(
        "http://localhost:5000/api/notes/" + data._id + "/uploadImage",
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
    handleClose();
    props.noteFetch();
    setNoteTitle("");
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
                Add a Note...
              </Col>
            </Row>
          </Col>{" "}
        </Button>
      </Row>
      <Modal
        className={`${mainStyle.cardDesignClean}`}
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Body className={`${mainStyle.cardDesignClean}`}>
          {" "}
          <Row className={`mt-2 mb-3 ml-1 ${mainStyle.mediumTitleBlue}`}>
            <h5>Add a new note</h5>
          </Row>
          <Row>
            {" "}
            <Col xs={12}>
              {" "}
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Change Note Title.</Form.Label>
                  <Form.Control
                    type="name"
                    value={newNoteTitle}
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
                    label="Add A New Photo(Recomended size: 500x300px)"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Form.Group>
              </Form>
              {/* <Row className="justify-content-right ml-3">
                {" "}
                <Button onChange={(e) => setImage(e.target.files[0])}>
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
              </Row> */}
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
          <Button variant="primary" onClick={(handleClose, AddNewPost)}>
            Publish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewNoteModal;
