import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const menuItem = (route, selectedPage) => {
    const { slug, title } = route
    return (
        <li
            className={`${ title.toLowerCase().replace(' ', '-') === selectedPage ? `${styles.selected}` : '' }`}
            key={ `menu__item--${slug}` }>
            <Link to={ slug }>{ title }</Link>
        </li>
    )
}

const Header = ({ routes, selectedPage }) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <nav>
                    <ul className={styles.menu}>
                        { routes.map(route => menuItem(route, selectedPage)) }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
