import React, { useEffect, useState } from 'react';
import "./Messages.css";
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import TableHeader from '../components/TableHeader';
import { supabase } from '../supabase';
import view from "../assets/view.svg";
import del from "../assets/delte.svg";
import logo from '../assets/smalllogo.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Messages = () => {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [confirmId, setConfirmId] = useState(null);

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
    setConfirmId(null);
  }

  const filteredMessages = messages.filter((message) =>
    message.name?.toLowerCase().includes(search.toLowerCase()) ||
    message.email?.toLowerCase().includes(search.toLowerCase()) ||
    message.subject?.toLowerCase().includes(search.toLowerCase())
  );

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
            <p className='confirm-text'>Are you sure you want to delete this message?</p>
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
            className='titlewsearch'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={vp}
          >
            <SectionTitle Sectiontitle="Messages Management" />
          </motion.div>

          <motion.input
            className='searchcont width85'
            type="text"
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={vp}
          />

          <div className='titlewsection2'>
            <motion.div
              className='titlewsearch width90'
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={vp}
            >
              <SectionTitle textsize="24px" Sectiontitle="All Messages" />
            </motion.div>

            <motion.div
              className='recentprojectsDiv'
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={vp}
            >
              <div className='forfirstline marginleft90'>
                <TableHeader tableheadertext="Sender" />
                <TableHeader tableheadertext="Email" />
                <TableHeader tableheadertext="Subject" />
                <TableHeader tableheadertext="Actions" />
              </div>

              {filteredMessages.length === 0 ? (
                <p style={{ marginLeft: "90px" }}>No messages found</p>
              ) : (
                filteredMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    className='forfirstline2 marginleft90'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    viewport={vp}
                  >
                    <p className='projectName'>{message.name}</p>
                    <p className='projectName'>{message.email}</p>
                    <p className='projectName padding2'>{message.subject}</p>

                    <div className='foractionbuttons2 projectName padding3'>
                      <Link to={"/msg-details/" + message.id}>
                        <img src={view} alt="view icon" className='viewclass' />
                      </Link>
                      <img
                        onClick={() => setConfirmId(message.id)}
                        src={del}
                        alt="delete icon"
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;