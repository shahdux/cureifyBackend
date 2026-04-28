
import React, { useState } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate } from 'react-router-dom';
import back2 from '../assets/back2.svg';


const AddFeature = () => {
  const [image, setImage] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleAr, setTitleAr] = useState("");
 
    const [descriptionEn, setDescriptionEn] = useState("");
    const [descriptionAr, setDescriptionAr] = useState("");
   

    const navigate = useNavigate();

    // async function saveFeature() {
    //     const { error: insertError } = await supabase.from("Features").insert({
    //         "name_en": titleEn,
    //         "name_ar": titleAr,
            
    //         "des2": descriptionEn,
    //         "description_ar": descriptionAr,
           
    //     });

    //     if (insertError) console.log("Insert error:", insertError);
    //     else navigate("/features");
    // }
async function saveFeature() {
    console.log("image:", image);

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
        "name_en": titleEn,
        "name_ar": titleAr,
        "des2": descriptionEn,
        "description_ar": descriptionAr,
        "thumbnail": urlData.publicUrl,
    });

    console.log("insert data:", insertData);
    console.log("insert error:", insertError);

    navigate("/features");
}
    return ( 
        <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
                <div className='titlewsearchgap'>
                    <Link to="/features" style={{textDecoration: "none"}}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Add Feature"/>
                </div>

                <div className='forallinputs'>

                  <div className='titlewithinput'>
                         <p className='project-image'>Cover Image</p>
                         <div className='input-width'>
                             <input className='inner-input' type="file" onChange={(e) => setImage(e.target.files[0])}/>
                         </div>
                     </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Title (EN)</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setTitleEn(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Title (AR)</p>
                        <div className='input-width'>
                            <input className='inner-input rtl-input' onChange={(e) => setTitleAr(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Alt text (EN)</p>
                        <div className='input-width'>
                            <input className='inner-input'/>
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Alt text (AR)</p>
                        <div className='input-width'>
                            <input className='inner-input rtl-input'/>
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Description (EN)</p>
                        <div className='input-width2'>
                            <textarea className='inner-textarea' onChange={(e) => setDescriptionEn(e.target.value)} />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Description (AR)</p>
                        <div className='input-width2'>
                            <textarea className='inner-textarea rtl-input' onChange={(e) => setDescriptionAr(e.target.value)} />
                        </div>
                    </div>

                    <div className='seo-section-divider'>
                        <SectionTitle Sectiontitle="SEO Settings"/>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Page Title</p>
                        <div className='input-width'>
                            <input className='inner-input' />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Meta Description</p>
                        <div className='input-width2'>
                            <textarea className='inner-textarea' />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Slug / URL</p>
                        <div className='input-width'>
                            <input className='inner-input' />
                        </div>
                    </div>

                    <div onClick={saveFeature} className='buttoncont'>
                        <Button buttontext="Save" buttonwidth="200px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFeature;
