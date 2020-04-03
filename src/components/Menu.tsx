import React, { Component } from 'react'
import discordLogo from '../assets/Discord-Logo+Wordmark-White.svg';
import logo from '../assets/moonside.png'
import { IoMdPerson } from 'react-icons/io'
import { FaCheckCircle, FaRegQuestionCircle } from 'react-icons/fa'
import { MdReportProblem } from "react-icons/md";
import { Navbar, Nav, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';
import App from '../App';

export default class Menu extends Component {
    constructor(props: any) {
        super(props);

        this.getServerInfos = this.getServerInfos.bind(this);
    }

    state = {
        serverSlots: null,
        serverInfos: { slots: 0, name: '', online: 0, players: [] },
    }

    componentDidMount() {
        this.getServerInfos();
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    <Image src={logo} roundedCircle height="30px" width="30px" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                    <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
                    <Nav.Link as={Link} to="/reviews">Avis</Nav.Link>
                    <Nav.Link as={Link} to="/streams">Streams</Nav.Link>
                </Nav>
                <Nav>
                    <Navbar.Text className="server-status">
                        {this.state.serverInfos.online === 1 ? (<><FaCheckCircle color="green" /> Online</>)
                            : (
                                <><MdReportProblem color="red" /> Offline</>
                            )
                        }
                        <OverlayTrigger
                            placement="bottom-end"
                            overlay={
                                <Tooltip id="server-status-help">
                                    Le status du serveur est mis à jour toutes les 30 minutes. Rendez vous sur Discord pour plus de précisions.
                </Tooltip>
                            }
                        >
                            <sup> <FaRegQuestionCircle /></sup>
                        </OverlayTrigger>
                    </Navbar.Text>
                </Nav>
                <Nav className="ml-auto">
                    <Navbar.Text>{this.state.serverInfos.players ? (<span><IoMdPerson /> {this.state.serverInfos.players?.length} en ligne / </span>) : null} {this.state.serverInfos.slots} places</Navbar.Text>
                    <Nav.Link href="https://discord.gg/6PCVYcF" target="_blank">
                        <Image src={discordLogo} height="30px" width="auto" />
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }

    getServerInfos() {
        axios.get('https://api.top-serveurs.net/v1/servers/' + App.topServerToken)
            .then((result: any) => {
                this.setState({ serverInfos: result.data.server })
            })
            .catch(() => {
                console.error("Couldn't retrieve data from TopServers.");
            });
    }
}
