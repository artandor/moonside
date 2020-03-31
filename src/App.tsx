import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/flatly/bootstrap.min.css";
import './App.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import logo from './assets/moonside.png'
import Homepage from './pages/Homepage';
import discordLogo from './assets/Discord-Logo+Wordmark-White.svg';
import { IoMdPerson } from 'react-icons/io'
import ReviewsPage from './pages/ReviewsPage';
import StreamsPage from './pages/StreamsPage';
import axios from 'axios';
import Footer from './components/Footer';

export default class App extends Component {
  topServerToken = '8LN7K6XJEN'

  constructor(props: any) {
    super(props);

    this.getServerInfos = this.getServerInfos.bind(this);
  }

  state = {
    serverSlots: null,
    serverInfos: {slots:0, name:'', online: 0},
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
            <Navbar.Text><IoMdPerson /> {this.state.serverInfos.online} en ligne / {this.state.serverInfos.slots} places</Navbar.Text>
            <Nav.Link href="https://discord.gg/hJXTne" target="_blank">
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
          </Switch>
        </Container>
        <Footer />
      </Router>
    )
  }

  getServerInfos() {
    axios.get('https://api.top-serveurs.net/v1/servers/' + this.topServerToken)
      .then((result: any) => {
        console.log(result.data.server)
        this.setState({ serverInfos: result.data.server })
      })
      .catch(() => {
        console.log("error");
      });
  }
}

