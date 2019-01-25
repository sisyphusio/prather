import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import './styles.scss'

const Banner = ({ background_image, title, content }) => {
    return (
        <div className="container block" style={{ backgroundImage: `url(${background_image.url})`, minHeight: 500 }}>
            <div className="content">
                <h2>{ title }</h2>
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
