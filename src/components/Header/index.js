import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const menuItem = (route, selectedPage) => {
    return (
        <li
            className={`${ route === selectedPage ? `${styles.selected}` : '' }`}
            key={ `menu__item--${route}` }>
            <Link to={ route }>{ route }</Link>
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
