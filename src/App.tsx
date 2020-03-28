import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/flatly/bootstrap.min.css";
import './App.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import logo from './assets/moonside.png'
import Homepage from './pages/Homepage';
import discordLogo from './assets/Discord-Logo+Wordmark-White.svg';
import ReviewsPage from './pages/ReviewsPage';
import StreamsPage from './pages/StreamsPage';

export default class App extends Component {
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
      </Router>
    )
  }
}

