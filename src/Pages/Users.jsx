import React,{useState, useEffect} from 'react'
import './Users.css'
import Left from '../components/lefty'
import BB from '../components/BB'
import { useNavigate } from 'react-router-dom';

function Users() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/");  
    }
  }, [navigate]);

 
  return (
    <div className="users">
        <Left />
        <div className="usr">
            <h1>Students</h1>
            <div className="usr1">
              <div className="usr11"><BB ll={'/admin/viewusers'}>View Students</BB></div>
              <div className="usr11"><BB ll={'/admin/users/adduser'}>Add Student</BB></div>
              <div className="usr11"><BB ll={'/admin/user/delusers'}>Delete Student</BB></div>
              {/* <div className="usr11"><BB>Update User</BB></div> */}
            </div>
        </div>
    </div>
  )
}

export default Users