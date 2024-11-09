import React,{useState, useEffect} from 'react'
import './UserAdd.css'
import { useNavigate } from 'react-router-dom';

function UserAdd() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  
  return (
    <div>UserAdd</div>
  )
}

export default UserAdd