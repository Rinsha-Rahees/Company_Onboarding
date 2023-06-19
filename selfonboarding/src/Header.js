import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <a href='/'><img className='dv_logo' src='http://dialogview.millenniumci.net/wp-content/uploads/2023/05/dialogview-contact-center-solution.png'
        alt=''/></a>

        <button className='startBtn'><span><a href='/registration'>Get Started</a></span></button>
    </div>
  )
}

export default Header