import React, { Component } from 'react';
import "./TableHeader.css";
const TableHeader = (props) => {
    return ( 
        <>
        <h3 className='tableheader' style={{width: props.tableheaderwidth}}>{props.tableheadertext}</h3>
        </>
     );
}
 
export default TableHeader;