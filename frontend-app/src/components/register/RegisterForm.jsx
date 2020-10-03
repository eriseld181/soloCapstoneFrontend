import React from "react"
import { Card, Form, Button, Col, Container } from "react-bootstrap"
import styles from "./Register.module.css"
import States from "./countries.json"
export default function RegisterForm() {
    return (
        <div>
            <Card className={`${styles.bg}`} >
                <Card.Img className={`mx-auto mt-5 ${styles.bg}`} variant="top" style={{ width: "400px" }} src="../../e-tech-logo-main.png" />
                <Card.Body className={`mx-auto ${styles.bg}`}>
                    <Card.Title className={`mb-5 ${styles.bg}`}>Please Register to Continue!
                                </Card.Title></Card.Body >
                <Container >
                    <Form className={`mx-auto  mb-5`}>
                        <Form.Row >
                            <Form.Group className={`mx-auto ${styles.bg}`} as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="firstname" placeholder="Enter your first name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" className={`mx-auto ${styles.bg}`}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="lastname" placeholder="Enter your last name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row >
                            <Form.Group className={`mx-auto ${styles.bg}`} as={Col} controlId="formGridLastName">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" className={`mx-auto ${styles.bg}`}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    {States.map(state => {
                                        return (<option>{state.name}</option>)
                                    })}

                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </Container>
            </Card>
        </div>
    )
}
