import React from 'react'
import './Ufines.css'
import ULeft from '../components/Userlefty'

function Ufines() {
  return (
    <div className="ufines">
        <ULeft/>
        <div className="ufr">
            <h1>Your Total Fines</h1>
            <hr></hr>
            <div className="ufri">
                <p>0.00 Rs</p>
            </div>
        </div>
    </div>
  )
}

export default Ufines