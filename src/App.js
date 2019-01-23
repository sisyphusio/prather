import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import Home from './containers/Home';

import { fetchPosts, fetchPages } from './actions/wp'

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts())
    dispatch(fetchPages())
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
