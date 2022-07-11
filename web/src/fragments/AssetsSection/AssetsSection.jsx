import React from 'react'
import styles from './AssetsSection.module.css'
import facilityIcon from '../../assets/icons/10_facility.svg'
import productsIcon from '../../assets/icons/11_products_hand.svg'
import contractsIcon from '../../assets/icons/12_contracts.svg'
import leadersIcon from '../../assets/icons/13_leaders.svg'
import techsIcon from '../../assets/icons/14_techs.svg'

export const AssetsSection = () => {
  return (
    <div className={styles.fragment}>
        <div className={styles.container}>
            <div className={styles.title}>SGA has significant assets and is ready to go:</div>
                <div className={styles.items}>

                    <div className={styles.diamond}>
                        <div className={styles.diamond_item}>
                            <div className={styles.diamond_item_body}>
                                <img className={styles.icon} src={facilityIcon} alt="Facility" />
                            </div>
                        </div>
                        <div className={styles.diamond_text}>
                            <h4>100,000 sq.ft. federally</h4>
                            <p className={styles.bottom_diamond_sub_title}>licensed indoor facility.</p>
                        </div>
                    </div>

                    <div className={styles.diamond}>
                        <div className={styles.diamond_item}>
                            <div className={styles.diamond_item_body}>
                                <img className={styles.icon} src={productsIcon} alt="Products" />
                            </div>
                        </div>
                        <div className={styles.diamond_text}>
                            <h4>Products </h4>
                            <p className={styles.bottom_diamond_sub_title}>Customers Want</p>
                            <h4>Services </h4>
                            <p className={styles.bottom_diamond_sub_title}>Companies Need</p>
                        </div>
                    </div>

                    <div className={styles.diamond}>
                        <div className={styles.diamond_item}>
                            <div className={styles.diamond_item_body}>
                                <img className={styles.icon} src={contractsIcon} alt="Contracts" />
                            </div>
                        </div>
                        <div className={styles.diamond_text}>
                            <h4>3rd Party contracts in hand</h4>
                            <p className={styles.bottom_diamond_sub_title}>
                                for baked goods, chocolates, coffee & tea, 
                                as well as sugars & confectionaries.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom_items}>

                    <div className={styles.diamond_yellow}>
                        <div className={styles.bottom_diamond_item}>
                            <div className={styles.bottom_diamond_item_body}>
                                <img className={styles.icon} src={leadersIcon} alt="Leaders" />
                            </div>
                        </div>
                        <div className={styles.bottom_diamond_text}>
                            <h4>Experienced leaders</h4>
                            <p className={styles.bottom_diamond_sub_title}>with Apple, Cadbury, P&G, Mars and NASDAQ.</p>
                        </div>
                    </div>

                    <div className={styles.diamond_yellow}>
                        <div className={styles.bottom_diamond_item}>
                            <div className={styles.bottom_diamond_item_body}>
                                <img className={styles.icon} src={techsIcon} alt="Techs" />
                            </div>
                        </div>
                        <div className={styles.bottom_diamond_text}>
                            <h4>Licensed <br/>Technologies</h4>
                            <p className={styles.bottom_diamond_sub_title}>
                                Patent pending transdermal cream. Patented 
                                nano-emulsion 3x faster onset and 2x absorption.
                            </p>
                        </div>
                    </div>

            </div>
        </div>
    </div>
  )
}
