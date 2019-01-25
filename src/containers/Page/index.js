import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import mapAcfToReact from '../../util/mapAcfToReact'
import { fetchPageContent } from '../../actions/wp' 

class Page extends Component {
    componentWillMount() {
        const { dispatch, title } = this.props
        dispatch(fetchPageContent(title))
    }

    componentDidUpdate(prevProps) {
        const { dispatch, title } = this.props
        if (title !== prevProps.title)
            dispatch(fetchPageContent(title))
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
    const { wp: { content: { acfContent, pageContent } } } = state
    return { acfContent, pageContent }
}
    
export default connect(mapStateToProps)(Page)
