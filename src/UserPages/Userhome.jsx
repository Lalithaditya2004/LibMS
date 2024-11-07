import React from 'react'
import './Userhome.css'
import ULeft from '../components/Userlefty'
import borrow from '../assets/borrow1.png'
import Return from '../assets/return4.png'

function Userhome() {
  return (
    <div className="userhome">
        <ULeft/>
        <div className="hrighty">
          <div className="trans">
          <h1>Transactions Details</h1>
          <hr />
          <div className="imm">
            <div className="immin"><img src={borrow} alt="" /><h2>Your Borrowals</h2></div>
            <div className="immin"><img src={Return} alt="" /><h2>Your Returns</h2></div>
          </div>
          
          </div>
        </div>
    </div>
  )
}

export default Userhome