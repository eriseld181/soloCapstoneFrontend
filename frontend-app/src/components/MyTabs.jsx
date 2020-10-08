import React from "react"
import { Tab, Tabs, Container, Button, Card } from "react-bootstrap"
import mainStyle from './Component.module.css'
export default function myTabs() {
    return (

        <Tabs variant="pills" transition={false} className={`justify-content-center`} defaultActiveKey="myPublications" id="uncontrolled-tab-example">
            <Tab className={`justify-content-center ${mainStyle.Tabs}`} eventKey="myPublications" title="Publications">
                <Container style={{ outline: "solid red 1px" }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>


                </Container>
            </Tab>
            <Tab className={`justify-content-center ${mainStyle.Tabs}`} eventKey="homeworks" title="Homeworks">
                <Container>This is the place for Homeworks</Container>
            </Tab>
            <Tab eventKey="notes" title="Notes">
                <Container>  This is the place for personal notes</Container>
            </Tab>
            <Tab eventKey="projects" title="Projects">
                <Container>   This is the place for personal Projects</Container>
            </Tab>

        </Tabs>
    )
}
