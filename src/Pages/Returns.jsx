import React, { useState, useEffect } from 'react';
import './Returns.css';
import Left from '../components/lefty';
import Search from '../components/Input';
import { useNavigate } from 'react-router-dom';
import Button from '../components/BB';

function Returns() {
  const navigate = useNavigate();
  const [userID, setUserID] = useState(0);
  const [bookID, setBookID] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const fetchReturnBook = async () => {
    try {
      // Ensure that userID and bookID are numbers
      const response = await fetch(
        `https://fastapitestserver.crescentp.tech/bookissues/?student_id=${userID}&book_id=${bookID}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        alert("Failed to return book", response.statusText);
      } else {
        alert("Book returned successfully");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="returns">
      <Left />
      <div className="rtr">
        <h1>Return Book</h1>
        <div className="rtr1">
          <h2>StudentID: </h2>
          <Search value={userID} onChange={(e) => setUserID(Number(e.target.value))} />
        </div>
        <div className="rtr1">
          <h2>BookID: </h2>
          <Search value={bookID} onChange={(e) => setBookID(Number(e.target.value))} />
        </div>
        <Button onClick={fetchReturnBook}>Return</Button>
      </div>
    </div>
  );
}

export default Returns;
