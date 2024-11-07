import React from 'react'
import './Request.css'
import Uleft from '../components/Userlefty'
import Input from '../components/Input'
import BB from '../components/BB'

function Request() {
  return (
    <div className="request">
        <Uleft/>
        <div className="reqr">
            <h1>Request for a new Book</h1>
            <hr/>
            <div className="reqi"><h2>Book Title:</h2><Input></Input></div>
            <div className="reqi"><h2>ISBN:</h2><Input></Input></div>
            <div className="reqi"><h2>Publisher:</h2><Input></Input></div>
            <BB>Request</BB>
        </div>
    </div>
  )
}

export default Request