import React, { useState, useEffect } from 'react';
import './Request.css';
import Left from '../components/lefty';
import { useNavigate } from 'react-router-dom';

function Request() {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");  
    } else {
      const fetchRequests = async () => {
        try {
          const response = await fetch('https://fastapitestserver.crescentp.tech/request/');
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
    }
  }, [navigate]);

  const handledel = async (isbn) => {
    try {
      const response = await fetch(`https://fastapitestserver.crescentp.tech/request/{request_id}?ISBN=${isbn}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Request deleted successfully');
        setRequests(requests.filter(request => request.ISBN !== isbn)); // Update UI after deletion
      } else {
        alert('Failed to delete request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="request">
      <Left />
      <div className="rr">
        <h1>Requests</h1>
        {requests.length > 0 ? (
          <table className="reqs-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>ISBN</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index}>
                  <td>{request.book_name}</td>
                  <td>{request.ISBN}</td>
                  <td>
                    <button onClick={() => handledel(request.ISBN)}>Remove</button>
                  </td>
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
