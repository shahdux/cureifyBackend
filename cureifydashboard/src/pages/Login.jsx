import React, { Component } from 'react';
import "./Login.css";
import loginimg from "../assets/loginimg.svg";

import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import Button from '../components/Button';
// import { Helmet } from "react-helmet"; 
const Login = () => {
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
                        <p className='username'>Username
</p>
<input className='logininput logininput-text' type="text" placeholder='Enter username' />
                    </div>
                      <div className='titlewinput'>
                        <p className='username'>Password
</p>
<input className='logininput logininput-text' type="password" placeholder='Enter Password' />
                    </div>
                    <div className='passwordSection'>
                        <div className='boxwtext'>
                            <div className='box'></div>
                            <p className='remember'>Remember me</p>
                        </div>
                        <p className='forgetpass'>Forgot password?</p>
                    </div>
                    <Link to ="/" className="no-underline">
                    <div className='loginbutton'>
                        <p className='logintext'>Login</p>
                    </div></Link>

                <p className='signup'>Dont have an account? <span className='signup2'> Sign Up</span></p>
                </div>
                <img src={loginimg} alt="illustration" className='illustrationstyle'/>
            </div>
        </div>
        
        
        
        
        
        
        </>
     );
}
 
export default Login;