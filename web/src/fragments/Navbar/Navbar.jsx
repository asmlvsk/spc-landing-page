import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/President_Club_logo.svg'

export const Navbar = () => {
  return (
    <nav className={styles.fragment}>
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.logo_img} src={logo} alt="Logo" />
                </div>

                <div className={styles.navigation}>
                    <div className={styles.nav_item}>HOME</div>
                    <a href='#footer' className={styles.nav_item}>INVEST NOW</a>
                </div>
            </header>
        </div>
    </nav>
  )
}
