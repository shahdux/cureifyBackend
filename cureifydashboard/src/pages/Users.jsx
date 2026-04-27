import React, { useEffect, useState } from 'react';
import "./Users.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import StrokeButton from '../components/StrokeButton';
import TableHeader from '../components/TableHeader';
import logo from '../assets/smalllogo.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState("");

  useEffect(() => {
    async function callGetAPI() {
      const res = await supabase.from("Users").select("*");
      setProjects(res.data);
      setTimeout(() => setLoading(false), 1200);
    }
    callGetAPI();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <img src={logo} alt="loading" className="loader-logo" />
      </div>
    );
  }

  return (
    <>
      <div className='nabarwithmain'>
        <Navbar />
        <div className='mainBar'>

          <motion.div
            className='titlewsearch width90'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={vp}
          >
            <SectionTitle Sectiontitle="Users" />
            <StrokeButton btext="Add" />
          </motion.div>

          <motion.input
            className='searchcont width90'
            type="text"
            placeholder='Search'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={vp}
          />

          <div className='titlewsection2 titlewsection3'>
            <motion.div
              className='titlewsearch width90'
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={vp}
            >
              <SectionTitle textsize="24px" Sectiontitle="All Users" />
            </motion.div>

            <motion.div
              className='recentprojectsDiv'
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={vp}
            >
              <div className='users-header-row marginleft40'>
                <TableHeader tableheadertext="User" />
                <TableHeader tableheadertext="Email" />
                <TableHeader tableheadertext="Medications" />
                <TableHeader tableheadertext="Points" />
                <TableHeader tableheadertext="Status" />
              </div>

              {projects.map((project, index) => {
                return (
                  <motion.div
                    className='users-data-row'
                    key={project.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    viewport={vp}
                  >
                    <p className='projectName ucol-user'>{project.user}</p>
                    <p className='projectName ucol-email'>{project.email}</p>
                    <p className='projectName ucol-med'>{project.medications}</p>
                    <p className='projectName ucol-points'>{project.points}</p>
                    <p className='projectName ucol-status'>{project.status}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Users;