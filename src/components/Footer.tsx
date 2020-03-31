import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <Container id="footer" className="bg-primary navbar-dark">
                <Row>
                    <Col className="copyright text-left">© MoonSide RP. All rights reserved.</Col>
                    <Col className="text-right">Développé par <a href="https://twitch.tv/artandor" target="_blank" rel="noopener noreferrer">Artandor</a></Col>
                </Row>
            </Container >
        )
    }
}
