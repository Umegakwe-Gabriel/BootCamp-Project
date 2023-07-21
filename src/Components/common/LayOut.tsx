import React from 'react'
import Header from '../static/Header'
import {Outlet} from "react-router-dom"
import Hero from '../../Pages/Hero'
import AfterHero from '../../Pages/AfterHero'
import Needs from '../../Pages/Needs'
import Suit from '../../Pages/Suit'
import BeforeFooter from '../../Pages/BeforeFooter'
import Footer from '../static/Footer'

const LayOut = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Hero/>
        <AfterHero/>
        <Needs/>
        <Suit/>
        <BeforeFooter/>
        <Footer/>
    </div>
  )
}

export default LayOut