import React from 'react'
import { EquityItem } from '../../components/EquityItem/EquityItem'
import { equityData } from '../../data/equity_page_data'
import styles from './Equity.module.css'

export const Equity = () => {
  return (
    <div className={styles.fragment}>
        <div className={styles.container}>
            <div className={styles.section_header}>
                <div className={styles.section_title}>The Equity</div>
                <div className={styles.section_sub_title}>Shares of Sophia’s Garden (Artisan) Inc. (SGA)</div>
                <div className={styles.section_description}>
                    SGA has REAL advantages, products customers want, the team, partners, 
                    contracts and one of the largest licensed indoor facilities in the world. 
                </div>
            </div>
            <div className={styles.background}>
                <div className={styles.section_body}>
                    {equityData.map((data, index) => (
                        <div key={index}>
                            <EquityItem title={data.title} icon={data.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}
