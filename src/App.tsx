import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import './App.css';
import logo from './assets/moonside.png'
import Homepage from './pages/Homepage';
import discordLogo from './assets/Discord-Logo+Wordmark-Black.svg';

export default class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand as={Link} to="/">
                <Image src={logo} roundedCircle height="30px" width="30px" />
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="https://discord.gg/hJXTne" target="_blank">
                  <Image src={discordLogo} height="30px" width="auto"/>
                </Nav.Link>
              </Nav>
            </Navbar>
          </Container >
        </header>
        <Container>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Container>
      </Router>
    )
  }
}

