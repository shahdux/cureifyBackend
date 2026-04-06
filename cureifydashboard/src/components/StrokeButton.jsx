import React, { Component } from 'react';
import "./StrokeButton.css";

import add from '../assets/add.svg';

const StrokeButton = (props) => {
    return ( <>
    
    
    <div className='strokeb'>
        <img src={add} alt="add icon" />
        <p className='stoketext'>{props.btext}</p>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    </> );
}
 
export default StrokeButton;