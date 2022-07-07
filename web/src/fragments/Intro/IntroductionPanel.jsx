import React from 'react'
import styles from './Intro.module.css'

export const IntroductionPanel = () => {
  return (
    <div className={styles.introduction}>
        <p className={styles.introduction_title}>Introducing Sophia’s President Club</p>
        <div className={styles.divider}></div>
        <p className={styles.introduction_underTitle}>
            SPC is a purpose 
            established Colorado LLC which provides the cannabis industry's 
            ONLY secured investment opportunity.
        </p>
    </div>
  )
}
