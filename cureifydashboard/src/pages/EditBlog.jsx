import React, { useState, useEffect } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(""); 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getBlog() {
            const res = await supabase.from("Blogs").select("*").eq("id", id);
            setTitle(res.data[0].name_en);
            setDescription(res.data[0].description_en);
            setImage(res.data[0].image);
            setLoading(false);
        }
        getBlog();
    }, []);

    async function saveBlog() {
        let thumbnailUrl = image;

        if (image && image.name) {
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

            thumbnailUrl = urlData.publicUrl;
        }

        await supabase.from("Blogs").update({
            "name_en": title,
            "description_en": description,
            "image": thumbnailUrl,
        }).eq("id", id);

        navigate("/blogs");
    }

    if (loading) return <p>Loading...</p>;

    return ( 
        <>
          <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
              <div className='titlewsearch'>
                <SectionTitle Sectiontitle="Edit Blog"/>
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
                  <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='input-width logininput-text' placeholder=''/>  
                </div>
               
                <div className='titlewithinput'>
                  <p className='project-image'>Description</p>
                  <div className='rte1'>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='input-width2 logininput-text' placeholder=''/>  
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
 
export default EditBlog;