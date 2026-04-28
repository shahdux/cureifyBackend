import React, { useState, useEffect } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back2 from '../assets/back2.svg';
import logo from '../assets/smalllogo.svg';

const EditHowItWorks = () => {
    const [loading, setLoading] = useState(true);
    const [img, setImg] = useState("");
    const [img2, setImg2] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");
    const [descriptionAr, setDescriptionAr] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getStep() {
            const res = await supabase.from("How_It_Works").select("*").eq("id", id);

            if (res.data && res.data[0]) {
                setTitleEn(res.data[0].title_en);
                setTitleAr(res.data[0].title_ar);
                setDescriptionEn(res.data[0].description_en);
                setDescriptionAr(res.data[0].description_ar);
                setImg(res.data[0].img);
                setImg2(res.data[0].img2);
            }
            setLoading(false);
        }
        getStep();
    }, [id]);

    async function saveStep() {
        let imgUrl = img;
        let img2Url = img2;

        if (img && img.name) {
            const { error } = await supabase.storage
                .from("aseers")
                .upload(`how-it-works/${img.name}`, img);

            if (error) {
                console.log("Upload error:", error);
                return;
            }

            const { data: urlData } = supabase.storage
                .from("aseers")
                .getPublicUrl(`how-it-works/${img.name}`);

            imgUrl = urlData.publicUrl;
        }

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

        const { error: updateError } = await supabase.from("How_It_Works").update({
            "title_en": titleEn,
            "title_ar": titleAr,
            "description_en": descriptionEn,
            "description_ar": descriptionAr,
            "img": imgUrl,
            "img2": img2Url,
        }).eq("id", id);

        console.log("update error:", updateError);
        navigate("/how-it-works");
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
                        <Link to="/how-it-works" style={{ textDecoration: "none" }}>
                            <img src={back2} alt="back icon" />
                        </Link>
                        <SectionTitle Sectiontitle="Edit How It Works" />
                    </div>

                    <div className='forallinputs'>

                        <div className='titlewithinput'>
                            <p className='project-image imagemargintop'>Cover Image</p>
                            <div className='imagewithbutton'>
                                <div className='inputforiumage inputforiumagec'>
                                    <input type="file" onChange={(e) => setImg(e.target.files[0])} className='input-width logininput-text' />
                                </div>
                            </div>
                        </div>

                        <div className='titlewithinput'>
                            <p className='project-image imagemargintop'>Image</p>
                            <div className='imagewithbutton'>
                                <div className='inputforiumage inputforiumagec'>
                                    <input type="file" onChange={(e) => setImg2(e.target.files[0])} className='input-width logininput-text' />
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

                        <div onClick={saveStep} className='buttoncont'>
                            <Button buttontext="Save" buttonwidth="200px" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditHowItWorks;