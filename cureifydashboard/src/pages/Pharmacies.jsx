import React, { useEffect, useState } from 'react';
import "./Orders.css"; // Reusing Orders.css for the cards
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import { supabase } from '../supabase';
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg";
import StrokeButton from '../components/StrokeButton';
import { Link } from 'react-router-dom';
import logo from '../assets/smalllogo.svg';

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Pharmacies = () => {
    const [pharmacies, setPharmacies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [confirmId, setConfirmId] = useState(null);

    useEffect(() => {
        const getPharmacies = async () => {
            const res = await supabase.from("Pharmacies").select("*");
            setPharmacies(res.data || []);
            setTimeout(() => setLoading(false), 1000);
        };
        getPharmacies();
    }, []);

    const deletePharmacy = async (id) => {
        await supabase.from("Pharmacies").delete().eq('id', id);
        setPharmacies(pharmacies.filter((p) => p.id !== id));
        setConfirmId(null);
    };

    if (loading) return (
        <div className="loader-container">
            <img src={logo} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            {confirmId && (
                <div className='confirm-overlay'>
                    <div className='confirm-box'>
                        <p className='confirm-text'>Are you sure you want to delete this pharmacy?</p>
                        <div className='confirm-buttons'>
                            <button className='confirm-delete' onClick={() => deletePharmacy(confirmId)}>Delete</button>
                            <button className='confirm-cancel' onClick={() => setConfirmId(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar'>
                    <motion.div
                        className='titlewsearch width85'
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        transition={{ duration: 0.6 }} viewport={vp}
                    >
                        <SectionTitle Sectiontitle="Pharmacies" />
                        <Link to="/add-pharmacy" style={{ textDecoration: "none" }}>
                            <StrokeButton btext="Add" />
                        </Link>
                    </motion.div>

                    <div className='forfeaturesdiv gap20'>
                        {pharmacies.map((pharmacy, index) => (
                            <motion.div
                                className='orderCard'
                                key={pharmacy.id}
                                variants={fadeUp} initial="hidden" whileInView="visible"
                                transition={{ duration: 0.45, delay: index * 0.05 }} viewport={vp}
                                whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                            >
                                <div className='orderHeader'>
                                    
                                     <div className='orderCustomer'>
                                    <p className='customerName'>{pharmacy.name}</p>
                                    <p className='customerAddress'>📍 Pharmacy Location</p>
                                </div>
                                    <div className='orderActions'>
                                        <Link to={"/edit-pharmacy/" + pharmacy.id}>
                                            <img src={edit} alt="edit icon" />
                                        </Link>
                                        <img
                                            src={del}
                                            alt="delete icon"
                                            className='orderActionIcon deleteIcon'
                                            onClick={() => setConfirmId(pharmacy.id)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                </div>

                               <div className='orderIdStatus'>
                                        <span className={`orderStatus rating-chip padding00`}>
                                            ⭐ {pharmacy.rate}
                                        </span>
                                    </div>

                                <div className='orderItem'>
                                    <div className='itemRow'>
                                        <span className='itemName'>Delivery Fee</span>
                                        <span className='itemPrice'>{pharmacy.price} EGP</span>
                                    </div>
                                    <div className='itemRow'>
                                        <span className='itemEst'>🕐 Arrival: {pharmacy.arrival}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pharmacies;