import React from 'react'
import styles from './EquityItem.module.css'

export const EquityItem = (props) => {
  return (
    <div className={styles.item}>
        <img className={styles.icon} src={props.icon} alt="Icon" />
        <div className={styles.title}>{props.title}</div>
    </div>
  )
}