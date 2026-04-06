import React from 'react';
import "./Navlink.css";

const Navlink = (props) => {
    const isActive = props.navcolor === "#00A4AA";

    return (  
        <>
          <div className='iconwithnavlink'>
            <img 
              src={props.linkicon} 
              alt="navlink icon" 
              style={{
                filter: isActive ? "brightness(0) saturate(100%) invert(51%) sepia(97%) saturate(300%) hue-rotate(138deg) brightness(95%) contrast(101%)" : "none"
              }}
            />
            <p className='navlink' style={{color: props.navcolor}}>{props.linktitle}</p>
          </div>
        </>
    );
}
 
export default Navlink;