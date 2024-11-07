import React, { useEffect, useState } from 'react';
import './VIssues.css';
import Left from '../components/lefty';

function VIssues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('https://fastapitestserver.crescentp.tech/bookissues/');
        if (!response.ok) {
          throw new Error('Failed to fetch issues');
        }
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error(error);
      } 
    };

    fetchIssues();
  }, []);


  return (
    <div className="vissues">
      <Left />
      <div className="vis">
        <h1>All Issues</h1>
        {issues.length > 0 ? (
          <table className="issues-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Book ID</th>
                <th>Issue Date</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, index) => (
                <tr key={index}>
                  <td>{issue.student_id}</td>
                  <td>{issue.book_id}</td>
                  <td>{new Date(issue.issue_date).toLocaleDateString()}</td>
                  <td>{new Date(issue.due_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No issues found</p>
        )}
      </div>
    </div>
  );
}

export default VIssues;
