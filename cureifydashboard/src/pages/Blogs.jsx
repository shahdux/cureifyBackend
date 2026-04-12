import React, { useEffect, useState } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg";
import StrokeButton from '../components/StrokeButton';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await supabase.from("Blogs").select("*");
      setBlogs(res.data ?? []);
    };
    getBlogs();
  }, []);

  const deleteBlog = async (id) => {
    await supabase.from("Blogs").delete().eq('id', id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
    setConfirmId(null);
  };

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
          <div className='titlewsearch width85p'>
            <SectionTitle Sectiontitle="Blogs" />
            <Link to="/add-blog" style={{ textDecoration: "none" }}>
              <StrokeButton btext="Add" />
            </Link>
          </div>

          <div className='forfeaturesdiv'>
            {blogs.map((blog) => (
              <div className='forfeaturesdiv'>
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
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Blogs;