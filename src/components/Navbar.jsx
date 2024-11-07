import React from 'react'
import Logo from '../assets/Logo1.png'
import './Navbar.css'

function Navbar() {
 return (
    <div className="navbar">
        <div className="left">
            <h1>LibMS</h1>
            <img src={Logo} alt="Logo" />   
        </div>
    </div>
  )
}

export default Navbar