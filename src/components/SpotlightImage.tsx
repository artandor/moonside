import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export default class SpotlightImage extends Component<SpotlightImageProps, any> {
    render() {
        return (
            <div className="spotlight">
                <Row>
                    <Col xs={12} xl={6}  className="content">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.texte}</p>
                    </Col>
                    <Col xs={12} xl={6}>
                        <Image rounded fluid src={this.props.image} />
                    </Col>
                    {/* {this.props.imageRight ? this.textCol && this.imageCol : this.imageCol && this.textCol} */}
                </Row>
            </div>
        )
    }
}

type SpotlightImageProps = {
    imageRight: boolean,
    image: string,
    title: string,
    texte: string,
}
