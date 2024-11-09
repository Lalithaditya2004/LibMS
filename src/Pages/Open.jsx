import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Left from '../components/lefty';
import "./Open.css";

function Open() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");  
    }
  }, [navigate]);

  

  return (
    <div className="open">
      <Left />
      <div className="righty">
        <div className="heading"><h1>Admin Dashboard</h1></div>
        
        <Link to='/admin/issues'><button><h1>Issue</h1></button></Link>
        <Link to='/admin/requests'><button><h1>Requests</h1></button></Link>
        <Link to='/admin/returns'><button><h1>Return</h1></button></Link> 
        <Link to='/admin/viewissues'><button><h1>Issued Books</h1></button></Link>
      </div>
    </div>
  );
}

export default Open;
