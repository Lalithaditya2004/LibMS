import React, { useState, useEffect } from 'react';
import './Vauthor.css';
import Left from '../components/lefty';

function Vauthor() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch('https://fastapitestserver.crescentp.tech/author/');
        if (!response.ok) {
          alert('Failed to fetch authors');
        }
        const data = await response.json();
        setAuthors(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div className="vauthor">
      <Left />
      <div className="var">
        <h1>Author List</h1>
        {(
          <table className="author-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.id}>
                  <td>{author.id}</td>
                  <td>{author.name}</td>
                  <td>{author.email}</td>
                  <td>{author.phone_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Vauthor;
