import React from 'react'
import './Usersearch.css'
import Uleft from '../components/Userlefty'
import Button from '../components/BB'

function Usersearch() {
  return (
    <div className="usersearch">
        <Uleft/>
        <div className="ussr">
            <h1>Search By Title</h1>
            <div className="ussrboxy">
                <input type="text" />
                <Button>Search</Button>
            </div>
        </div>
    </div>
  )
}

export default Usersearch