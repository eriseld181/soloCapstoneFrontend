import React, { useState, useEffect, Component } from "react"
import { withRouter } from 'react-router-dom'

import { Card, Form, Button, Alert } from "react-bootstrap"
import Info from '../InfoText/Info'
import styles from "./Login.module.css"

function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [link, setLink] = useState(true)


    const postimi = async (e) => {

        const result = await fetch("http://localhost:5000/api/users/login", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            credentials: "include",
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        if (result.ok) {
            setLink(link)
            props.history.push("/")

        } else {
            setLink(!link)
        }
    }
    return (

        <div>
            <Card className={`${styles.bg}`} >
                <Card.Img className={`mx-auto mt-5 ${styles.bg}`} variant="top" style={{ width: "400px" }} src="../../e-tech-logo-main.png" />
                <Card.Body className={`mx-auto ${styles.bg}`}>
                    <Card.Title className={`mb-5 ${styles.bg}`}>Please Login to Continue!
                                </Card.Title>
                </Card.Body >
                <Form style={{ width: "40%" }} className={`mx-auto mb-5 `}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={`${styles.labels}`}>Email address
                        <Info
                                name="Email"
                                description="Please enter your email, for example: john@gmail.com" /></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => { setEmail(e.target.value) }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={`${styles.labels}`}>Password
                        <Info
                                name="Password"
                                description="Please enter your password, it should have one letter uppercase(A) at least one number(1)." /></Form.Label>

                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => { setPassword(e.target.value) }} />
                    </Form.Group>
                    {link ?
                        <Button variant="primary" className="mt-2" onClick={() => postimi()}>Submit</Button>
                        :
                        <>
                            <Alert variant="danger">Please Check Your Login Details</Alert>
                            <Button variant="primary" className="mt-2" type="submit" onClick={() => postimi()}>Submit</Button>  </>
                    }
                </Form>
            </Card>
        </div>
    )
}
export default withRouter(LoginForm);