import React, { useState, useEffect } from 'react';
import Left from '../components/lefty';
import Input from '../components/Input';
import './Book.css';
import { useNavigate } from 'react-router-dom';

function Book() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");  
    }
  }, [navigate]);

  
  const [title, setTitle] = useState('');
  const [auth, setAuth] = useState('');
  const [price, setPrice] = useState('');
  const [rackno, setRackno] = useState('');
  const [num,setNum] = useState('')

  const handleNumericChange = (setter) => (e) => {
    const value = e.target.value;
    setter(value === '' ? '' : parseInt(value, 10) || 0);
  };

  const addb = async () => {
    console.log("Title:", title);
    console.log("Author ID:", auth);
    console.log("Price:", price);
    console.log("Rack No:", rackno);
    console.log("Number of books:", num);

    try {
      const response = await fetch('https://fastapitestserver.crescentp.tech/books/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          "book_name": title,
          "author_id": auth,
          "price": price,
          "rack_no": rackno,
          "no_of_books": num
        })
      });

      console.log("Response status:", response.status); 

      if (response.ok) {
        alert("Book added"); 
      } else {
        const responseData = await response.json();
        alert(responseData.detail);
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="addBook">
      <Left />
      <div className="addui">
        <div className="adduic2"><h1>Add Book</h1></div>
        
        <div className="adduic1">
          <h1>Title</h1>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="adduic1">
          <h1>Author ID</h1>
          <Input value={auth.toString()} onChange={handleNumericChange(setAuth)} />
        </div>
        <div className="adduic1">
          <h1>Price</h1>
          <Input value={price.toString()} onChange={handleNumericChange(setPrice)} />
        </div>
        <div className="adduic1">
          <h1>Rack No.</h1>
          <Input value={rackno.toString()} onChange={handleNumericChange(setRackno)} />
        </div>
        <div className="adduic1">
          <h1>Number of Books</h1>
          <Input value={num.toString()} onChange={handleNumericChange(setNum)} />
        </div>
        
        <button onClick={addb}>Add</button>
      </div>
    </div>
  );
}

export default Book;
