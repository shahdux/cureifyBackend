
import React, { useEffect, useState } from 'react';
import "./Messages.css";

import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import TableHeader from '../components/TableHeader';
import { supabase } from '../supabase';
import view from "../assets/view.svg";
import del from "../assets/delte.svg";

const Messages = () => {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]); 
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function callGetAPI2() {
      const res = await supabase.from("Messages").select("*");
      setMessages(res.data || []);
      setLoading(false);
    }
    callGetAPI2();
  }, []);

  async function deleteRow(id) {
    await supabase.from("Messages").delete().eq("id", id);
    setMessages(prev => prev.filter(message => message.id !== id));
  }

 
  const filteredMessages = messages.filter((message) =>
    message.name?.toLowerCase().includes(search.toLowerCase()) ||
    message.email?.toLowerCase().includes(search.toLowerCase()) ||
    message.subject?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className='nabarwithmain'>
        <Navbar />
        <div className='mainBar'>

          <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Messages Management" />
          </div>

          {/* ✅ SEARCH INPUT */}
          <input
            className='searchcont width85'
            type="text"
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className='titlewsection2'>
            <div className='titlewsearch width90'>
              <SectionTitle textsize="24px" Sectiontitle="All Messages" />
            </div>

            <div className='recentprojectsDiv'>

              <div className='forfirstline marginleft90'>
                <TableHeader tableheadertext="Sender" />
                <TableHeader tableheadertext="Email" />
                <TableHeader tableheadertext="Subject" />
                <TableHeader tableheadertext="Actions" />
              </div>

             
              {filteredMessages.length === 0 ? (
                <p style={{ marginLeft: "90px" }}>No messages found</p>
              ) : (
                filteredMessages.map((message) => {
                  return (
                    <div key={message.id} className='forfirstline2 marginleft90'>
                      <p className='projectName'>{message.name}</p>
                      <p className='projectName'>{message.email}</p>
                      <p className='projectName padding2'>{message.subject}</p>

                      <div className='foractionbuttons2 projectName padding3'>
                        <Link to={"/msg-details/" + message.id}>
                          <img
                            src={view}
                            alt="view icon"
                            className='viewclass'
                          />
                        </Link>

                        <img
                          onClick={() => deleteRow(message.id)}
                          src={del}
                          alt="delete icon"
                        />
                      </div>
                    </div>
                  );
                })
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;