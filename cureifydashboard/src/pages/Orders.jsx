import React, { useEffect, useState } from 'react';
import "./Orders.css";
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import { supabase } from '../supabase';
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg";
import StrokeButton from '../components/StrokeButton';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const res = await supabase.from("Orders").select("*");
            setOrders(res.data);
        }
        getOrders();
    }, []);

    const deleteOrder = async (id) => {
        await supabase.from("Orders").delete().eq('id', id);
        setOrders(orders.filter((order) => order.id !== id));
    };

    return (
        <>
            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar'>
                    <div className='titlewsearch width85'>
                        <SectionTitle Sectiontitle="Orders" />
                        <Link to="/add-order" style={{ textDecoration: "none" }}>
                            <StrokeButton btext="Add" />
                        </Link>
                    </div>

                    <div className='forfeaturesdiv gap20'>
                        {orders.map((order) => {
                            return (
                                <div className='orderCard'>
                                    <div className='orderHeader'>
                                        <div className='orderIdStatus'>
                                            <span className='orderId'>ID: {order.id}</span>
<span className={`orderStatus ${order.status?.toLowerCase()}`}>{order.status}</span>                                        </div>
                                        <div className='orderActions'>
                                            <img src={edit} alt="edit icon" className='orderActionIcon' />
                                            <img src={del} alt="delete icon" className='orderActionIcon deleteIcon' onClick={() => deleteOrder(order.id)} />
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;