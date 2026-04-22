import React, { useState } from 'react';
import "./Login.css";
import loginimg from "../assets/loginimg.svg";
import logo from "../assets/logo.svg";
import { useNavigate } from 'react-router-dom';

const validEmail = "cureify@gmail.com";
const validPassword = "password123";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === validEmail && password === validPassword) {
            setError('');
            navigate('/home');
        } else {
            setError('Invalid email or password');
        }
    };

    return ( 
        <>
        <div className='loginform'>
            <div className='whitecont'>
                <div className='loginpart1'>
                    <img src={logo} alt="logo" />
                    <div className='loginwtext'>
                        <h2 className='logintitle'>Login</h2>
                        <h2 className='loginsub'>Welcome back! Please login to your account.</h2>
                    </div>
                    <div className='titlewinput'>
                        <p className='username'>Email</p>
                        <input 
                            className='logininput logininput-text' 
                            type="text" 
                            placeholder='Enter email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='titlewinput'>
                        <p className='username'>Password</p>
                        <input 
                            className='logininput logininput-text' 
                            type="password" 
                            placeholder='Enter Password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className='errormsg'>{error}</p>}
                    <div className='passwordSection'>
                        <div className='boxwtext'>
                            <div className='box'></div>
                            <p className='remember'>Remember me</p>
                        </div>
                        <p className='forgetpass'>Forgot password?</p>
                    </div>
                    <div className='loginbutton' onClick={handleLogin}>
                        <p className='logintext'>Login</p>
                    </div>
                    <p className='signup'>Dont have an account? <span className='signup2'> Sign Up</span></p>
                </div>
                <img src={loginimg} alt="illustration" className='illustrationstyle'/>
            </div>
        </div>
        </>
    );
}

export default Login;