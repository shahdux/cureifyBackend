import React, { useState, useEffect } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back2 from '../assets/back2.svg';
import logo from '../assets/smalllogo.svg';



const EditBlog = () => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");
    const [descriptionAr, setDescriptionAr] = useState("");
    
 

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getBlog() {
            const res = await supabase.from("Blogs").select("*").eq("id", id);

            if (res.data && res.data[0]) {
                setTitleEn(res.data[0].name_en);
                setTitleAr(res.data[0].name_ar);
                setDescriptionEn(res.data[0].description_en);
                setDescriptionAr(res.data[0].description_ar);
                setImage(res.data[0].image);
               
            }
            setLoading(false);
        }
        getBlog();
    }, [id]);

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

        const { data: updateData, error: updateError } = await supabase.from("Blogs").update({
            "name_en": titleEn,
            "name_ar": titleAr,
            "description_en": descriptionEn,
            "description_ar": descriptionAr,
            "image": thumbnailUrl,
           
        }).eq("id", id);

        console.log("update data:", updateData);
        console.log("update error:", updateError);

        navigate("/blogs");
    }

   if (loading) return (
           <div className="loader-container">
               <img src={logo} alt="loading" className="loader-logo" />
           </div>
       );

    return (
        <>
            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar'>
                    <div className='titlewsearchgap'>
                        <Link to="/blogs" style={{textDecoration: "none"}}>
                            <img src={back2} alt="back icon" />
                        </Link>
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
                            <p className='project-image'>Title (EN)</p>
                            <div className='input-width'>
                                <input className='inner-input' value={titleEn} onChange={(e) => setTitleEn(e.target.value)} type="text" />
                            </div>
                        </div>

                        <div className='titlewithinput'>
                            <p className='project-image'>Title (AR)</p>
                            <div className='input-width'>
                                <input className='inner-input rtl-input' value={titleAr} onChange={(e) => setTitleAr(e.target.value)} type="text" />
                            </div>
                        </div>

                        <div className='titlewithinput'>
                            <p className='project-image'>Alt text (EN)</p>
                            <div className='input-width'>
                                <input className='inner-input' />
                            </div>
                        </div>

                        <div className='titlewithinput'>
                            <p className='project-image'>Alt text (AR)</p>
                            <div className='input-width'>
                                <input className='inner-input rtl-input'  />
                            </div>
                        </div>

                        <div className='titlewithinput'>
                            <p className='project-image'>Description (EN)</p>
                            <div className='input-width2'>
                                <textarea className='inner-textarea' value={descriptionEn} onChange={(e) => setDescriptionEn(e.target.value)} />
                            </div>
                        </div>

                        <div className='titlewithinput'>
                            <p className='project-image'>Description (AR)</p>
                            <div className='input-width2'>
                                <textarea className='inner-textarea rtl-input' value={descriptionAr} onChange={(e) => setDescriptionAr(e.target.value)} />
                            </div>
                        </div>

                        <div className='seo-section-divider'>
                            <SectionTitle Sectiontitle="SEO Settings" />
                        </div>

                        <div className='titlewithinput'>
                            <p className='project-image'>Page Title</p>
                            <div className='input-width'>
                                <input className='inner-input'  />
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
                                <input className='inner-input'  />
                            </div>
                        </div>

                        <div onClick={saveBlog} className='buttoncont'>
                            <Button buttontext="Save" buttonwidth="200px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditBlog;