import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import Header from './components/Header'
import Page from './containers/page'
import { fetchPages, fetchPageContent } from './actions/wp'

class App extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPages())
        this.props.dispatch(fetchPageContent(this.props.selectedPage))
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedPage !== prevProps.selectedPage)
            this.props.dispatch(fetchPageContent(this.props.selectedPage))
    }

    render() {
        const { pageTitles, selectedPage } = this.props
        return (
        <div className="App">
            <Header routes={ pageTitles } selectedPage={ selectedPage }/>
            <Switch>
                { pageTitles.map(title => 
                    <Route
                        path={`/${title}`}
                        render={(props) => <Page {...props} title={title} />}
                    />
                )}
            </Switch>
        </div>
        );
    }
}

const mapStateToProps = state => {
    const { wp, router } = state
    const { pages } = wp
    const pageTitles = pages
        .sort((a, b) => a.menu_order - b.menu_order)
        .map(page => page.slug)

    const selectedPage = router.location.pathname.split('/')[1] || 'home'

    return { pageTitles, selectedPage }
}


export default connect(mapStateToProps)(App);
