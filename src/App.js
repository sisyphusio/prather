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
        const { pageData, currentPage } = this.props
        return (
            <div className="App">
                <Header routes={ pageData } selectedPage={ currentPage }/>
                <Switch>
                    { pageData.map(({ title, slug }) =>
                        <Route path={`/${slug}`} component={Page} />
                    )}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { wp } = state
    const { pages, currentPage } = wp
    const pageData = pages
        .sort((a, b) => a.menu_order - b.menu_order)
        .map(page => ({
            title: page.title.rendered,
            slug: page.slug
        }))
        .map(page => page.slug === 'home' ? { ...page, slug: '' } : page)

    return { pageData, currentPage }
}


export default connect(mapStateToProps)(App);
