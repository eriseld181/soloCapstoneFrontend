import React, { Component} from 'react'
import {Navbar,NavDropdown, Button , Form, Nav,FormControl }from 'react-bootstrap'
import styles from "./Navbar.module.css";
export default class NavBarText extends Component {
    render() {
        return (
            <div>
              <Navbar  className={` ${styles.bg} ${styles.text}`}expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown bg="black" className={` ${styles.bg} ${styles.text}`} title="Tools" id="basic-nav-dropdown">
        <NavDropdown.Item className={` ${styles.bg} ${styles.text}`} href="#action/3.1">Projects</NavDropdown.Item>
        <NavDropdown.Item className={` ${styles.bg} ${styles.text}`} href="#action/3.2">Homeworks</NavDropdown.Item>
        <NavDropdown.Item className={` ${styles.bg} ${styles.text}`} href="#action/3.3">Notes</NavDropdown.Item>
       
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>  
            </div>
        )
    }
}
