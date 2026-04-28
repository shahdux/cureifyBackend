import React, { useState, useEffect } from 'react';
import "./EditOnboarding.css";
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { supabase } from '../supabase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back2 from '../assets/back2.svg';



const EditOnboarding = () => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(""); 
    const [altEn, setAltEn] = useState("");
    const [altAr, setAltAr] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [descEn, setDescEn] = useState("");
    const [descAr, setDescAr] = useState("");
    const [btn1, setBtn1] = useState("");
    const [btn2, setBtn2] = useState("");
    
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getOnboarding() {
            const res = await supabase.from("Onboarding").select("*").eq("id", id);
            
            setImage(res.data[0].image);
            setAltEn(res.data[0].alt_en);
            setAltAr(res.data[0].alt_ar);
            setTitleEn(res.data[0].title);
            setTitleAr(res.data[0].title_ar);
            setDescEn(res.data[0].description);
            setDescAr(res.data[0].description_ar);
            setBtn1(res.data[0].button1);
            setBtn2(res.data[0].button2);
            setLoading(false);
        }
        getOnboarding();
    }, []);

    async function saveOnboarding() {
        let imageUrl = image;

        if (image && image.name) {
            const { data, error } = await supabase.storage
                .from("aseers")
                .upload(`onboarding/${image.name}`, image);

            const { data: urlData } = supabase.storage
                .from("aseers")
                .getPublicUrl(`onboarding/${image.name}`);

            imageUrl = urlData.publicUrl;
        }

        const { data: updateData, error: updateError } = await supabase.from("Onboarding").update({
            "image": imageUrl,
            "alt_en": altEn,
            "alt_ar": altAr,
            "title": titleEn,
            "title_ar": titleAr,
            "description": descEn,
            "description_ar": descAr,
            "button1": btn1,
            "button2": btn2,
        }).eq("id", id);

        navigate("/onboarding");
    }

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar'>
                    {/* <div className='titlewsearch width90'>
                        <SectionTitle Sectiontitle="Edit Onboarding" />
                    </div> */}
  <div className='w9033'>
                    <Link to="/onboarding" style={{textDecoration: "none"}}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Edit Onboarding Screen"/>
                </div>
                    <div className='onboarding-cont'>
                        <div className='onboarding-screen'>
                            <h2 className='screen-title'>Screen 1</h2>
                            
                            <div className='titlewithinput'>
                                <p className='project-image'>Image</p>
                                <input type="file" onChange={(e) => setImage(e.target.files[0])} className='input-width logininput-text w98' />
                            </div>

                            <div className='titlewithinput'>
                                <p className='project-image'>Alt text (EN)</p>
                                <input value={altEn} onChange={(e) => setAltEn(e.target.value)} type="text" className='input-width logininput-text w98' required />
                            </div>

                            <div className='titlewithinput'>
                                <p className='project-image'>Alt text (AR)</p>
                                <input value={altAr} onChange={(e) => setAltAr(e.target.value)} type="text" className='input-width logininput-text w98' required />
                            </div>

                            <div className='titlewithinput'>
                                <p className='project-image'>Title (EN)</p>
                                <input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} type="text" className='input-width logininput-text w98' required />
                            </div>

                            <div className='titlewithinput'>
                                <p className='project-image'>Title (AR)</p>
                                <input value={titleAr} onChange={(e) => setTitleAr(e.target.value)} type="text" className='input-width logininput-text w98' required />
                            </div>

                            <div className='titlewithinput'>
                                <p className='project-image'>Description (EN)</p>
                                <input value={descEn} onChange={(e) => setDescEn(e.target.value)} type="text" className='input-width logininput-text w98' required />
                            </div>

                            <div className='titlewithinput'>
                                <p className='project-image'>Description (AR)</p>
                                <input value={descAr} onChange={(e) => setDescAr(e.target.value)} type="text" className='input-width logininput-text w98' required />
                            </div>

                            <div className='titlewithinput'>
                                <p className='project-image'>CTA button 1</p>
                                <input value={btn1} onChange={(e) => setBtn1(e.target.value)} type="text" className='input-width logininput-text w98' required />
                            </div>

                            <div className='titlewithinput'>
                                <p className='project-image'>CTA button 2</p>
                                <input value={btn2} onChange={(e) => setBtn2(e.target.value)} type="text" className='input-width logininput-text w98' required />
                            </div>

                            <div onClick={saveOnboarding} className='buttoncont'>
                                <Button buttontext="Save" buttonwidth="210px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditOnboarding;