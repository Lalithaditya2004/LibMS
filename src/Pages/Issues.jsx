import React, { useState, useEffect } from 'react';
import './Issues.css';
import Left from '../components/lefty';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

function Issues() {
  const [studentId, setStudentId] = useState('');
  const [bookId, setBookId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      console.log("No token found, navigating to home.");
      navigate("/"); 
    }
  }, [navigate]);

  
  

  const handleNumericChange = (setter) => (e) => {
    const value = e.target.value;
    setter(value === '' ? '' : parseInt(value, 10) || '');
  };

  const issueBook = async () => {
    try {
      const response = await fetch(`https://fastapitestserver.crescentp.tech/bookissues/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'student_id': studentId,
          'book_id': bookId
        }),
      });

      if (response.ok) {
        alert('Book issued successfully');
      } else {
        
        const data = await response.json();
        console.error("Error response from server:", data);
        alert(data.detail);
      }
    } catch (error) {
      console.error("Error in issueBook function:", error);
      alert('An error occurred while trying to issue the book.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId && bookId) {
      issueBook();
    } else {
      alert("Please enter valid Student ID and Book ID.");
    }
  };

  return (
    <div className="issues">
      <Left />
      <div className="issr">
        <h1>Issue Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="issr1">
            <h2>Student ID:</h2>
            <Input value={studentId} onChange={handleNumericChange(setStudentId)} />
          </div>
          <div className="issr1">
            <h2>Book ID:</h2>
            <Input value={bookId} onChange={handleNumericChange(setBookId)} />
          </div>
          <button type="submit" className="issue-button">Issue Book</button>
        </form>
      </div>
    </div>
  );
}

export default Issues;
