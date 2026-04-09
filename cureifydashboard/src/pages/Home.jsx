import React, { Component, useEffect, useState } from 'react';
import "./Home.css"
import SectionTitle from '../components/SectionTitle';
import StatisticCard from '../components/StatisticCard';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.svg';



const Home = () => {
    //   const [loading, setLoading] = useState(true);
    //       const [projects, setProjects] = useState("");
    
    //       useEffect(()=>{
    //             async function callGetAPI(){
    //                   const res = await supabase.from("Projects").select("*");
    //                   setProjects(res.data);
    //                   // console.log(res);
    //                   setLoading(false);
    //             }
    //             callGetAPI();
    //       },[]);
    //       if (loading) return <p>Loading...</p>;
    return ( 
        <>
        <div className='nabarwithmain'>
    <Navbar />
        <div className='mainBar'>
            <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Welcome back, Shahd"/>
            <input className='searchcont' type="text" name="" id="" placeholder='Search' />

            </div>
            <div className='forstatCards'>
                <StatisticCard stattitle="App downloads"
                statnumber="20"
                />
                  <StatisticCard stattitle="Total Users"
                statnumber="2"
                />  <StatisticCard stattitle="Features"
                statnumber="5"
                />  <StatisticCard stattitle="Pharmacy Orders"
                statnumber="430"
                />
            </div>
            <div className='titlewsection2'>
           
 <div className='dashboardPanelsGrid'>
 
                <div className='dashboardPanel'>
                    <div className='panelHeader'>
                        <span className='panelTitle'>Recent Orders</span>
                                       <Link to="/orders" style={{textDecoration: "none"}}>

                        <div className='panelViewAll'>View All</div> </Link>
                    </div>
 
                    <div className='dashboardRow'>
                        <div>
                            <p className='rowTitle'>ORD-001</p>
                            <p className='rowSub'>Ahmed Hassan</p>
                            <p className='rowTime'>10m ago</p>
                        </div>
                        <div className='rowRight'>
                            <span className='rowAmount'>180.00 EGP</span>
                            <span className='rowBadge' style={{ background: "#d1fae5", color: "#059669" }}>Delivered</span>
                        </div>
                    </div>
 
                    <div className='dashboardRow'>
                        <div>
                            <p className='rowTitle'>ORD-002</p>
                            <p className='rowSub'>Fatima Ali</p>
                            <p className='rowTime'>25m ago</p>
                        </div>
                        <div className='rowRight'>
                            <span className='rowAmount'>145.00EGP</span>
                            <span className='rowBadge' style={{ background: "#dbeafe", color: "#2563eb" }}>Processing</span>
                        </div>
                    </div>
 
                    <div className='dashboardRow'>
                        <div>
                            <p className='rowTitle'>ORD-003</p>
                            <p className='rowSub'>Omar Khalil</p>
                            <p className='rowTime'>1h ago</p>
                        </div>
                        <div className='rowRight'>
                            <span className='rowAmount'>120.00 EGP</span>
                            <span className='rowBadge' style={{ background: "#fef3c7", color: "#d97706" }}>Pending</span>
                        </div>
                    </div>
 
                </div>
 
                <div className='dashboardPanel'>
                    <div className='panelHeader'>
                        <span className='panelTitle'>Recent Messages</span>
                                                                <Link to="/messages" style={{textDecoration: "none"}}>

                        <div className='panelViewAll'>View All</div> </Link>
                    </div>
 
                    <div className='dashboardRow'>
                        <div>
                            <p className='rowTitle'>Nadeen Yasser</p>
                            <p className='rowSub'>Collaboration Request</p>
                            <p className='rowTime'>NadYssr@gmail.com</p>
                        </div>
                        <p className='rowTime'>Nov 22, 2025</p>
                    </div>
 
                    <div className='dashboardRow'>
                        <div>
                            <p className='rowTitle'>Nadeen Yasser</p>
                            <p className='rowSub'>Collaboration Request</p>
                            <p className='rowTime'>NadYssr@gmail.com</p>
                        </div>
                        <p className='rowTime'>Nov 22, 2025</p>
                    </div>
 
                    <div className='dashboardRow'>
                        <div>
                            <p className='rowTitle'>Nadeen Yasser</p>
                            <p className='rowSub'>Collaboration Request</p>
                            <p className='rowTime'>NadYssr@gmail.com</p>
                        </div>
                        <p className='rowTime'>Nov 22, 2025</p>
                    </div>
 
                </div>
 
            
 
            </div>
                  </div>
               <div className='titlewsection2'>
                <div className='recentprojectsDiv'>
                    <p className='panelTitle' style={{ alignSelf: 'flex-start', paddingLeft: '30px' }}>Recent Activity</p>
 
                    <div className='activityRow'>
                        <div className='activityIcon'>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                        </div>
                        <div className='activityInfo'>
                            <p className='activityTitle'>New user registered</p>
                            <p className='activitySub'>Ahmed Hassan</p>
                        </div>
                        <p className='activityTime'>2 minutes ago</p>
                    </div>
 
                    <div className='activityRow'>
                        <div className='activityIcon'>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        </div>
                        <div className='activityInfo'>
                            <p className='activityTitle'>Pharmacy order completed</p>
                            <p className='activitySub'>Sarah Mohamed</p>
                        </div>
                        <p className='activityTime'>15 minutes ago</p>
                    </div>
 
                    <div className='activityRow'>
                        <div className='activityIcon'>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        </div>
                        <div className='activityInfo'>
                            <p className='activityTitle'>Blood test uploaded</p>
                            <p className='activitySub'>Mohamed Ali</p>
                        </div>
                        <p className='activityTime'>1 hour ago</p>
                    </div>
 
                </div>
            </div>
        </div>
            
        </div>
        
        
        </>
     );
}
 
export default Home;