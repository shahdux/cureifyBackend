import React, { Component } from 'react';
import "./Titlewinput.css";
const Titlewinput = (props) => {
    return ( 
        <>
<div className='titlewinput' >
    <p className='inpiutTitle'>{props.inputtile}
    </p>
    <div className='inputs' style={{width: props.inputswidth}}>
        <p className='placeholder-text'>{props.placetext}</p>
    </div>
</div>

        </>
     );
}
 
export default Titlewinput;