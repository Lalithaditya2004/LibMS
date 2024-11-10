import React, { useState, useEffect } from 'react';
import './Vbook.css'
import Left from '../components/lefty'
import { useNavigate } from 'react-router-dom';

function Vbook() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");  
    } 
  }, [navigate]);

  
    const [books, setbooks] = useState([]);

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const response = await fetch('https://fastapitestserver.crescentp.tech/books/');
        const data = await response.json();
        setbooks(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchbooks();
  }, []);
  return (
    <div className="vbook">
        <Left/>
        <div className="vbookr">
        <h1>Book List</h1>
        {(
          <table className="book-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>BookID</th>
                <th>Author</th>
                <th>AuthorID</th>
                <th>Price</th>
                <th>Status</th>
                <th>Rack No.</th>
                
                <th>Arrival Date</th>
                
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.book_code}>
                  <td>{book.book_name}</td>
                  <td>{book.book_code}</td>
                  <td>{book.author_name}</td>
                  <td>{book.author_id}</td> 
                  <td>{book.price}</td>
                  <td>{(book.no_of_books > 0)? book.no_of_books + " Available" : "Checked out"}</td>
                  <td>{book.rack_no}</td>
                  
                  <td>{new Date(book.date_of_arrival).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
    </div>
  )
}

export default Vbook