import React, { Component } from 'react'
import Stream from '../components/Stream'
import { Col, Row } from 'react-bootstrap'

export default class StreamsPage extends Component {
    streamChannels: string[] = [
        'artandor',
        'jlaudok',
        'JLFranklin_',
    ]

    render() {
        return (
            <Row>
                {this.streamChannels.map((channel, index) => {
                    return (
                        <Col xs="6" className="my-2">
                            <div className="iframe-container">
                                <Stream channel={channel} />
                            </div>

                        </Col>
                    )
                })}
            </Row>

        )
    }
}
