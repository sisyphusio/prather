import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
