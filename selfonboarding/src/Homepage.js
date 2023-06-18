import React from 'react'
import './Homepage.css'
import Header from './Header'
import BotAnimation from './BotAnimation'
import FeaturesDesc from './FeaturesDesc'
import Footer from './Footer'
import DVLogo from './DVLogo'
function Homepage() {
  return (
    <div className='homepage'>

      <Header/>
      <BotAnimation/>
      <FeaturesDesc/>
      <Footer/>

    </div>
  )
}

export default Homepage