import React from 'react'
import './Header.css'

function Header() {


  const loadReg = () => {
    // window.location.href = 'http://www.google.com';
  }

  return (
    <div className='header'>
        <img className='dv_logo' src='http://dialogview.millenniumci.net/wp-content/uploads/2023/05/dialogview-contact-center-solution.png'
        alt=''/>

        <button className='startBtn' onClick={() => loadReg()}><span>Get Started</span></button>
    </div>
  )
}

export default Header