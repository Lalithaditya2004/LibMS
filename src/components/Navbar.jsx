import React from 'react'
import Logo from '../assets/Logo1.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
 return (
    <div className="navbar">
        <div className="left">
            <h1>LibMS</h1>
            <Link to="/"><img src={Logo} alt="Logo" /></Link>   
        </div>
    </div>
  )
}

export default Navbar