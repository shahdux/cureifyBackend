import React, { useState } from 'react';
import "./AddFeature.css"; 
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate } from 'react-router-dom';
import back2 from '../assets/back2.svg';

const AddOnboarding = () => {
    const [image, setImage] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");
    const [btn1, setBtn1] = useState("");
    const [btn2, setBtn2] = useState("");

    const navigate = useNavigate();

    async function saveOnboarding() {
        console.log("Save function triggered");

        
        const { data, error } = await supabase.storage
            .from("aseers")
            .upload(`onboarding/${image.name}`, image);

        if (error) {
            console.log("Upload error:", error);
            return;
        }

        const { data: urlData } = supabase.storage
            .from("aseers")
            .getPublicUrl(`onboarding/${image.name}`);
        
        const imageUrl = urlData.publicUrl;
        

        const { data: insertData, error: insertError } = await supabase.from("Onboarding").insert({
            "image": imageUrl, // Commented out for testing
            "title": titleEn,
           
            "description": descriptionEn,
           
            "button1": btn1,
            "button2": btn2,
        });

        if (insertError) {
            console.log("Insert error details:", insertError);
            alert("Error saving: " + insertError.message);
        } else {
            console.log("Insert success:", insertData);
            navigate("/onboarding");
        }
    }

    return ( 
        <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
                <div className='titlewsearchgap'>
                    <Link to="/onboarding" style={{textDecoration: "none"}}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Add Onboarding Screen"/>
                </div>

                <div className='forallinputs'>
                    <div className='titlewithinput'>
                        <p className='project-image'>Screen Image</p>
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
                            <input className='inner-input rtl-input'  type="text" />
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
                            <textarea className='inner-textarea rtl-input'  />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>CTA Button 1</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setBtn1(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>CTA Button 2</p>
                        <div className='input-width'>
                            <input className='inner-input' onChange={(e) => setBtn2(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div onClick={saveOnboarding} className='buttoncont'>
                        <Button buttontext="Save Screen" buttonwidth="200px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddOnboarding;