import React, { useState } from 'react';
import './Userhome.css';
import ULeft from '../components/Userlefty';
import Button from '../components/BB';

function Userhome() {
  const [id, setId] = useState(0);
  const [iss, Setiss] = useState([]);

  const handlegetIssue = async () => {
    const response = await fetch(`https://fastapitestserver.crescentp.tech/bookissues/?student_id=${id}`);
    const issue = await response.json();
    Setiss(issue);
    console.log(issue);
  };

  return (
    <div className="userhome">
      <ULeft />
      <div className="hrighty">
        <div className="trans">
          <h1>Transactions Details</h1>
          <hr />
          <h2>UserID:</h2>
          <div className="imm">
            <input
              value={id}
              onChange={(e) => { setId(Number(e.target.value)); }}
              placeholder="Enter your ID"
            />
            <Button onClick={handlegetIssue}>Search</Button>
          </div>

          {/* Table to display the results */}
          {iss.length > 0 && (
            <table className="results-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Price</th>
                  <th>Rack No</th>
                  <th>Issue Date</th>
                  <th>Due Date</th>
                  
                </tr>
              </thead>
              <tbody>
                {iss.map((issue, index) => (
                  <tr key={index}>
                    <td>{issue.book.book_name}</td>
                    <td>{issue.book.author_name}</td>
                    <td>{issue.book.price}</td>
                    <td>{issue.book.rack_no}</td>
                    <td>{new Date(issue.issue_date).toLocaleDateString()}</td>
                    <td>{new Date(issue.due_date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Userhome;
