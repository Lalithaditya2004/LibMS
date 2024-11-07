import React from 'react'
import { Link } from 'react-router-dom'
import './BB.css'

function BB({children,ll,onClick}) {
  return (
    <div className="bb"><Link to={ll}><button onClick={onClick}>{children}</button></Link></div>
    
  )
}

export default BB