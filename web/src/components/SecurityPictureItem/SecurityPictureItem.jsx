import React from 'react'
import styles from './SecurityPictureItem.module.css'

export const SecurityPictureItem = (props) => {
  return (
    <div className={styles.picture}>

        <div className={styles.title_bg}>
            <div className={styles.picture_title}>{props.title}</div>
        </div>
        <img
            ref={props.ref}
            onClick={props.open}
            src={props.src} 
            alt={props.title} 
            className={styles.image} />
    </div>
  )
}
