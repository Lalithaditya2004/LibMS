import React from 'react'
import './Rules.css'
import Uleft from '../components/Userlefty'

function Rules() {
  return (
    <div className="rules">
        <Uleft/>
        <div className="rmain">
        <h1>Rules</h1>
        <hr/>
        <p>
          1. If you check out a book, please return it on time so others can enjoy it too.<br/>
          2. Running, yelling or any loud noises are not permitted inside the library.
          <br/>
          3. Keep the library clean.
          <br/>
          4. Always carry institution Identification card with you when visiting the library.
          <br/>
          5. No food or beverages allowed inside the library.
          <br/>
          6. Upon entry into library always scan your ID to register your entry.
        </p>
        </div>
    </div>
  )
}

export default Rules