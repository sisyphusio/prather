import React from 'react'
import ReactHtmlParser from 'react-html-parser'
// import { styles } from 'ansi-colors';
import styles from './styles.module.scss'

export default ({ image, title, content }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                { title }
                { ReactHtmlParser(content) }
            </div>
        </div>
    )
}
