
import SocialMedia from "../component/Socialmedia/SocialMedia";
import React from 'react';
import './AppWrapper.scss'
import { NavigationDot } from "../NavigationDot/NavigationDot";
    
const AppWrapper =(MainComponent, currentItem, styleName ) =>{
    
    const UpdateCompnent = () => {
      return (
        <div  id={currentItem} className='app__container'>
            <SocialMedia/>

            <div className="app__wrapper app__flex">
                <MainComponent/>
            </div>
             <NavigationDot  active={currentItem}/>
            
        </div>
      )
    }
    return UpdateCompnent
    

}
export default AppWrapper