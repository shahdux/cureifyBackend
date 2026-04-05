import React, { Component } from 'react';
import "./SectionTitle.css"
const SectionTitle = (props) => {
    return (
        <>
        {/* <h1 className='sectionTitles'>{props.Sectiontitle}</h1> */}
        
                <h1 className='sectionTitles' style={{fontSize: props.textsize}}>{props.Sectiontitle}</h1>

        </>
      );
}
 
export default SectionTitle;