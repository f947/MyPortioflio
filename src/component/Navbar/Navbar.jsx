import React from 'react';
import { About } from '../../container/AppExport';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import {HiMenu} from'react-icons/hi';
import {motion} from 'framer-motion';
import {MdOutlineClose} from 'react-icons/md';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);


  return (
    <nav className='app__navar'>
        <div className='app__navbar-logo'>
             <img src= {logo} alt ='logo'/> 
        </div>
        <div className='menu-icon'>
        
        </div>
        <ul className='app__navbar-links'>
            {
                ['home', 'about', 'work','skills', 'contact'].map((item, index) =>(
                    <li key ={`link- ${item}`} className='p-text app_flex'>
                        <a href={`# ${item}`}>{item}</a>
                    </li>

                    ))
            }
        </ul>
        <div className='app__navbar-menu'>
          <HiMenu onClick={(()=>setToggle(true))}/>
          {
            toggle &&(
                <motion.div
                   whileInView ={{ x: [300, 0]}}
                   transition ={{duration: 0.85, ease:'easeOut'}}
                >
                    <MdOutlineClose onClick={(() => setToggle(false))}/>
                    <ul >
                       {
                           ['home', 'about', 'work','skills', 'contact'].map((item, index) =>(
                                <li key ={item} className='p-text'>
                                  {/* <div className='dot'/> */}
                                  <a href={`# ${item}`}  onClick={(()=>setToggle(false))}>{item}</a>
                             </li>

                            ))
                       } 
                   </ul>

                </motion.div>
            )
          }
        </div>

    </nav>
  )
}
export default Navbar