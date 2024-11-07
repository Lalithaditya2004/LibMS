import React from 'react'
import Left from '../components/lefty'
import Search from '../components/Input'
import './Fines.css'

function Fines() {
  return (
    <div className="addFines">
        <Left/>
        <div className="addfi">
        <div className="addfic2"><h1>Add Fine</h1></div>
          
        <div className="adduic1"><h1>UserID</h1><Search/></div>
        <div className="adduic1"><h1>Amount</h1><Search/></div>
        <button>Add</button>
        </div>
    </div>
  )
}

export default Fines