import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/flatly/bootstrap.min.css";
import './App.css';
import { Container, Navbar, Nav, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import logo from './assets/moonside.png'
import Homepage from './pages/Homepage';
import discordLogo from './assets/Discord-Logo+Wordmark-White.svg';
import { IoMdPerson } from 'react-icons/io'
import { FaCheckCircle, FaRegQuestionCircle } from 'react-icons/fa'
import { MdReportProblem } from "react-icons/md";
import ReviewsPage from './pages/ReviewsPage';
import StreamsPage from './pages/StreamsPage';
import axios from 'axios';
import Footer from './components/Footer';
import ReglementStreamers from './pages/ReglementStreamers';

export default class App extends Component {
  static topServerToken = '8LN7K6XJEN';

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
      <Router basename="/moonside/">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} roundedCircle height="30px" width="30px" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
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
        <Container className="body-content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/reviews">
              <ReviewsPage />
            </Route>
            <Route exact path="/streams">
              <StreamsPage />
            </Route>
            <Route exact path="/streams/rules">
              <ReglementStreamers />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
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

