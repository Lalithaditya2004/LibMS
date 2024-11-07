import React, { useState, useEffect } from 'react';
import './Request.css';
import Left from '../components/lefty';

function Request() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('https://fastapitestserver.crescentp.tech/request/'); // Replace with actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setRequests(data);
        } else {
          console.error('Failed to fetch requests');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="request">
      <Left />
      <div className="rr">
        <h1>Requests</h1>
        {requests.length > 0 ? (
          <table className="req-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>ISBN</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index}>
                  <td>{request.book_name}</td>
                  <td>{request.ISBN}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No requests found.</p>
        )}
      </div>
    </div>
  );
}

export default Request;
