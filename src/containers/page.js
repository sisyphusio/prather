import { connect } from 'react-redux'
import mapAcfToReact from '../util/mapAcfToReact'

const Page = ({ acfContent }) => acfContent.map(mapAcfToReact)

const mapStateToProps = state => {
    const { wp: { content: { acfContent, pageContent } } } = state
    return { acfContent, pageContent }
}
    
export default connect(mapStateToProps)(Page)
