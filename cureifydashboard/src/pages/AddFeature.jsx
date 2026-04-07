
import React, { useState } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

const AddFeature = () => {
    const [image, setImage] = useState(""); 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    async function saveFeature() {
        console.log("image:", image);
        console.log("title:", title);
        console.log("description:", description);

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

        console.log("public url:", urlData.publicUrl);

        const { data: insertData, error: insertError } = await supabase.from("Features").insert({
            "name_en": title,
            "des2": description,
            "thumbnail": urlData.publicUrl,
        });

        console.log("insert data:", insertData);
        console.log("insert error:", insertError);

        navigate("/features");
    }

    return ( 
        <>
          <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
              <div className='titlewsearch'>
                <SectionTitle Sectiontitle="Add Feature"/>
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
                  <input onChange={(e) => setTitle(e.target.value)} type="text" className='input-width' name="" id="" placeholder=''/>  
                </div>
               
                <div className='titlewithinput'>
                  <p className='project-image'>Description</p>
                  <div className='rte1'>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" className='input-width2' name="" id="" placeholder=''/>  
                  </div>
                </div>

                <div onClick={saveFeature} className='buttoncont'>
                  <Button buttontext="Save" buttonwidth="200px"/>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}
 
export default AddFeature;