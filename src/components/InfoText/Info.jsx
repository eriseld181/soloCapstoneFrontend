import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import styles from './info.module.css'
import { BsFillInfoCircleFill } from 'react-icons/bs';
export default function InfoText(props) {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3" className={`${styles.titleInfo}`}>{props.name}</Popover.Title>
            <Popover.Content className={`${styles.bgWhite}`}>
                {props.description}
            </Popover.Content>
        </Popover>
    );

    const Example = () => (
        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
            <BsFillInfoCircleFill style={{ margin: "0 0 2px 4px ", color: " white" }} />
        </OverlayTrigger>
    );
    return (
        <>
            <Example />
        </>
    )
}
