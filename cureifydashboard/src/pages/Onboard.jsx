import React, { useEffect, useState } from 'react';
import "./Onboard.css";

import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import TableHeader from '../components/TableHeader';
import { supabase } from '../supabase';
import view from "../assets/edit.svg";
import del from "../assets/delte.svg"
import StrokeButton from '../components/StrokeButton';

const Onboard = (params) => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [onboardData, setOnboardData] = useState("");
      
    useEffect(()=>{
        async function callGetAPI2(){
            const res = await supabase.from("Onboarding").select("*");
            setOnboardData(res.data);
            setLoading(false);
        }
        callGetAPI2();
    },[]);

    async function deleteRow(id){
        if (window.confirm("Are you sure you want to delete this?")) {
            const res = await supabase.from("Onboarding").delete().eq("id", id);
            setOnboardData(prev => prev.filter(item => item.id !== id)); 
        }
    }

    if (loading) return <p>Loading...</p>;

    return ( 
        <>
        <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
                <div className='titlewsearch width85p'>
                    <SectionTitle Sectiontitle="Onboarding Screens"/>
                     <Link to="/add-onboarding" style={{textDecoration: "none"}}>
            <StrokeButton btext="Add" />
               </Link>
                </div>

              
            <div className="custom-table-container">
                
              
                <div className="table-header-row">
                    <div>Order</div>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Actions</div>
                </div>

             
                {onboardData.map((item, index) => (
                    <div key={item.id} className="table-body-row">
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
                                onClick={() => deleteRow(item.id)} 
                                className="icon-img cursor-pointer"
                            />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default Onboard;