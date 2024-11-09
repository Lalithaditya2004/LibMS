import React, { useEffect, useState } from 'react';
import './VIssues.css';
import Left from '../components/lefty';
import { useNavigate } from 'react-router-dom';

function VIssues() {

  const [issues, setIssues] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenAndFetchIssues = async () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      if (!token) {
        console.log("No token found, navigating to home.");
        navigate("/"); 
      } else {
        console.log("Token found, setting isLoading to false.");
     

        try {
          console.log("Fetching issues...");
          const response = await fetch('https://fastapitestserver.crescentp.tech/bookissues/');
          
          if (!response.ok) {
            throw new Error('Failed to fetch issues');
          }

          const data = await response.json();
          console.log("Fetched issues:", data);
          setIssues(data);
        } catch (error) {
          console.error("Error fetching issues:", error);
          setFetchError('Failed to load issues. Please try again later.');
        }
      }
    };

    checkTokenAndFetchIssues();
  }, [navigate]);


  return (
    <div className="vissues">
      <Left />
      <div className="vis">
        <h1>All Issues</h1>
        {fetchError ? (
          <p className="error-message">{fetchError}</p>
        ) : issues.length > 0 ? (
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
                  <td>{issue.student.name}</td>
                  <td>{issue.book.book_name}</td>
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
