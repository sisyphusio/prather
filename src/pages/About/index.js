import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import { fetchPageContent } from '../../actions/wp'

class Home extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPageContent('about'))
    }

    render() {
        const { pageContent } = this.props
        return (
            <Fragment>
                <section>
                    { ReactHtmlParser(pageContent) }
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    const { wp } = state
    const { content } = wp
    const { acfContent, pageContent } = content
    return { acfContent, pageContent }
}

export default connect(mapStateToProps)(Home)
