import React from 'react'
import './Header.css'

function Header() {


  const loadReg = () => {
    // window.location.assign = 'http://www.google.com';
  }

  return (
    <div className='header'>
        <a href='http://localhost:3000/'><img className='dv_logo' src='http://dialogview.millenniumci.net/wp-content/uploads/2023/05/dialogview-contact-center-solution.png'
        alt=''/></a>

        <button className='startBtn'><span><a href='http://localhost:3000/registration'>Get Started</a></span></button>
    </div>
  )
}

export default Header