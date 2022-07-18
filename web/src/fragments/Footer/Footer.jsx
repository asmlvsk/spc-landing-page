import React, { useState } from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/President_Club_logo.svg'
import mailIcon from '../../assets/icons/Footer_mail.svg'
import phoneIcon from '../../assets/icons/Footer_phone.svg'
import monitorIcon from '../../assets/icons/Footer_monitor.svg'
import api from '../../lib/api'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css'

export const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const params = data;

    api.request.create(params)
      .then(() => {
        toast.success("Success!", {
          hideProgressBar: true
        })
      })
      .catch(() => {
        toast.error("Something goes wrong!", {
          hideProgressBar: true
        })
      })
      .finally(() => {
        reset({ name: '', email: '', accredited_investor: false })
      })
  }

  return (
    <div className={styles.fragment}>
        <ToastContainer />
        <div className={styles.container}>
            <div className={styles.subtitle}>
                <h3>PRINCIPAL INVESTMENT SECURED.</h3>
                <h3 style={{ color: '#fff' }}>EQUITY PARTICIPATION FOR FREE.</h3>
                </div>
                <div className={styles.contact_section}>
                    <div className={styles.contact_section_content}>
                        <div  className={styles.contact_section_title}>
                            Get Your FREE Investor Kit
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.actions}>
                            <input
                                placeholder='Your full name'
                                className={styles.contact_input}
                                name='name'
                                {...register('name', { pattern: /^[A-Za-z]+$/i, required: true})}
                            />
                            {errors?.name?.type === "pattern" ?
                                <p className={styles.error}>Alphabetical characters only</p> : errors?.name?.type === "required" ?
                                <p className={styles.error}>Field is required</p> : null}
                            <input
                                placeholder='Your email'
                                className={styles.contact_input}
                                name='email'
                                {...register('email', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true})}
                            />
                            {errors?.email?.type === "pattern" ? 
                            <p className={styles.error}>Email is invalid</p> : errors?.email?.type === "required" ?
                            <p className={styles.error}>Field is required</p> : null}
                            <label className={styles.checkbox_container}>
                                <input 
                                type="checkbox"
                                {...register('accredited_investor')}
                                className={styles.checkbox} />
                                <span class="checkmark" className={styles.checkbox_text} >I am an Accredited Investor</span>
                            </label>
                            <div className={styles.contact_buttons}>
                                <button className={styles.contact_button} type='submit'>GET YOUR KIT NOW</button>
                                <button className={styles.contact_button} type='submit'>INVEST NOW</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className={styles.end_section} id='footer'>
                    <div className={styles.end_section_content}>
                        <div className={styles.end_section_logo}>
                            <img className={styles.logo_img} src={logo} alt="Logo" />
                        </div>
                        <div className={styles.end_section_info}>
                            <div className={styles.end_section_item}>
                                <p>1 (800) 968 7071</p>
                                <img src={phoneIcon} alt="Phone" />
                            </div>
                            <div className={styles.end_section_item}>
                                <a className={styles.end_section_email} href = "mailto: info@SophiasPresidents.club">info@SophiasPresidents.club</a>
                                <img src={mailIcon} alt="Mail" />
                            </div>
                            <div className={styles.end_section_item}>
                                <p>www.SophiasPresidents.club</p>
                                <img src={monitorIcon} alt="Website" />
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    </div>
  )
}
