import React from "react";
import "./Open.css";
import  Left from '../components/lefty'
import { Link } from "react-router-dom";
function Open() {
  return (
    <div className="open">
      <Left/>
      <div className="righty">
        <button><h1>Check out</h1></button>
        <button><h1>Check In</h1></button>
        <button><h1>Renew</h1></button>
        <button ><Link to='/open/search' style={{textDecoration:'none',color:'white'}}><h1>Search</h1></Link></button> 
      </div>
    </div>
  );
}

export default Open;
