import React,{useState, useEffect} from 'react'
import './Returns.css'
import Left from '../components/lefty'
import Search from '../components/Input'
import { useNavigate } from 'react-router-dom';

function Returns() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");  
    } 
  }, [navigate]);
  return (
    <div className="returns">
        <Left />
        <div className="rtr">
            <h1>Return Book</h1>
            <div className="rtr1"></div>

        </div>
    </div>
  )
}

export default Returns