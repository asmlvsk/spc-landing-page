import React from 'react'
import styles from './Intro.module.css'
import background from '../../assets/Intro_bg.svg'

export const Intro = () => {
  return (
    <div className={styles.container}>
        <img className={styles.background} src={background} alt="Background" />

        <p className={styles.title}>
            Take advantage of the ONLY secured investment 
            opportunity in the cannabis industry 
            and earn up to <span className={styles.title_span}>10X returns</span>
        </p>
        
        <div className={styles.buttons}>
            <button className={styles.button}>INVESTOR DECK</button>
            <button className={styles.button}>INVEST NOW</button>
        </div>
    </div>
  )
}