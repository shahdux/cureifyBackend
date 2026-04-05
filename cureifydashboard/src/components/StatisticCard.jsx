import React, { Component } from 'react';
import "./StatisticCard.css"
const StatisticCard = (props) => {
    return ( 
        <>
        <div className='statCard'>
            <p className='statTitle'>{props.stattitle}</p>
                        <p className='statNumber'>{props.statnumber}</p>

        </div>
        </>
     );
}
 
export default StatisticCard;