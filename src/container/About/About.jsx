import React from 'react';
import './About.scss';
import {motion} from 'framer-motion';

import img1 from '../../assets/about01.png';
import img2 from '../../assets/about02.png';
import img3 from '../../assets/about03.png';
import img4 from '../../assets/about04.png';

import AppWrapper from '../../Wrapper/AppWrapper';

const list= [{
  title: "Web Designer", 
  description:"I am a web developer with experiance of 1 years on the market.",
  img:img1

},
{
  title: "React Native Developer", 
  description:"I am a react native developer with experiance of 1 years on the market.",
  img:img2

},
{
  title: "Backend Developer", 
  description:"I am a Backend developer with experiance of 1 years on the market.",
  img:img3

},
{
  title: "Frontend Developer", 
  description:"I am a frontend developer with experiance of 1 years on the market.",
  img:img4

}
]
export const About = () => {
  
  return (
    <div className='container app__flex'>
      <h2 className='head-text'>I know That<span> Good Design </span> <br/>Means <span> Good Bussiness</span></h2>
      <div className='app__header-profile'>
        {
          list.map((item, index)=>(
            <motion.div
               whileInView={{opacity:1}}
               whileHover={{scale:1.1}}
               transition={{duration:0.6, type:'tween'}}

              className= 'app__Profile-item'
              key={index}>
              <img src={item.img} alt={item.title}/>
              <h3 style={{marignTop:20, marignBottom:10}}>{item.title}</h3>
              <h1 className='p-text'>{item.description}</h1>
      
         </motion.div>
    

          ))
     }
      </div>
       

    </div>
  )
}
export default AppWrapper(About, 'about')
