import React from 'react'
import AppWrapper from '../../Wrapper/AppWrapper'
import './Contact.scss'
import mobile from '../../assets/mobile.png';
import mail from '../../assets/email.png';
import { useRef} from 'react';
import { useState } from 'react';

export const Contact = () => {
    // const usernameRef = useRef()
    // const emailRef = useRef()
    // const messageRef = useRef()
    const [data, setData] = useState({
        username:"",
        email:"",
        message:""
    })
    const {username, email, message} = data;
    const changeEventHandler = (event)=>{
        setData({...data,
        [event.target.name]:
        [event.target.value]
    })

    }
    const submitEventHandler = (event)=>{
       
        event.preventDefault()
        alert(`The inputs are ${username}, ${email}, ${message}`)
        console.log(data)
    }
  return (
    <div className='app__contact'>
        <h1>Take A Coffee & Chat with me</h1>
        <div className='app__contact-cards'>
        <div className='app__contact-card' style={{backgroundColor:"lightpink"}}>
            <img src={mail} alt = "Email"/>
            <p className='p-text'>abetom763@gmail.com</p>
        </div>
        <div className='app__contact-card' style={{backgroundColor:"lightgray"}}>
            <img src={mobile} alt ="Mobile"/>
           <p className='p-text'> +1(763)-913-1403</p>
            

        </div>
        </div>
        <form  onSubmit= {submitEventHandler} className='app__contact-forms'>
            <div>
             <input onChange = {changeEventHandler} style={{backgroundColor:"lightgray"}} type="text" 
              className="p-text"  name ="username"  value = {username} placeHolder ="Your Name" />
            </div>

            <div>
              <input onChange={changeEventHandler} style={{backgroundColor:"lightgray"}}type="email" 
              className='p-text' name='email'  value ={email} placeholder='Your Email' />
            </div>

            <div>
               <textarea onChange={changeEventHandler} style={{backgroundColor:"lightgray"}} type="text" 
               className='p-text' name='message' value ={message} placeholder='Your Message' />
            </div>
            <button className='app__contact-btns' type='submit'>SendYourMessage</button>
        </form>
    </div>
  )
}
export default AppWrapper(Contact, 'contact')
