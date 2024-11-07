import React,{ useState } from 'react'
import './Dbook.css'
import Left from '../components/lefty'
import Input from '../components/Input'
import Button from '../components/BB'

function Dbook() {
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
            alert("Failed to Delete Book/Entered Book ID is not in database");
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