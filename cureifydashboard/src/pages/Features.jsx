import React, { useEffect, useState } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';

import { supabase } from '../supabase';
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg"
import StrokeButton from '../components/StrokeButton';
import { Link } from 'react-router-dom';
import logo from '../assets/smalllogo.svg';

const Features = () => {
    const [loading, setLoading] = useState(true);
    const [features, setFeatures] = useState([]);
    const [confirmId, setConfirmId] = useState(null); 

    useEffect(() => {
        const getTaks = async () => {
            const res = await supabase.from("Features").select("*");
            setFeatures(res.data);
            setLoading(false);
        }
        getTaks();
    }, []);

    if (loading) return (
        <div className="loader-container">
            <img src={logo} alt="loading" className="loader-logo" />
        </div>
    );

    const deleteFeature = async (id) => {
        await supabase.from("Features").delete().eq('id', id);
        setFeatures(features.filter((feature) => feature.id !== id));
        setConfirmId(null); 
    };

    return (
        <>
         
            {confirmId && (
                <div className='confirm-overlay'>
                    <div className='confirm-box'>
                        <p className='confirm-text'>Are you sure you want to delete this feature?</p>
                        <div className='confirm-buttons'>
                            <button className='confirm-delete' onClick={() => deleteFeature(confirmId)}>Delete</button>
                            <button className='confirm-cancel' onClick={() => setConfirmId(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar'>
                    <div className='titlewsearch width85p'>
                        <SectionTitle Sectiontitle="Features" />
                        <Link to="/add-feature" style={{ textDecoration: "none" }}>
                            <StrokeButton btext="Add" />
                        </Link>
                    </div>

                    <div className='forfeaturesdiv'>
                        {features.map((feature) => {
                            return (
                                <div className='forfeaturesdiv' key={feature.id}>
                                    <div className='featurecard'>
                                        <img src={feature.thumbnail} alt="feature cover img" className='featureimgclass' />
                                        <div className='for2texts'>
                                            <p className='featureTitle'>{feature.name_en}</p>
                                            <p className='featureDes'>{feature.des2}</p>
                                        </div>
                                        <div className='icons'>
                                            <Link to={"/edit/" + feature.id}>
                                                <img src={edit} alt="edit icon" />
                                            </Link>
                                            <img 
                                                onClick={() => setConfirmId(feature.id)} 
                                                src={del} 
                                                alt="delete icon" 
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;