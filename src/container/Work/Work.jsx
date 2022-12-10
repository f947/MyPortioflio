import React from 'react';
import './Work.scss';

import {motion} from 'framer-motion';

import img1 from '../../assets/about01.png';
import img2 from '../../assets/about02.png';

import img3 from '../../assets/about03.png';
import img4 from '../../assets/about04.png';
import { useState } from 'react';
import AppWrapper from '../../Wrapper/AppWrapper';

const list= [
  {
  id:1,
  title: "UI/UX App", 
  description:"A modern UI/UX website for startup company.",
  image:img1,
  tag: "UI/UX"

},
{
  id:2,
  title: "Ewalle Wallet App", 
  description:"A modern Ewalle Wallet website for startup company.",
  image:img2,
  tag:"Mobile App"

},
{
  id:3,
  title: "Blog Website", 
  description:"A modern website for startup company.",
  image:img3,
  tag:"Web App"

},
{
  id:4,
  title: "Sharmane Website", 
  description:"A modern Sharmane website for startup company.",
  image:img2,
  tag: "Web App"

},
{
  id:5,
  title: "Starbucks Clone", 
  description:"A modern Starbucks website for startup company.",
  image:img4,
  tag:"Web App"

},
{
  id:6,
  title: "Community App", 
  description:"A modern Community website for startup company.",
  image:img2,
  tag:"Mobile App"

},
{
  id:7,
  title: "Sweet Shop", 
  description:"A modern Sweet shop website for startup company.",
  image:img1,
  tag:"UI/UX"

},
]

export const Work = () => {
  const [isActive, setIsActive] =  useState('All')
  const [animatedList, setAnimatedList] = useState({y:0, opacty:1})
  const [currentItem, setCurrentItem] = useState(list)
  
  const handleFilter =(filter)=>{
    setIsActive(filter);
    setAnimatedList([{y:100, opacity:1}])
    setTimeout(()=>{
      setAnimatedList([{y:0, opacity:1}])
      if(filter ==='All'){
        setCurrentItem(list)
      }
      else{
        let newItem = list.filter((Work) => Work.tag === filter)
        setCurrentItem(newItem)
      }
    }, 1000)
  }
  return (
     <div className='container__app-header'>
        <h1 className='head-text'>My Creative <span> Portfolio</span> Section</h1>

      <div className='app__work-filters'>
        {
          ['UI/UX', 'Web App','Mobile App', 'React Js', 'All'].map((item, index) =>(
               <div
                 key ={index}  onClick={() => handleFilter(item)}
                 className={`app__work-filters-item app__flex p-text ${isActive===item? 'item-active':''}`}>
                  {item}
                    
              </div>
          )) 
        }  
      </div>
      <motion.div animate={animatedList}
      transition={{duration:0.6, delayChildren:0.5}}
      className="app__work-portfolio">
        {currentItem.map((work, index) => (
          <div className='app__work-item app__flex'
          key={work.id}>
            <div className='app__work-img app__flex'> 
                <img  className='img'src={work.image} alt={work.title}/>
            </div>
            <div className='app__work-content app__flex'>
              <h4 style={{mariginTop:10}}>{work.title}</h4>
              <p className='p-text' style={{mariginTop:10}}>{work.description}</p>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tag}</p>
              </div>

            </div>

          </div>
        )
        )}

      </motion.div>
    </div>
  )
}
export default AppWrapper(Work, 'work')
