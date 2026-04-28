import React from 'react';
import "./HowItWorksCard.css";
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg";

const HowItWorksCard = (props) => {
    return (
        <>
            <div className='howItWorksCard'>
                <div className='howItWorksImgWrapper'>
                    <img src={props.cardimg} alt="how it works cover img" className='howItWorksImg'/>
                    <div className='howItWorksIcons'>
                        <img src={edit} alt="edit icon" onClick={() => props.onEdit(props.cardid)}/>
                        <img src={del} alt="delete icon" onClick={() => props.onDelete(props.cardid)}/>
                    </div>
                </div>
                <div className='howItWorksTexts'>
                    <p className='howItWorksTitle'>{props.cardtitle}</p>
                    <p className='howItWorksDes'>{props.carddes}</p>
                </div>
            </div>
        </>
    );
}

export default HowItWorksCard;