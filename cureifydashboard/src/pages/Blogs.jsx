import React, { useEffect, useState } from 'react';
import "./Features.css";
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg";
import StrokeButton from '../components/StrokeButton';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import logo from '../assets/smalllogo.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [confirmId, setConfirmId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await supabase.from("Blogs").select("*");
      setBlogs(res.data ?? []);
      setLoading(false);
    };
    getBlogs();
  }, []);

  const deleteBlog = async (id) => {
    await supabase.from("Blogs").delete().eq('id', id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
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
            <p className='confirm-text'>Are you sure you want to delete this blog?</p>
            <div className='confirm-buttons'>
              <button className='confirm-delete' onClick={() => deleteBlog(confirmId)}>Delete</button>
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
            <SectionTitle Sectiontitle="Blogs" />
            <Link to="/add-blog" style={{ textDecoration: "none" }}>
              <StrokeButton btext="Add" />
            </Link>
          </motion.div>

          <div className='forfeaturesdiv'>
            {blogs.map((blog, index) => (
              <motion.div 
                className='forfeaturesdiv' 
                key={blog.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={vp}
                whileHover={{ scale: 1.02 }} // Added hover effect
                whileTap={{ scale: 0.98 }}   // Added tap effect
                style={{ cursor: 'pointer' }}
              >
                <div className='featurecard'>
                  <img src={blog.image} alt="blog cover img" className='featureimgclass' />
                  <div className='for2texts'>
                    <p className='featureTitle'>{blog.name_en}</p>
                    <p className='featureDes'>{blog.description_en}</p>
                  </div>
                  <div className='icons'>
                    <Link to={"/edit-blog/" + blog.id}>
                      <img src={edit} alt="edit icon" />
                    </Link>
                    <img onClick={() => setConfirmId(blog.id)} src={del} alt="delete icon" style={{ cursor: 'pointer' }} />
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

export default Blogs;