import React, { useState } from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/President_Club_logo.svg'
import mailIcon from '../../assets/icons/Footer_mail.svg'
import phoneIcon from '../../assets/icons/Footer_phone.svg'
import monitorIcon from '../../assets/icons/Footer_monitor.svg'
import api from '../../lib/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isInvestor, setIsInvestor] = useState(false)

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onInvestorChange = (e) => {
    setIsInvestor(e.target.checked)
  }

  const onSubmit = () => {
    const params = { name: name, email: email, accredited_investor: isInvestor }

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
        setEmail('')
        setName('')
        setIsInvestor(false)
      })
  }

  return (
    <div className={styles.container}>
        <ToastContainer />
        <div className={styles.subtitle}>
            <h3>PRINCIPAL INVESTMENT SECURED.</h3>
            <h3 style={{ color: '#fff' }}>EQUITY PARTICIPATION FOR FREE.</h3>
        </div>
        <div className={styles.contact_section}>
            <div className={styles.contact_section_content}>
                <div  className={styles.contact_section_title}>
                    Get Your FREE Investor Kit
                </div>
                <div className={styles.actions}>
                    <input
                      placeholder='Your full name'
                      className={styles.contact_input}
                      name='name'
                      value={name}
                      onChange={onNameChange}/>
                    <input
                      placeholder='Your email'
                      className={styles.contact_input}
                      name='email'
                      value={email}
                      onChange={onEmailChange}/>
                    <label className={styles.checkbox_container}>
                        <input 
                        type="checkbox"
                        value={isInvestor}
                        onChange={onInvestorChange}
                        className={styles.checkbox} />
                        <span class="checkmark" className={styles.checkbox_text} >I am an Accredited Investor</span>
                    </label>
                    <div className={styles.contact_buttons}>
                        <button className={styles.contact_button} onClick={onSubmit}>GET YOUR KIT NOW</button>
                        <button className={styles.contact_button} onClick={onSubmit}>INVEST NOW</button>
                    </div>
                </div>
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
  )
}
