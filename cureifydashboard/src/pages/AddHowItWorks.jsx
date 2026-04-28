import React, { useState } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import back2 from '../assets/back2.svg';
import { Link, useNavigate } from 'react-router-dom';

const AddHowItWorks = () => {
    const [img, setImg] = useState("");
    const [img2, setImg2] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");
    const [descriptionAr, setDescriptionAr] = useState("");

    const navigate = useNavigate();

    async function saveStep() {
        if (!img) {
            alert("Please select a main image");
            return;
        }

        const { data, error } = await supabase.storage
            .from("aseers")
            .upload(`how-it-works/${img.name}`, img);

        if (error) {
            console.log("Upload error:", error);
            return;
        }

        const { data: urlData } = supabase.storage
            .from("aseers")
            .getPublicUrl(`how-it-works/${img.name}`);

        let img2Url = "";

        if (img2 && img2.name) {
            const { error: error2 } = await supabase.storage
                .from("aseers")
                .upload(`how-it-works/${img2.name}`, img2);

            if (error2) {
                console.log("Upload error 2:", error2);
                return;
            }

            const { data: urlData2 } = supabase.storage
                .from("aseers")
                .getPublicUrl(`how-it-works/${img2.name}`);

            img2Url = urlData2.publicUrl;
        }

        const { error: insertError } = await supabase.from("How_It_Works").insert({
            "title_en": titleEn,
            "title_ar": titleAr,
            "description_en": descriptionEn,
            "description_ar": descriptionAr,
            "img": urlData.publicUrl,
            "img2": img2Url,
        });

        if (insertError) {
            console.log("Insert error:", insertError);
        } else {
            navigate("/how-it-works");
        }
    }

    return (
        <div className='nabarwithmain'>
            <Navbar />
            <div className='mainBar'>
                <div className='titlewsearchgap'>
                    <Link to="/how-it-works" style={{ textDecoration: "none" }}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Add How It Works" />
                </div>

                <div className='forallinputs'>

                    <div className='titlewithinput'>
                        <p className='project-image'>Cover Image</p>
                        <div className='input-width'>
                            <input className='inner-input' type="file" onChange={(e) => setImg(e.target.files[0])} />
                        </div>
                    </div>

                    <div className='titlewithinput'>
                        <p className='project-image'>Image</p>
                        <div className='input-width'>
                            <input className='inner-input' type="file" onChange={(e) => setImg2(e.target.files[0])} />
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
                        <SectionTitle Sectiontitle="SEO Settings" />
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
                            <input className='inner-input' type="text" />
                        </div>
                    </div>

                    <div onClick={saveStep} className='buttoncont'>
                        <Button buttontext="Save" buttonwidth="200px" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddHowItWorks;