import React from 'react'
import './NavigationDot.scss'

export const NavigationDot = (props) => {

  return (
    <div className='app__navigation'>
        {
            ['header', 'about', 'work', 'skills', 'testimonial', 'contact'].map((list, index) =>(
                <a key={index} href={` #${list}`}
                className='app__navigation-dot'
                style={props.active === list? {backgroundColor: '#313bac'}:{}}/>
            ))
        }
    </div>
  )
}
