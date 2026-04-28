import React, { useState } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate } from 'react-router-dom';
import back2 from '../assets/back2.svg';

const AddOrder = () => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [items, setItems] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("Pending");
    const [esttime, setEsttime] = useState("");

    const navigate = useNavigate();

    async function saveOrder() {
        const { error } = await supabase.from("Orders").insert({
            "customer": customer,
            "address": address,
            "items": items,
            "quantity": quantity,
            "price": price,
            "status": status,
            "esttime": esttime,
        });

        if (error) console.log("Insert error:", error);
        else navigate("/orders");
    }

    return ( 
        <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
                <div className='titlewsearchgap'>
                    <Link to="/orders" style={{textDecoration: "none"}}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Add Order"/>
                </div>

                <div className='forallinputs'>

                    <div className='titlewithinput'>
                        <p className='project-image'>Customer Name</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setCustomer(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Address</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setAddress(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Items</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setItems(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Quantity</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setQuantity(e.target.value)} type="number" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Price (EGP)</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setPrice(e.target.value)} type="number" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Estimated Time</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setEsttime(e.target.value)} type="text" placeholder="e.g. 30-45 mins" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Status</p>
                        <div className='input-width'>
                            <select className='inner-input' onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="Preparing">Preparing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>

                    <div onClick={saveOrder} className='buttoncont'>
                        <Button buttontext="Save" buttonwidth="200px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddOrder;