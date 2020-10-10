import React from 'react'
import MainNavBar from '../components/NavBar/MainNavBar'
import { Jumbotron, Button } from 'react-bootstrap'
import mainStyles from '../components/Component.module.css'
import { Link } from 'react-router-dom'
export default function MainPage() {
    return (
        <div>
            <MainNavBar style={{ marginTop: "0px", position: "fixed", top: "0", width: "100%" }} />
            <Jumbotron className={`${mainStyles.jumbotron} text-center `}  >
                <h1 style={{ backgroundColor: "black", width: "30%" }}>E-Tech</h1>
                <p style={{ backgroundColor: "black" }}>
                    All your school tools in one platform.
  </p>
                <p >
                    <Button variant="primary"> <Link to="/login">Log in </Link></Button>
                </p>

            </Jumbotron>
        </div>
    )
}
