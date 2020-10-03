import React from "react"
import { Card, Form, Button } from "react-bootstrap"
import styles from "./Login.module.css"
export default function LoginForm() {
    return (
        <div>
            <Card className={`${styles.bg}`} >
                <Card.Img className={`mx-auto mt-5 ${styles.bg}`} variant="top" style={{ width: "400px" }} src="../../e-tech-logo-main.png" />
                <Card.Body className={`mx-auto ${styles.bg}`}>
                    <Card.Title className={`mb-5 ${styles.bg}`}>Please Login to Continue!
                                </Card.Title>
                </Card.Body >
                <Form className={`mx-auto mb-5 `}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
        </div>
    )
}
