import React from 'react'
import './Users.css'
import Left from '../components/lefty'
import BB from '../components/BB'

function Users() {
  return (
    <div className="users">
        <Left />
        <div className="usr">
            <h1>Users</h1>
            <div className="usr1">
              <div className="usr11"><BB ll={'/admin/viewusers'}>View Users</BB></div>
              <div className="usr11"><BB ll={'/admin/users/adduser'}>Add User</BB></div>
              <div className="usr11"><BB ll={'/admin/user/delusers'}>Delete User</BB></div>
              {/* <div className="usr11"><BB>Update User</BB></div> */}
            </div>
        </div>
    </div>
  )
}

export default Users