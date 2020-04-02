import React, { Component } from 'react'
import Stream from '../components/Stream'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class StreamsPage extends Component {
    streamChannels: string[] = [
        'artandor',
    ]

    render() {
        return (
            <div>
                <h2>Nos streamers et créateurs de contenus</h2>
                <div className="text-small">
                    <p>Dans le but de soutenir notre communauté et celle des streamers du serveur, vous trouverez ici tous les streamers ayant demandé à être mis en valeur.</p>
                    <p><b>@Streamers</b>, vous trouverez les conditions sur <Link to="/streams/rules">cette page</Link>.</p>
                    <p>Des cache map ont été crée pour vous et sont en téléchargement libre <a href="./cachemapmoonside.zip" download>ici</a>.</p>
                </div>
                <Row>
                    {this.streamChannels.map((channel, index) => {
                        return (
                            <Col xs={12} md={6} className="my-2">
                                <div className="iframe-container">
                                    <Stream channel={channel} key={channel} />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}
