import React from 'react'
import { Container, Button, Card } from "react-bootstrap"
import mainStyle from '../Component.module.css'
export default function DefaultComponent(props) {
    return (
        <Container>
            <Card className={`${mainStyle.cardDesignClean} mt-5 mb-5 text-center`}>
                <Card.Img className={`${mainStyle.bg} mx-auto ${mainStyle.imageContent} `} variant="top" src={props.img} />
                <Card.Body className={`${mainStyle.bg} `}>
                    <Card.Title className={`${mainStyle.title} mt-3 `}>{props.title}</Card.Title>
                    <Card.Text className={`${mainStyle.textLabel} `}>
                        {props.text}
                    </Card.Text>
                    <Button className={`mt-3 `} variant="primary">Post Now</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
