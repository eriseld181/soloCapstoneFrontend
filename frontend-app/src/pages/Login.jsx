import React, { useState } from "react"
import { Container, Tabs, Tab, } from "react-bootstrap"
import LoginForm from "../components/login/LoginForm"
import RegisterForm from "../components/register/RegisterForm"
import mainStyle from '../components/Component.module.css'
export default function Login() {

    const [key, setKey] = useState('login');
    return (
        <>
            <Container >
                <Tabs variant="pills" style={{ border: "0px", padding: "10px " }}
                    className={`justify-content-center mt-5 pt-5 ${mainStyle.webLinks}`} defaultActiveKey="login" id="uncontrolled - tab - example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}>
                    <Tab className={`mx-auto `} eventKey="login" title="Login">
                        <LoginForm />
                    </Tab>
                    <Tab className={`mx-auto  `} eventKey="register" title="Register">
                        <RegisterForm setKey={setKey} />
                    </Tab>
                </Tabs>
            </Container>
        </ >
    )
}


