import React, { useState } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate } from 'react-router-dom';
import back2 from '../assets/back2.svg';

const AddPharmacy = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [arrival, setArrival] = useState("");
    const [rate, setRate] = useState("");

    const navigate = useNavigate();

    async function savePharmacy() {
        const { error } = await supabase.from("Pharmacies").insert({
            "name": name,
            "price": price,
            "arrival": arrival,
            "rate": rate,
        });

        if (error) console.log("Insert error:", error);
        else navigate("/pharmacies");
    }

    return ( 
        <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
                <div className='titlewsearchgap'>
                    <Link to="/pharmacies" style={{textDecoration: "none"}}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Add Pharmacy"/>
                </div>

                <div className='forallinputs'>

                    <div className='titlewithinput'>
                        <p className='project-image'>Pharmacy Name</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setName(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Delivery Price (EGP)</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setPrice(e.target.value)} type="number" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Arrival Time</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setArrival(e.target.value)} type="text" placeholder="e.g. 20-30 min" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Rating</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setRate(e.target.value)} type="number" step="0.1" max="5" placeholder="e.g. 4.5" />
                        </div>
                    </div>

                    <div onClick={savePharmacy} className='buttoncont'>
                        <Button buttontext="Save" buttonwidth="200px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPharmacy;