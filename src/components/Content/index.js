import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from './styles.module.scss'

export default ({ content, background_color }) => {
    return (
        <div className={styles.container} style={{ backgroundColor: background_color }}>
            <div className={styles.content}>
                { ReactHtmlParser(content) }
            </div>
        </div>
    )
}
