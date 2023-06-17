import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_tagline'>
          <p>Streamline Your Communications, <br/>Elevate Your Customer Experience</p>
      </div>
      <div className='footer_contact'>
        <ul className='company_info'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <span className='copyright'>©2023Dialogview</span>
      
    </div>
  )
}

export default Footer