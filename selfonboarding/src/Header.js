import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img className='dv_logo' src='http://dialogview.millenniumci.net/wp-content/uploads/2023/05/dialogview-contact-center-solution.png'
        alt=''/>

        <button className='startBtn'><span>Let's go</span></button>
    </div>
  )
}

export default Header