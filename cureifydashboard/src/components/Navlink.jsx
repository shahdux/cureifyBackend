import React, { Component } from 'react';
import "./Navlink.css";
const Navlink = (props) => {
    return (  
        <>
          <div className='iconwithnavlink'>
            <img src={props.linkicon} alt="navlink icon" />
               {/* <div className="navlink-icon">
                {props.linkicon}  
            </div> */}
            <p className='navlink' style={{color: props.navcolor}}>{props.linktitle}</p>
        </div>
        
        
        
        </>
    );
}
 
export default Navlink;


