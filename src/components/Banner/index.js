import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import styles from './styles.scss'

const Banner = ({ background_image, title, content }) => {
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background_image.url})` }}>
            <h2>{ title }</h2>
            { ReactHtmlParser(content) }
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
