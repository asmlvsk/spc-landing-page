import React from 'react'
import styles from './Profits.module.css'
import profits_obj_left from '../../assets/Profits_left_obj.svg'
import profits_obj_right from '../../assets/Profits_right_obj.svg'
import profits_obj_center from '../../assets/Profits_center_obj.png'
import gardens_logo from '../../assets/Sophias_Garden_logo.svg'

export const Profits = () => {
  return (
    <div className={styles.fragment}>
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.main}>
                    <h4 className={styles.main_title}>Participating Members of Sophia’s Presidents Club will receive both Secured Debt and Equity.</h4>
                    <h2 className={styles.main_under_title}>HERE’S HOW</h2>
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.background_container}>

                    <div className={styles.top_side}>
                        <div className={styles.top_side_body}>
                            <img className={styles.top_left_obj} src={profits_obj_left} alt="Background" />
                            <h4 className={styles.top_left_title}>Debt $3,500,000</h4>
                            <p className={styles.top_left_text}>2801100 will provide a secured, 
                                unincumbered First Mortgage of $3.5M in favor of SPC, bearing 6% interest annually.</p>
                        </div>
                        <div className={styles.top_right_side_body}>
                            <img className={styles.top_right_obj} src={profits_obj_right} alt="Background" />
                            <h4 className={styles.top_right_title}>Equity</h4>
                            <p className={styles.top_right_text}>
                                <span className={styles.top_right_span}>2,975,000 Common shares </span>
                                Sophia’s Garden (Artisan) Inc. will provide these share to SPC.
                            </p>
                        </div>
                    </div>

                    <div className={styles.center_side}>
                        <img className={styles.center_obj} src={profits_obj_center} alt="Background" />
                        <h4 className={styles.center_title}>Limited Availability</h4>
                        <p className={styles.center_text}>
                            Only 35 Units
                        </p>
                    </div>

                    <div className={styles.bottom_side}>
                        <div className={styles.bottom_side_body}>
                            <img className={styles.bottom_left_obj} src={profits_obj_left} alt="Background" />
                            <h4 className={styles.bottom_left_title}>2801100 Ontario Inc.</h4>
                            <p className={styles.bottom_left_text}>
                                Property manager & purchase option holder of building located at 600 Montreal St.
                            </p>
                        </div>
                        <div className={styles.bottom_right_side_body}>
                            <img className={styles.bottom_right_obj} src={profits_obj_right} alt="Background" />
                            <img className={styles.bottom_right_title} src={gardens_logo} alt="Background" />
                            <p className={styles.bottom_right_text}>
                                Federally Licensed Cannabis Producer. Tenant at 600 Montreal St.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
