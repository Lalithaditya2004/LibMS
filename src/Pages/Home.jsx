import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className="home">
      <div className="left">

      </div>
        <div className="right">
          <div className="log">
          <h1>Admin login</h1>
           <h3>UserName</h3>
           <input></input>
           <h3>Password</h3>
           <input type='Password'></input>
           <button>Sign in</button>
          </div>
           
        </div>
    </div>
  )
}

export default Home