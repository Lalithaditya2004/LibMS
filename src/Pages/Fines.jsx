import React,{useState, useEffect} from 'react'
import Left from '../components/lefty'
import Search from '../components/Input'
import './Fines.css'
import { useNavigate } from 'react-router-dom';

function Fines() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");  // Redirect to login if no token
    } else {
      setIsLoading(false);  // Set loading to false when token is found
    }
  }, [navigate]);

  if (isLoading) {
    // Optionally show a loading spinner or message while checking the token
    return <div>Loading...</div>;
  }
  return (
    <div className="addFines">
        <Left/>
        <div className="addfi">
        <div className="addfic2"><h1>Add Fine</h1></div>
          
        <div className="adduic1"><h1>UserID</h1><Search/></div>
        <div className="adduic1"><h1>Amount</h1><Search/></div>
        <button>Add</button>
        </div>
    </div>
  )
}

export default Fines