import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import TopServerReview from './TopServerReview'


export default class ReviewCard extends Component<ReviewCardProps, any> {
    render() {
        return (
            <Col xs={12} md={6} xl={4}>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <TopServerReview initialRating={this.props.review.global} />
                        </Card.Title>
                        <blockquote className="blockquote mb-0">
                            <p className="text-justify">{this.props.review.comment}</p>
                            <footer className="blockquote-footer text-right">{this.props.review.username}</footer>
                        </blockquote>
                        <Row className="text-center">
                            <Col xs={12} md={6}>
                                <p>Qualité</p>
                                <TopServerReview initialRating={this.props.review.quality} />
                            </Col>
                            <Col xs={12} md={6}>
                                <p>Staff</p>
                                <TopServerReview initialRating={this.props.review.staff} />
                            </Col>
                            <Col xs={12} md={6}>
                                <p>Ambiance</p>
                                <TopServerReview initialRating={this.props.review.ambient} />
                            </Col>
                            <Col xs={12} md={6}>
                                <p>Disponibilité</p>
                                <TopServerReview initialRating={this.props.review.uptime} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

type ReviewCardProps = {
    review: any
}