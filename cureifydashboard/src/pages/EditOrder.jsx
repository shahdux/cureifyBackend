import React, { useState, useEffect } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back2 from '../assets/back2.svg';
import logo from '../assets/smalllogo.svg';


const EditOrder = () => {
    const [loading, setLoading] = useState(true);
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [items, setItems] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [esttime, setEsttime] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getOrder() {
            const res = await supabase.from("Orders").select("*").eq("id", id);
            if (res.data && res.data[0]) {
                setCustomer(res.data[0].customer);
                setAddress(res.data[0].address);
                setItems(res.data[0].items);
                setQuantity(res.data[0].quantity);
                setPrice(res.data[0].price);
                setStatus(res.data[0].status);
                setEsttime(res.data[0].esttime);
            }
            setLoading(false);
        }
        getOrder();
    }, [id]);

    async function updateOrder() {
        const { error } = await supabase.from("Orders").update({
            "customer": customer,
            "address": address,
            "items": items,
            "quantity": quantity,
            "price": price,
            "status": status,
            "esttime": esttime,
        }).eq("id", id);

        if (error) console.log("Update error:", error);
        else navigate("/orders");
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
                    <Link to="/orders" style={{textDecoration: "none"}}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Edit Order"/>
                </div>

                <div className='forallinputs'>

                    <div className='titlewithinput'>
                        <p className='project-image'>Customer Name</p>
                        <div className='input-width'>
                            <input className='inner-input' value={customer} onChange={(e) => setCustomer(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Address</p>
                        <div className='input-width'>
                            <input className='inner-input' value={address} onChange={(e) => setAddress(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Items</p>
                        <div className='input-width'>
                            <input className='inner-input' value={items} onChange={(e) => setItems(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Quantity</p>
                        <div className='input-width'>
                            <input className='inner-input' value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Price (EGP)</p>
                        <div className='input-width'>
                            <input className='inner-input' value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Estimated Time</p>
                        <div className='input-width'>
                            <input className='inner-input' value={esttime} onChange={(e) => setEsttime(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Status</p>
                        <div className='input-width'>
                            <select className='inner-input' value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="Preparing">Preparing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>

                    <div onClick={updateOrder} className='buttoncont'>
                        <Button buttontext="Save" buttonwidth="200px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOrder;