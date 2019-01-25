import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchPageContent } from '../actions/wp'
import mapAcfToReact from '../util/mapAcfToReact'

class C extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPageContent(this.props.name))
    }

    componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name)
            this.props.dispatch(fetchPageContent(this.props.name))
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
    const { wp, router } = state
    const { content } = wp
    const { acfContent, pageContent } = content
    const name = router.location.pathname.split('/')[1] || 'home'
    return { acfContent, pageContent, name }
}
    
export default connect(mapStateToProps)(C)
