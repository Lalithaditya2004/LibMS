import React, { useState, useEffect } from 'react';
import './AUsers.css';
import Left from '../components/lefty';
import Input from '../components/Input';
import BB from '../components/BB';
import { useNavigate } from 'react-router-dom';

function AUsers() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");  
    }
  }, [navigate]);

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleAddUser = async () => {
    const newUser = {
      name,
      address,
      email,
      phone_number: phoneNumber,
      status: 1, // Hardcoded as required
    };

    try {
      const response = await fetch('https://fastapitestserver.crescentp.tech/students/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert('User added successfully');
        setName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
      } else {
        alert('Failed to add user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="ausers">
      <Left />
      <div className="ausrsr">
        <h1>Add User</h1>
        <div className="aus1">
          <h3>User Name: </h3>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="aus1">
          <h3>User Email: </h3>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="aus1">
          <h3>User Phone: </h3>
          <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="aus1">
          <h3>User Address: </h3>
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <BB onClick={handleAddUser}>Add</BB>
      </div>
    </div>
  );
}

export default AUsers;
