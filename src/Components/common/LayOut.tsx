import React from 'react'
import Header from '../static/Header'
import {Outlet} from "react-router-dom"
import Hero from '../../Pages/Hero'
import AfterHero from '../../Pages/AfterHero'
import Needs from '../../Pages/Needs'

const LayOut = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Hero/>
        <AfterHero/>
        <Needs/>
    </div>
  )
}

export default LayOut