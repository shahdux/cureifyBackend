import React, { useEffect, useState } from 'react';
import "./Messages.css";

import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import TableHeader from '../components/TableHeader';
import { supabase } from '../supabase';
import view from "../assets/view.svg";
import del from "../assets/delte.svg"
// import MessageModal from './MessageModal';


const Messages = (params) => {
    const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
     const [loading, setLoading] = useState(true);
            const [messages, setMessages] = useState("");
      
            useEffect(()=>{
                  async function callGetAPI2(){
                        const res = await supabase.from("Messages").select("*");
                        setMessages(res.data);
                        // console.log(res);
                        setLoading(false);
                  }
                  callGetAPI2();
            },[]);
            async function deleteRow(id){
                const res = await supabase.from("Messages").delete().eq("id",id);
                  setMessages(prev => prev.filter(message => message.id !== id)); 

            }
            if (loading) return <p>Loading...</p>;

    return ( 
        <>
        <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
                <div className='titlewsearch'>
                    <SectionTitle Sectiontitle="Messages Management"/>
                </div>
                <input className='searchcont width85' type="text" placeholder='Search' />


                <div className='titlewsection2'>
                    <div className='titlewsearch width90'>
                        <SectionTitle textsize="24px" Sectiontitle="All Messages"/>
                    </div>

                    <div className='recentprojectsDiv'>
                       
                        <div className='forfirstline marginleft90'>
                            <TableHeader tableheadertext="Sender"/>
                            <TableHeader tableheadertext="Email"/>
                            <TableHeader tableheadertext="Subject"/>
                            <TableHeader tableheadertext="Actions"/>
                        </div>

                      
                                            

                         {
      messages.map((message)=>{
        // let pathLink = "/msg-details/"+message.id;
            return    <div className='forfirstline2 marginleft90'>
                {/* <Link to={pathLink}>{message.id}</Link> */}
                            <p className='projectName'>{message.name}</p>
                            <p className='projectName'>{message.email}</p>
                            <p className='projectName padding2'>{message.subject}</p>
                            {/* <button onClick={()=>deleteRow(message.id)}>delete</button> */}

                            <div className='foractionbuttons2 projectName padding3'>
                                <Link to={"/msg-details/"+message.id}>
                                    <img 
                                    src={view} 
                                    alt="view icon" 
                                    className='viewclass'
                                    // onClick={() => setShowModal(true)}
                                />
                                </Link>
                             

                                <img onClick={()=>deleteRow(message.id)} src={del} alt="delete icon" />
                            </div>
                        </div> 
      })
    }    

                      
                    </div>
                </div>
            </div>
        </div>

        {/* {showModal && <MessageModal onClose={() => setShowModal(false)} />} */}

        </>
    );
}

export default Messages;