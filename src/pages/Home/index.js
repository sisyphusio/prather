import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import { fetchPageContent } from '../../actions/wp'
import mapAcfToReact from '../../util/mapAcfToReact'

class Home extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPageContent('home'))
    }

    render() {
        const { acfContent, pageContent } = this.props
        return (
            <Fragment>
                <section>
                    { ReactHtmlParser(pageContent) }
                </section>
                { acfContent.map(mapAcfToReact) }
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
