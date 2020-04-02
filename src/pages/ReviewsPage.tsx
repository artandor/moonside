import React, { Component } from 'react'
import axios from 'axios'
import PlayerVoteRanking from '../components/PlayerVoteRanking'
import App from '../App';
import { Row, Col } from 'react-bootstrap';
import ReviewCard from '../components/ReviewCard';

export default class ReviewsPage extends Component {
    state = {
        reviews: []
    }

    constructor(props: any) {
        super(props);

        this.getReviewsTopServer = this.getReviewsTopServer.bind(this);
    }

    componentDidMount() {
        this.getReviewsTopServer()
    }
    render() {
        return (
            <div>
                <div className="pt-3">
                    <h2>Nos meilleurs voteurs</h2>
                    <p>Pour rappel, voter rapporte de l'argent en jeu, utilisez donc votre nom RP pour voter sur
                        <a href="https://top-serveurs.net/gta/moonside-rp" target="_blank" rel="noopener noreferrer"> TopServeurs</a></p>
                    <PlayerVoteRanking />
                </div>
                <div className="mt-3 pb-3">
                    <h2>Les avis sur le serveur</h2>
                    <Row>
                        {this.state.reviews.length <= 0 ? (
                            <Col>
                                <p>Aucun avis n'a été publié pour le moment.</p>
                            </Col>
                        ) : this.state.reviews.map((review: any) => {
                            return <ReviewCard review={review} />
                        })}
                    </Row>
                </div>
            </div>
        )
    }

    getReviewsTopServer() {
        axios.get('https://api.top-serveurs.net/v1/servers/' + App.topServerToken + '/advices')
            .then((result: any) => {
                this.setState({ reviews: result.data.advices })
            })
            .catch(() => {
                console.error("Couldn't retrieve data from TopServers.");
            });    
    }
}
