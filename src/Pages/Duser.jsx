import React, { useState } from 'react';
import './DUser.css';
import Left from '../components/lefty';
import Input from '../components/Input';
import Button from '../components/BB';

function DUser() {
    const [userId, setUserId] = useState(0);

    const handleNumericChange = (setter) => (e) => {
        const value = e.target.value;
        setter(value === '' ? '' : parseInt(value, 10) || 0);
    };

    const deleteUser = async () => {
        try {
            const response = await fetch(`https://fastapitestserver.crescentp.tech/students/${userId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                alert("Failed to delete user / Entered User ID is not in the database");
            } else {
                alert("User deleted successfully");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="duser">
            <Left />
            <div className="duserr">
                <h1>Delete User</h1>
                <div className="duskr">
                    <h3>User ID:</h3>
                    <Input value={userId.toString()} onChange={handleNumericChange(setUserId)} />
                </div>
                <Button onClick={deleteUser}>Delete</Button>
            </div>
        </div>
    );
}

export default DUser;
