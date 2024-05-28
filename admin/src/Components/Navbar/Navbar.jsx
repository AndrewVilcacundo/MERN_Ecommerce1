import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/Logocafe.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
    </div>
  )
}

export default Navbar
