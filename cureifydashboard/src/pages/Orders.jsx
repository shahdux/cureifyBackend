import React, { useEffect, useState } from 'react';
import "./Orders.css";
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

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [confirmId, setConfirmId] = useState(null);

    useEffect(() => {
        const getOrders = async () => {
            const res = await supabase.from("Orders").select("*");
            setOrders(res.data);
            setTimeout(() => setLoading(false), 1200);
        };
        getOrders();
    }, []);

    const deleteOrder = async (id) => {
        await supabase.from("Orders").delete().eq('id', id);
        setOrders(orders.filter((order) => order.id !== id));
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
                        <p className='confirm-text'>Are you sure you want to delete this order?</p>
                        <div className='confirm-buttons'>
                            <button className='confirm-delete' onClick={() => deleteOrder(confirmId)}>Delete</button>
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
                        <SectionTitle Sectiontitle="Orders" />
                        <Link to="/add-order" style={{ textDecoration: "none" }}>
                            <StrokeButton btext="Add" />
                        </Link>
                    </motion.div>

                    <div className='forfeaturesdiv gap20'>
                        {orders.map((order, index) => (
                            <motion.div
                                className='orderCard'
                                key={order.id}
                                variants={fadeUp} initial="hidden" whileInView="visible"
                                transition={{ duration: 0.45, delay: index * 0.05 }} viewport={vp}
                                whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                            >
                                <div className='orderHeader'>
                                    <div className='orderIdStatus'>
                                        <span className='orderId'>ID: {order.id}</span>
                                        <span className={`orderStatus ${order.status?.toLowerCase()}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className='orderActions'>
                                        <Link to={"/edit-order/" + order.id}>
                                                                                        <img src={edit} alt="edit icon" />
                                                                                    </Link>
                                        <img
                                            src={del}
                                            alt="delete icon"
                                            className='orderActionIcon deleteIcon'
                                            onClick={() => setConfirmId(order.id)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                </div>

                                <div className='orderCustomer'>
                                    <p className='customerName'>{order.customer}</p>
                                    <p className='customerAddress'>📍 {order.address}</p>
                                </div>

                                <div className='orderItem'>
                                    <div className='itemRow'>
                                        <span className='itemName'>{order.items}</span>
                                        <span className='itemQty'>x{order.quantity}</span>
                                    </div>
                                    <div className='itemRow'>
                                        <span className='itemEst'>🕐 Est. {order.esttime}</span>
                                        <span className='itemPrice'>{order.price} EGP</span>
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

export default Orders;