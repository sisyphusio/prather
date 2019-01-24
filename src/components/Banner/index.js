import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import './styles.scss'

const Banner = props => {
    const { background_image, image, content } = props

    return (
        <div className="container" style={{ backgroundImage: `url(${background_image.url})` }}>
            <div className="col">
                <img src={ image.sizes.medium || image.url } alt={image.alt || image.title }/>
            </div>
            <div className="col">
                { ReactHtmlParser(content) }
            </div>
        </div>
    )
}

Banner.propTypes = {
    background_image: PropTypes.shape({
        url: PropTypes.string,
    }),
    image: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
        alt: PropTypes.string,
    }),
    content: PropTypes.string.isRequired
}

export default Banner
