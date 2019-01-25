import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import Header from './components/Header'
import Page from './containers/page'
import { fetchPages } from './actions/wp'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPages())
  }
  render() {
    const { pageTitles } = this.props
    return (
      <div className="App">
        <Header routes={ pageTitles }/>
        <Switch>
          { pageTitles.map(title => <Route path={`/${title}`} component={Page}/>) }
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { wp } = state
  const { pages } = wp
  const pageTitles = pages.map(page => page.slug)
  return { pageTitles }
}


export default connect(mapStateToProps)(App);
