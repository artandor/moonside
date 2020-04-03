import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/flatly/bootstrap.min.css";
import './App.css';
import { Container } from 'react-bootstrap';
import Homepage from './pages/Homepage';
import ReviewsPage from './pages/ReviewsPage';
import StreamsPage from './pages/StreamsPage';
import Footer from './components/Footer';
import ReglementStreamers from './pages/ReglementStreamers';
import Menu from './components/Menu';
import JobsPage from './pages/JobsPage';

export default class App extends Component {
  static topServerToken = '8LN7K6XJEN';

  render() {
    return (
      <Router basename="/moonside/">
        <Menu />
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
            <Route exact path="/jobs">
              <JobsPage />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    )
  }
}

