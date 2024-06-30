import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {
    const [username, setUsername] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [passwordMatchMessage, setPasswordMatchMessage] = useState('');
    const [isPasswordMatchVisible, setIsPasswordMatchVisible] = useState(false);
    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('New Password and Confirm Password do not match!');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/forgot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Username: username, OldPassword: oldPassword, NewPassword: newPassword }),
            });

            if (response.ok) {
                toast.success('password changed successful!');
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error(errorData.message);
                alert('Failed to change password');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const passCheckHandler = (e) => {
        const confirmPasswordValue = e.target.value;
        setConfirmPassword(confirmPasswordValue);

        if (newPassword === confirmPasswordValue) {
            setPasswordMatchMessage('Passwords match');
            setIsPasswordMatchVisible(true);
        } else {
            setPasswordMatchMessage('Passwords do not match');
            setIsPasswordMatchVisible(true);
        }
    };
    return (
        <div className='edit-emp-form-container '>
            
            <form onSubmit={handleChangePassword} className='edit-emp-form' >
            <h1 className="form-title">Forgot Password</h1>
                <input
                    type="text"
                    placeholder="Username"
                    className="form-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>

                <input
                    type="password"
                    placeholder="Old Password"
                    value={oldPassword}
                    className="form-input"
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <br></br>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    className="form-input"
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <br></br>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    className="form-input"
                    onChange={passCheckHandler}
                />
                {isPasswordMatchVisible && (
                    <div className={`password-match-message ${newPassword === confirmPassword ? 'success' :" "}`}>
                        {passwordMatchMessage}
                    </div>
                )}
                <br></br>
                <button type="submit" className="form-submit">Submit</button>
            </form>
        </div >
    )
}

export default Forgot
