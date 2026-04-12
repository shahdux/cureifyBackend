import React, { useState } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import back2 from '../assets/back2.svg';

import { Link, useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const [image, setImage] = useState(""); 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    async function saveBlog() {
        const { data, error } = await supabase.storage
            .from("aseers")
            .upload(`blogs/${image.name}`, image);

        if (error) {
            console.log("Upload error:", error);
            return;
        }

        const { data: urlData } = supabase.storage
            .from("aseers")
            .getPublicUrl(`blogs/${image.name}`);

        await supabase.from("Blogs").insert({
            "name_en": title,
            "description_en": description,
            "image": urlData.publicUrl,
        });

        navigate("/blogs");
    }

    return ( 
        <>
          <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
              
               <div className='titlewsearchgap'>
                <Link to="/blogs" style={{textDecoration: "none"}}>
                
                <img src={back2} alt="back icon" />
                </Link>
                <SectionTitle Sectiontitle="Add Blog"/>
              </div>
             
              <div className='forallinputs'>
                <div className='titlewithinput'>
                  <p className='project-image imagemargintop'>Image</p>
                  <div className='imagewithbutton'>
                    <div className='inputforiumage inputforiumagec'>
                      <input type="file" onChange={(e) => setImage(e.target.files[0])} className='input-width logininput-text' />  
                    </div>
                  </div>
                </div>
                 
                <div className='titlewithinput'>
                  <p className='project-image'>Title</p>
                  <input onChange={(e) => setTitle(e.target.value)} type="text" className='input-width logininput-text' placeholder='' />  
                </div>
               
                <div className='titlewithinput'>
                  <p className='project-image'>Description</p>
                  <div className='rte1'>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" className='input-width2 logininput-text' placeholder=''/>  
                  </div>
                </div>

                <div onClick={saveBlog} className='buttoncont'>
                  <Button buttontext="Save" buttonwidth="200px"/>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}
 
export default AddBlog;