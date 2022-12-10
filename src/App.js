import React from 'react'
import { Header, About, Work, Skills, Testemonial, Footer } from './container/AppExport'
import './App.scss'
import { Navbar } from './component/Navbar/Navbar'
import SocialMedia from './component/Socialmedia/SocialMedia'
import { NavigationDot } from './NavigationDot/NavigationDot'
import AppWrapper from './Wrapper/AppWrapper'
import Contact from './container/Contact/Contact'

export const App = () => {
  return (
    <div className='App'>
       <Navbar/> 
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testemonial/>
      <Contact/>
      {/* <SocialMedia/>
      <NavigationDot/> */}
      {/* <AppWrapper/> */}
       {/* <Footer/> */}
    </div>
  )
}
export default App
