import React from 'react'
import Home from "./home"
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom';
import "./form.css"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const [name, setName] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Username: username, Password: password }),
            });

            if (response.ok) {
                const name = await response.json();
                setName(name);
                console.log(name)
                setShowSuccessMessage(true);
                
                 
            } else {
                const errorData = await response.json();
                console.error(errorData.message);
                toast.error('Invalid username or password. Please try again.', {
                    
                });
                
                
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className='edit-emp-form-container '>
            {showSuccessMessage ? (
                <Home name={name}/>):(
            <form onSubmit={handleLogin} className='edit-emp-form'> 
                <h1 className="form-title">LOGIN </h1>
                <input
                    type="text"
                    placeholder="Username"
                    className="form-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" className="form-submit">Login</button>
                <Link to="/forgot" style={{ textDecoration: 'none' }}>
                <button type="button" className="form-submit">Forgot Password</button>
                </Link>
                
            </form>
                )}
            

        </div>
    )
}

export default Login
