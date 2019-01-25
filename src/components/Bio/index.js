import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default ({ image, title, content }) => {
    return (
        <div>
            { title }
            { ReactHtmlParser(content) }
        </div>
    )
}
