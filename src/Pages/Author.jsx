import React, { useState, useEffect } from 'react'
import './Author.css'
import Left from '../components/lefty'
import Search from '../components/Input'
import { useNavigate } from 'react-router-dom';

function Author() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");  // Redirect to login if no token
    }
  }, [navigate]);

  
  const [name,Setname] = useState('');
  const [phone,Setphone] = useState('');
  const [email,Setemail] = useState('');



  const AddAuthor = async() => {
    console.log("Name  :",name);
    console.log("Phone :",phone);
    console.log("Email :",email);
    
    try{
      const response = await fetch('https://fastapitestserver.crescentp.tech/author/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers' : '*',
          'Access-Control-Allow-Origin' : '*',
        },
        body: JSON.stringify({
          "name": name,
          "email": phone,
          "phone_number": email
        })
      });

      console.log("Response status:", response.status); 

      if(response.ok){
        alert("Author added"); 
      }
      else{
        alert("Failed to add Author");
      }
    }
    catch(error){
      console.error(error);
    }
  }
  return (
        <div className="addauthor">
        <Left/>
        <div className="addau">
                <div className="addauc2"><h1>Add Author</h1></div>
                <div className="addauc1"><h1>Name</h1><Search value={name} onChange={(e)=>Setname(e.target.value)}/></div>
                <div className="addauc1"><h1>Phone</h1><Search value={phone} onChange={(e)=>Setphone(e.target.value)}/></div>
                <div className="addauc1"><h1>Email</h1><Search value={email} onChange={(e)=>Setemail(e.target.value)}/></div>
                <button onClick={AddAuthor}>Add</button>
            </div>
        </div>
  )
}

export default Author