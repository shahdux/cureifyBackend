import React, { useState, useEffect } from 'react';
import "./Features.css";
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import HowItWorksCard from '../components/HowItWorksCard';
import StrokeButton from '../components/StrokeButton';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import logo from '../assets/smalllogo.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const HowItWorks = () => {
  const [steps, setSteps] = useState([]);
  const [confirmId, setConfirmId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getSteps = async () => {
      const res = await supabase.from("How_It_Works").select("*").order("id", { ascending: true });
      setSteps(res.data ?? []);
      setLoading(false);
    };
    getSteps();
  }, []);

  const deleteStep = async (id) => {
    await supabase.from("How_It_Works").delete().eq('id', id);
    setSteps(steps.filter((step) => step.id !== id));
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
            <p className='confirm-text'>Are you sure you want to delete this step?</p>
            <div className='confirm-buttons'>
              <button className='confirm-delete' onClick={() => deleteStep(confirmId)}>Delete</button>
              <button className='confirm-cancel' onClick={() => setConfirmId(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className='nabarwithmain'>
        <Navbar />
        <div className='mainBar'>
          <motion.div
            className='titlewsearch width85p'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={vp}
          >
            <SectionTitle Sectiontitle="How It Works" />
            <Link to="/add-how-it-works" style={{ textDecoration: "none" }}>
              <StrokeButton btext="Add" />
            </Link>
          </motion.div>

          <div className='forfeaturesdiv'>
            {steps.map((step, index) => (
              <motion.div
                className='forfeaturesdiv'
                key={step.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={vp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ cursor: 'pointer' }}
              >
                <HowItWorksCard
                  cardid={step.id}
                  cardimg={step.img}
                  cardtitle={step.title_en}
                  carddes={step.description_en}
                  onEdit={() => navigate(`/how-it-works/edit/${step.id}`)}
                  onDelete={() => setConfirmId(step.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;