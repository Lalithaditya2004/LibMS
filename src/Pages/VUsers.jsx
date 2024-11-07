import React, { useState, useEffect } from 'react';
import './VUsers.css';
import Left from '../components/lefty';

function VUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://fastapitestserver.crescentp.tech/students/'); 
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="vusers">
      <Left />
      <div className="vur">
        <h1>User List</h1>
        {(
          <table className="user-table">
            <thead>
              <tr>
                <th>ID No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Status</th>
                <th>Date of Issue</th>
                <th>Date of Expiry</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id_no}>
                  <td>{user.id_no}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.address}</td>
                  <td>{user.status}</td>
                  <td>{new Date(user.date_of_issue).toLocaleDateString()}</td>
                  <td>{new Date(user.date_of_expiry).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default VUsers;
