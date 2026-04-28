import React, { useState, useEffect } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back2 from '../assets/back2.svg';
import logo from '../assets/smalllogo.svg';

const EditPharmacy = () => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [arrival, setArrival] = useState("");
    const [rate, setRate] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getPharmacy() {
            const res = await supabase.from("Pharmacies").select("*").eq("id", id);
            if (res.data && res.data[0]) {
                setName(res.data[0].name);
                setPrice(res.data[0].price);
                setArrival(res.data[0].arrival);
                setRate(res.data[0].rate);
            }
            setLoading(false);
        }
        getPharmacy();
    }, [id]);

    async function updatePharmacy() {
        const { error } = await supabase.from("Pharmacies").update({
            "name": name,
            "price": price,
            "arrival": arrival,
            "rate": rate,
        }).eq("id", id);

        if (error) console.log("Update error:", error);
        else navigate("/pharmacies");
    }

    if (loading) return (
        <div className="loader-container">
            <img src={logo} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <div className='nabarwithmain'>
            <Navbar />
            <div className='mainBar'>
                <div className='titlewsearchgap'>
                    <Link to="/pharmacies" style={{textDecoration: "none"}}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Edit Pharmacy"/>
                </div>

                <div className='forallinputs'>

                    <div className='titlewithinput'>
                        <p className='project-image'>Pharmacy Name</p>
                        <div className='input-width'>
                            <input className='inner-input' value={name} onChange={(e) => setName(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Delivery Price (EGP)</p>
                        <div className='input-width'>
                            <input className='inner-input' value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Arrival Time</p>
                        <div className='input-width'>
                            <input className='inner-input' value={arrival} onChange={(e) => setArrival(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Rating</p>
                        <div className='input-width'>
                            <input className='inner-input' value={rate} onChange={(e) => setRate(e.target.value)} type="number" step="0.1" />
                        </div>
                    </div>

                    <div onClick={updatePharmacy} className='buttoncont'>
                        <Button buttontext="Save" buttonwidth="200px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPharmacy;