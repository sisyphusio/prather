import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import mapAcfToReact from '../util/mapAcfToReact'
import { fetchPageContent } from '../actions/wp'

class Page extends Component {
    componentWillMount() {
        const { dispatch, currentPage } = this.props
        dispatch(fetchPageContent(currentPage))
    }

    componentDidUpdate(prevProps) {
        const { dispatch, currentPage } = this.props
        if (currentPage !== prevProps.currentPage)
            dispatch(fetchPageContent(currentPage))
    }
    render() {
        const { acfContent } = this.props
        return (
            <Fragment>
                { acfContent.map(mapAcfToReact) }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    const { wp: { content: { acfContent, pageContent }, currentPage } } = state
    return { acfContent, pageContent, currentPage }
}
    
export default connect(mapStateToProps)(Page)
