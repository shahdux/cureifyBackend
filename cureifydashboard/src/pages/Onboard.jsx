import React, { useEffect, useState } from 'react';
import "./Onboard.css";
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import { supabase } from '../supabase';
import view from "../assets/edit.svg";
import del from "../assets/delte.svg"
import StrokeButton from '../components/StrokeButton';
import logo from '../assets/smalllogo.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Onboard = () => {
    const [loading, setLoading] = useState(true);
    const [onboardData, setOnboardData] = useState([]);
    const [confirmId, setConfirmId] = useState(null);
      
    useEffect(() => {
        async function callGetAPI2() {
            const res = await supabase.from("Onboarding").select("*");
            setOnboardData(res.data);
            setLoading(false);
        }
        callGetAPI2();
    }, []);

    async function deleteRow(id) {
        await supabase.from("Onboarding").delete().eq("id", id);
        setOnboardData(prev => prev.filter(item => item.id !== id)); 
        setConfirmId(null);
    }

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
                        <p className='confirm-text'>Are you sure you want to delete this screen?</p>
                        <div className='confirm-buttons'>
                            <button className='confirm-delete' onClick={() => deleteRow(confirmId)}>Delete</button>
                            <button className='confirm-cancel' onClick={() => setConfirmId(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar'>
                    <motion.div 
                        className='titlewsearch width85p'
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6 }}
                        viewport={vp}
                    >
                        <SectionTitle Sectiontitle="Onboarding Screens" />
                        <Link to="/add-onboarding" style={{ textDecoration: "none" }}>
                            <StrokeButton btext="Add" />
                        </Link>
                    </motion.div>
              
                    <motion.div 
                        className="custom-table-container"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={vp}
                    >
                        <div className="table-header-row">
                            <div>Order</div>
                            <div>Title</div>
                            <div>Description</div>
                            <div>Actions</div>
                        </div>

                        {onboardData.map((item, index) => (
                            <motion.div 
                                key={item.id} 
                                className="table-body-row"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={vp}
                            >
                                <div className="cell-order">{index + 1}</div>
                                <div className="cell-title">{item.title}</div>
                                <div className="cell-description">{item.description}</div>
                                <div className="cell-actions">
                                    <Link to={"/onboard-details/" + item.id}>
                                        <img src={view} alt="view" className="icon-img" />
                                    </Link>
                                    <img 
                                        src={del} 
                                        alt="delete" 
                                        onClick={() => setConfirmId(item.id)} 
                                        className="icon-img cursor-pointer"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Onboard;