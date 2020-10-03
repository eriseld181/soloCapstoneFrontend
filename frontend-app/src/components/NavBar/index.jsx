import React from "react"
import { Nav, Navbar, Image } from "react-bootstrap"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
//className= {`fa fa-facebook ${styles.bg} "} keshtu fusim custom css ne kod
//style={{ width: "100px" }}
export default function NavBar() {
    return (
        <div>
            <>

                <Navbar className={` ${styles.bg} ${styles.text} justify-content-center `} variant="dark">
                    <Navbar.Brand href="#home"  ><Image src="../../e-tech-logo-main.png" className="App-logo"
                    /></Navbar.Brand>
                    <Nav >
                        <Nav.Link ><Link to="/" ><AiFillHome className={` ${styles.icons}`} />Home</Link></Nav.Link>

                        <Nav.Link ><Link to="/profile"><FaUser className={` ${styles.icons}`} />Profile</Link></Nav.Link>

                    </Nav>

                </Navbar>


            </>
        </div >
    )
}
