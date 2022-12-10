import { motion} from 'framer-motion';
import React from 'react';
//import { MdList } from 'react-icons/md';
import './Header.scss';
import flutter from '../../assets/flutter.png'
import redux from '../../assets/redux.png';
import sass from '../../assets/sass.png';

import profile from '../../assets/profile.png';
import abebe from '../../assets/abebe.jpeg'
import circle from '../../assets/circle.svg';

import AppWrapper from '../../Wrapper/AppWrapper';

const skillVariant ={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease: 'easeInOut'
    }
  }
}


export const Header = () => {
  return (
    <div className='app__header app__flex'  id ='home'>
      <motion.div 
          whileInView={{x:[-100, 0], opacity:[0,1]}}
          transition={{duration:0.5}}
          className ='app__header-info'
          >
        <div className='app__header-badge'>
            <div className='greeting-cmp  app__flex'>
                  <span style={{fontSiz:500}} >👋</span>

               <div style={{marginLeft:20}}>
                     <p className='p-text'>Hello, I am </p>
                     <h1 className='head-text'>Abebe </h1>
               </div>
             </div>
           <div className='tag-cmp app__flex'>
                <p className='p-text'>Web Developer</p>
                <p className='p-text'>Freelancer</p>
           </div>
        </div>
      </motion.div>

      <motion.div 
      whileInView={{opacity:[0,1]}}
      transition={{duration:0.5, delayChildren:0.5}}
      className='app__header-img'>
        <img src= {profile} alt ='profile'/>
        <motion.img 
        whileInView={{scale:[0,1]}}
        transition={{duration:1, ease:'easeInOut'}}
        src={circle} alt='circle' className='bkg-circle'></motion.img>
      </motion.div>

      <motion.div 
      variants={skillVariant}
      className='app__header-circles'>
        {
      [flutter,redux,sass].map((list, index) =>(
        <div className='circle-cmp' key={index}>
          <img src={list} alt ='circle-flutter'/>
        </div>
      )
      )
      }

      </motion.div>

    </div>
  )
}
export default AppWrapper(Header, 'header')
