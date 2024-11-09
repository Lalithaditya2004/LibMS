import React, { useState , useEffect} from 'react';
import './SAuthor.css';
import Button from '../components/BB';
import Left from '../components/lefty';
import { useNavigate } from 'react-router-dom';

function SAuthor() {
  const [authorId, setAuthorId] = useState('');
  const [author, setAuthor] = useState(null);

  const handleSearch = async () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        navigate("/");  // Redirect to login if no token
      }
    }, [navigate]);
  
    
    setAuthor(null);

    try {
      const response = await fetch(`https://fastapitestserver.crescentp.tech/author/${authorId}`); 
      if (!response.ok) {
        throw new Error('Author not found');
      }
      const data = await response.json();
      setAuthor(data);
    } catch (err) {
      console.error(err);
    } 
  };

  return (
    <div className="asearch">
      <Left />
      <div className="asearch-area">
        <h1>Search By Author ID</h1>
        <div className="aboxy">
          <input
            type="text"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            placeholder="Enter Author ID"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>

        

        {author && (
          <div className="author-details">
            <h2>Author Details</h2>
            <p><strong>ID:</strong> {author.id}</p>
            <p><strong>Name:</strong> {author.name}</p>
            <p><strong>Email:</strong> {author.email}</p>
            <p><strong>Phone Number:</strong> {author.phone_number}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SAuthor;
