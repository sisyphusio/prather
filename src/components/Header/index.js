import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const menuItem = (route) => {
    return (
        <li className="menu__item" key={ `menu__item--${route}` }>
            <Link to={ route }>{ route }</Link>
        </li>
    )
}

const Header = ({ routes }) => {
    return (
        <header className={styles.header}>
            <div className={`${styles.container}`}>
                <nav className="navigation">
                    <ul className="menu">
                        { routes.map(route => menuItem(route)) }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
