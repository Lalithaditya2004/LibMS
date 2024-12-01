import React, { useState, useEffect } from 'react';
import Left from '../components/lefty';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/BB';

function Search() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/"); 
    }
  }, [navigate]);

  const [bookName, setBookName] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    setBooks([]);

    try {
      const response = await fetch(`https://fastapitestserver.crescentp.tech/books/?book_name=${bookName}`); 
      const data = await response.json();
      setBooks(data.sort((a, b) => a.book_code - b.book_code));
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="search">
      <Left />
      <div className="search-area">
        <h1>Search By Title</h1>
        <div className="boxy">
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Enter Book Title"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>


        {books.length > 0 && (
          <table className="bookys-table">
            <thead>
              <tr>
              <th>Title</th>
                <th>BookID</th>
                <th>Author</th>
                <th>AuthorID</th>
                <th>Price</th>
                <th>Status</th>
                <th>Rack No.</th>
                
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
                  
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Search;
