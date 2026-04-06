import React, { Component } from 'react';
import "./FeatureCard.css";
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg"

const FeatureCard = (props) => {
    // const deleteFeature = (id)=>{
    //     console.log(id)
    // }
    return ( 
<>
<div className='featurecard'>
    <img src={props.featureimg} alt="feature cover img" className='featureimgclass'/>
    <div className='for2texts'>
        <p className='featureTitle'>{props.featuretitle}</p>
                <p className='featureDes'>{props.featuredes}</p>
    </div>
    <div className='icons'>

    <img src={edit} alt="edit icon" />
        <img src={del} alt="delete icon" />
    </div>

</div>
</>
     );
}
 
export default FeatureCard;