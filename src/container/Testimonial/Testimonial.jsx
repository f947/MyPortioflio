import React from 'react';
import AppWrapper from '../../Wrapper/AppWrapper';
import './Testimonial.scss';
import adidas from '../../assets/adidas.png'
import amazon from '../../assets/amazon.png'
import asus from '../../assets/asus.png'
import skype from '../../assets/skype.png'
import nb from '../../assets/nb.png'
import spotify from '../../assets/spotify.png'
//import adidas from '../../assets/adidas.png'
import proImag from '../../assets/profile.png'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi';


 const companies = [adidas, amazon, asus, nb, spotify, skype]

 const data= [
  {
    id:1,
    profile:proImag,
    description:"Love working with Orion, Orion is a great palce to work the people are very friendly, helpful and very knowledgeable. I recommend Orion to anyone seeking for a position.",
    role: "Founder at Apple",
    name: "Sara Doe"
  },

  {
    id:2,
    profile:proImag,
    description:"I recommend Orion to anyone seeking for a position, Because love working with Orion, Orion is a great palce to work the people are very friendly, helpful and very knowledgeable.",
    role: "CEO & Founder at Apple",
    name: "Chris Thomas"
  },
  {
    id:3,
    profile:proImag,
    description:"Love working with Orion, Orion is a great palce to work with the people that are very friendly, helpful and very knowledgeable. I recommend Orion to anyone seeking for a position.",
    role: "CEO & Founder at Amazon",
    name: "Vang Her"
  }
 ]
 

export const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

 const next =()=>{
  setCurrentIndex(currentIndex+1)
  if(currentIndex == data.length -1){
    setCurrentIndex(0)
  }
  else{
    setCurrentIndex(currentIndex +1)
  }
 }
 const prev=()=>{
  if(currentIndex == 0){
    setCurrentIndex(data.length-1)
  }
  else{
    setCurrentIndex(currentIndex -1)
  }
 }

  return (
    <div>
      
      <div className='app__testimonial'>
          <div className='app__testimonial-item app__flex'>
          <img src={data[currentIndex].profile} alt="profile"/>

          <div className='app__testimonial-content'>
             <p>{data[currentIndex].description}</p>
             <h4>{data[currentIndex].name}</h4>
            <h5 className='p-text'>{data[currentIndex].role}</h5>
          </div>
        </div>
        <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={prev}>
            <HiChevronLeft/>
          </div>
          <div className='app__flex' onClick={next}>
            <HiChevronRight/>
          </div>

        </div>
      </div>

      <motion.div className='app__testimonial-company app__flex'>
          {
            companies.map((item, index)=>(
              <motion.div className='app__testimonial-items'
              key={index}
              whileInView={{opacity:[0,1]}}
              transition={{duration:0.6}}
              >
                <div
                >
                  <img src={item} alt='Brand' />
                </div>
               

              </motion.div>
             
            ))
          }

        </motion.div>
      
    </div>
  )
}
export default AppWrapper(Testimonial, 'testimonial')
