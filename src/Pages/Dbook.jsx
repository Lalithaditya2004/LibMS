import React,{ useState , useEffect} from 'react'
import './Dbook.css'
import Left from '../components/lefty'
import Input from '../components/Input'
import Button from '../components/BB'
import { useNavigate } from 'react-router-dom';


function Dbook() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        navigate("/");  // Redirect to login if no token
      }
    }, [navigate]);
  
    
    const [bkid, setbkid] = useState(0);
    const handleNumericChange = (setter) => (e) => {
        const value = e.target.value;
        setter(value === '' ? '' : parseInt(value, 10) || 0);
      };
    const delbk = async () =>{
        try{
        const response = await fetch(`https://fastapitestserver.crescentp.tech/books/${bkid}`,{
            method: 'DELETE',
        });

        
        
        if(!response.ok) {
          const responseData = await response.json();
          alert(responseData.detail);
            // alert("Failed to Delete Book/Entered Book ID is not in database");
        }
        else{
            alert("Deleted Book Succesfully");
        }


        }
        catch(error){
            console.error(error);
        }

    }

  return (
    <div className="dbook">
        <Left/>
        <div className="dbookr">
            <h1>Delete Book</h1>
            <div className="dbkr">
                <h3>Book ID:</h3>
                <Input value={bkid.toString()} onChange={handleNumericChange(setbkid)}/>
            </div>
            <Button onClick={delbk}>Delete</Button>
        </div>
    </div>
  )
}

export default Dbook