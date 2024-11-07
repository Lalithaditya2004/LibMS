import React, { useState, useEffect } from 'react';
import './Vbook.css'
import Left from '../components/lefty'

function Vbook() {
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
                <th>AuthorID</th>
                <th>Price</th>
                
                <th>Rack No.</th>
                <th>BookID</th>
                <th>Arrival Date</th>
                
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.book_code}>
                  <td>{book.book_name}</td>
                  <td>{book.author_id}</td>
                  <td>{book.price}</td>
                  <td>{book.rack_no}</td>
                  <td>{book.book_code}</td>
                  <td>{book.date_of_arrival}</td>
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