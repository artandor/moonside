import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { FaMedal } from 'react-icons/fa'
import axios from 'axios'
import App from '../App'

export default class PlayerVoteRanking extends Component {
    state = {
        playerRank: []
    }

    constructor(props: any) {
        super(props);

        this.getPlayerVoteRanking = this.getPlayerVoteRanking.bind(this);
    }

    componentDidMount() {
        this.getPlayerVoteRanking();
        setInterval(this.getPlayerVoteRanking, 60000);
    }
    render() {
        return (
            <div className="py-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Nombre de votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.playerRank.slice(0, 5).map((player: any, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index === 0 ? <FaMedal color="gold" />
                                        : index === 1 ? <FaMedal color="silver" />
                                            : index === 2 ? <FaMedal color="#cd7f32" />
                                                : index + 1}</td>
                                    <td className="text-capitalize">{player.playername}</td>
                                    <td>{player.votes}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }

    getPlayerVoteRanking() {
        axios.get('https://api.top-serveurs.net/v1/servers/' + App.topServerToken + '/players-ranking').then((result) => {
            this.setState({ playerRank: result.data.players })
        })
    }
}
