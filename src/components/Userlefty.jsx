import React from 'react'
import './Userlefty.css'
import { Link } from 'react-router-dom'

function Userlefty() {
  return (
    <div className="userlefty">
    <Link className="linkk" to="/home"><h1>Home</h1></Link>
    <Link className="linkk" to='/home/search'><h1>Search</h1></Link>
    <Link className="linkk" to='/home/request'><h1>Request</h1></Link>
    <Link className="linkk" to='/home/fines'><h1>Fines</h1></Link>
    <Link className="linkk" to='/home/rules'><h1>Rules</h1></Link>
    <Link className="linkk" to='/home/contact'><h1>Contact Us</h1></Link>
    <Link className="linkk"  to="/" ><h1>Sign out</h1></Link>  
  </div>
  )
}

export default Userlefty