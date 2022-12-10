import React from 'react'
import './Footer.scss'
//import {FcPhoneAndroid} from 'react-icons/fc'

export const Footer = () => {
  return (
    <div className='footer'>
      <h1>Take A Coffee & Chat With Me</h1>
      <div className='copy-rights'>
        <p>@2022 Abebe</p>
        <p>All Rights Reserved</p>
      </div>
        <div className='cellphone-call'>
             <h1>💌 abetom763@gmail.com</h1>
            <p>☎️ +1 763-913-1403</p>

        </div>
      <ui className= 'lable'>
        <label>Your Name</label>
        <input type='text'/>
        <label>Your Email</label>
        <input type='text'/>

       <label>Comments</label>
      <textarea/>
      <button>Send Message</button>

      </ui>
      
    </div>
  )
}
export default Footer
