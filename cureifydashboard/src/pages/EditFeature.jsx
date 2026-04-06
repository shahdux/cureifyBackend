import React, { useState, useEffect } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { useNavigate, useParams } from 'react-router-dom';

const EditFeature = () => {
         const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(""); 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getFeature() {
            const res = await supabase.from("Features").select("*").eq("id", id);
            
          

            setTitle(res.data[0].name_en);
            setDescription(res.data[0].des2);
            setImage(res.data[0].thumbnail);
              setLoading(false);
        }
        getFeature();
    }, []);

    async function saveFeature2() {
        let thumbnailUrl = image;

        // Only upload if a new image file was selected
        if (image && image.name) {
            const { data, error } = await supabase.storage
                .from("aseers")
                .upload(`features/${image.name}`, image);

            console.log("upload data:", data);
            console.log("upload error:", error);

            if (error) {
                console.log("Upload error:", error);
                return;
            }

            const { data: urlData } = supabase.storage
                .from("aseers")
                .getPublicUrl(`features/${image.name}`);

            thumbnailUrl = urlData.publicUrl;
        }

        const { data: updateData, error: updateError } = await supabase.from("Features").update({
            "name_en": title,
            "des2": description,
            "thumbnail": thumbnailUrl,
        }).eq("id", id);

        console.log("update data:", updateData);
        console.log("update error:", updateError);

        navigate("/features");
    }

    return ( 
        <>
          <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
              <div className='titlewsearch'>
                <SectionTitle Sectiontitle="Edit Feature"/>
              </div>
             
              <div className='forallinputs'>
                <div className='titlewithinput'>
                  <p className='project-image imagemargintop'>Image</p>
                  <div className='imagewithbutton'>
                    <div className='inputforiumage inputforiumagec'>
                      <input type="file" onChange={(e) => setImage(e.target.files[0])} className='input-width' name="" id="" />  
                    </div>
                  </div>
                </div>
                 
                <div className='titlewithinput'>
                  <p className='project-image'>Title</p>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='input-width' name="" id="" placeholder=''/>  
                </div>
               
                <div className='titlewithinput'>
                  <p className='project-image'>Description</p>
                  <div className='rte1'>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='input-width2' name="" id="" placeholder=''/>  
                  </div>
                </div>

                <div onClick={saveFeature2} className='buttoncont'>
                  <Button buttontext="Save" buttonwidth="200px"/>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}
 
export default EditFeature;