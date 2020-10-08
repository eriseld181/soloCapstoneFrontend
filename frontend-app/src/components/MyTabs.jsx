import React from "react"
import { Tab, Tabs, } from "react-bootstrap"
import mainStyle from './Component.module.css'
import DefaultComponent from "../components/DefaultComponent"


export default function myTabs() {
    return (

        <Tabs variant="pills" transition={false} className={`justify-content-center`} defaultActiveKey="myPublications" id="uncontrolled-tab-example">
            <Tab className={`justify-content-center ${mainStyle.Tabs}`} eventKey="myPublications" title="Publications">
                <DefaultComponent
                    img="./publication.png"
                    title="There is nothing to see now!"
                    text="All your Publications will be shown here. Add a new post..."
                />
            </Tab>
            <Tab className={`justify-content-center ${mainStyle.Tabs}`} eventKey="homeworks" title="Homeworks">
                <DefaultComponent
                    img="./homeworks.png"
                    title="There is nothing to see now!"
                    text="All your Homeworks will be shown here. Add a new post..."
                />
            </Tab>
            <Tab eventKey="notes" title="Notes">
                <DefaultComponent
                    img="./notes.png"
                    title="There is nothing to see now!"
                    text="All your Notes will be shown here. Add a new post..."
                />
            </Tab>
            <Tab eventKey="projects" title="Projects">
                <DefaultComponent
                    img="./projects.png"
                    title="There is nothing to see now!"
                    text="All your Publications will be shown here. Add a new post..."
                />
            </Tab>

        </Tabs>
    )
}
