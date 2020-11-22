import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Button, Form, Row } from "react-bootstrap";
import mainStyle from "../Component.module.css";

export default function EditModalProject(props) {
  const url = process.env.REACT_APP_URL;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [headline, setHeadline] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [about, setAbout] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const userFetch = async () => {
    const response = await fetch(`${url}/api/users/me/`, {
      credentials: "include",
    });
    const fetchedUsers = await response.json();
    if (fetchedUsers) {
      setFirstname(fetchedUsers.firstname);
      setLastname(fetchedUsers.lastname);
      setHeadline(fetchedUsers.headline);
      setEmail(fetchedUsers.email);
      setCountry(fetchedUsers.country);
      setCity(fetchedUsers.city);
      setAbout(fetchedUsers.about);
      setGithub(fetchedUsers.github);
      setLinkedin(fetchedUsers.linkedin);
      setPortfolio(fetchedUsers.portfolio);
    }
  };

  const EditProjectFetch = async () => {
    const response = await fetch(` ${url}/api/users/${props.userId}`, {
      method: "PUT",
      body: JSON.stringify({
        firstname,
        lastname,
        headline,
        about,
        email,
        country,
        city,
        github,
        linkedin,
        portfolio,
      }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      props.userFetch();
    }
  };
  useEffect(() => {
    userFetch();
  }, []);
  return (
    <div
      onKeyDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      onFocus={(e) => e.stopPropagation()}
      onMouseOver={(e) => e.stopPropagation()}
    >
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={false}
        centered
      >
        <Modal.Body className={`${mainStyle.cardDesignClean}`}>
          {" "}
          <Row className={`mt-2 mb-3 ml-1 ${mainStyle.mediumTitleBlue}`}>
            <h3 className={`${mainStyle.title}`}>Edit your profile</h3>
          </Row>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change your first name
              </Form.Label>
              <Form.Control
                type="name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Enter A new title"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change your last name
              </Form.Label>
              <Form.Control
                type="name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Edit lastname"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change your email
              </Form.Label>
              <Form.Control
                type="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Edit email"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change your headline
              </Form.Label>
              <Form.Control
                type="name"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Edit your headline"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change about you
              </Form.Label>
              <Form.Control
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                as="textarea"
                rows={3}
                placeholder="Enter a new description..."
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change your github profile link
              </Form.Label>
              <Form.Control
                type="name"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="Edit your github"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change your LinkedIn profile link
              </Form.Label>
              <Form.Control
                type="name"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="Edit your linkedin"
              />{" "}
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label className={`${mainStyle.labelWhite}`}>
                Change your portfolio url
              </Form.Label>
              <Form.Control
                type="name"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                placeholder="Edit your portfolio"
              />{" "}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className={`${mainStyle.cardDesignClean}`}>
          <Button
            className={`${mainStyle.btnGradient}`}
            onClick={props.handleClose}
          >
            Discard
          </Button>
          <Button
            className={`${mainStyle.btnGradient}`}
            onClick={() => {
              props.handleClose();
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
