import React from 'react'
import styles from './SecurityListItem.module.css'

export const SecurityListItem = (props) => {
  return (
    <div className={styles.list_item}>
        <div className={styles.ellipse}></div>
        <div className={styles.list_item_text}>
            <div className={styles.list_item_title}>{props.title}</div>
            <div className={styles.list_item_description}>{props.description}</div>
        </div>
    </div>
  )
}
