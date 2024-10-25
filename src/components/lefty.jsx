import React from 'react'
import { Link } from 'react-router-dom'
import './lefty.css'
function lefty() {
  return (
  <div className="lefty">
    <Link className="link-style" to="/open"><h1>Home</h1></Link>
    <Link className="link-style" to='/open/search'><h1>Search</h1></Link>
    <Link className="link-style"><h1>Add User</h1></Link>
    <Link className="link-style"><h1>Delete User</h1></Link>        
    <Link className="link-style"><h1>Add Book</h1></Link>        
    <Link className="link-style"  to="/" ><h1>Sign out</h1></Link>  
  </div>
  )
}

export default lefty