import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


function Home() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  localStorage.removeItem("token");
  const handleLogin = async () => {
    try {
      const response = await fetch(
        `https://fastapitestserver.crescentp.tech/login`,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "password",
            username: username,
            password: password,
            scope: "",
            client_id: "string",
            client_secret: "string"
          }),
        }
      )
      
      const data = await response.json();
      console.log(data)
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate('/admin');
      }
      else{
        setError("Invalid username or password");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <div className="home">
      <div className="left">
      </div>
      <div className="right">
        <div className="log">
          <h1>Login</h1>
          <hr />
          {error && <p className="error">{error}</p>}
          <h3>Username</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <h3>Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button onClick={handleLogin}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
