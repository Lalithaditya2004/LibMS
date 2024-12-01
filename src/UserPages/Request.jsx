import React, { useState } from 'react';
import './Request.css';
import Uleft from '../components/Userlefty';
import Input from '../components/Input';
import BB from '../components/BB';

function Request() {
  const [bookName, setBookName] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publisher, setPublisher] = useState('');

  const handleRequest = async () => {
    const requestData = {
      book_name: bookName,
      ISBN: isbn,
      publisher: publisher,
    };

    try {
      const response = await fetch('https://fastapitestserver.crescentp.tech/request/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log('Book request submitted successfully');
      } else {
        console.error('Failed to submit book request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="request">
      <Uleft />
      <div className="reqr">
        <h1>Request for a New Book</h1>
        <hr />
        <div className="reqi">
          <h2>Book Title:</h2>
          <Input value={bookName} onChange={(e) => setBookName(e.target.value)} />
        </div>
        <div className="reqi">
          <h2>ISBN:</h2>
          <Input value={isbn} onChange={(e) => setIsbn(e.target.value)} />
        </div>
        {/* <div className="reqi">
          <h2>Publisher:</h2>
          <Input value={publisher} onChange={(e) => setPublisher(e.target.value)} />
        </div> */}
        <BB onClick={handleRequest}>Request</BB>
      </div>
    </div>
  );
}

export default Request;
