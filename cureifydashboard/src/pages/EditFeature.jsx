import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
const EditFeature = () => {
    const {id} = useParams();
    return ( <>
    {id}
    
    
    </> );
}
 
export default EditFeature;