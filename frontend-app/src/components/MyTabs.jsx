import React from "react"
import { Tab, Tabs, Container } from "react-bootstrap"
export default function myTabs() {
    return (
        <Tabs className="justify-content-center" defaultActiveKey="myPublications" id="uncontrolled-tab-example">
            <Tab eventKey="myPublications" title="Publications">
                <Container>this is the place for all publications</Container>
            </Tab>
            <Tab eventKey="homeworks" title="Homeworks">
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
