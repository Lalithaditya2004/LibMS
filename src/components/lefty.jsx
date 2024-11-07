import React from 'react'
import { Link } from 'react-router-dom'
import './lefty.css'
function lefty() {
  return (
  <div className="lefty">
    <Link className="link-style" to="/admin"><h1>Home</h1></Link>
    <Link className="link-style" to='/admin/search'><h1>Search</h1></Link>
    <Link className="link-style" to='/admin/users'><h1>Users</h1></Link>
    <Link className="link-style" to='/admin/books'><h1>Books</h1></Link>
    <Link className="link-style" to='/admin/author'><h1>Authors</h1></Link>
    <Link className="link-style"  to="/" ><h1>Sign out</h1></Link>  
  </div>
  )
}

export default lefty