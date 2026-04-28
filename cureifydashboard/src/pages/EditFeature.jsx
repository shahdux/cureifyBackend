// import React, { useState, useEffect } from 'react';
// import "./AddFeature.css"
// import Button from '../components/Button';
// import Navbar from './../components/Navbar';
// import SectionTitle from './../components/SectionTitle';
// import { supabase } from '../supabase';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditFeature = () => {
//          const [loading, setLoading] = useState(true);
//     const [image, setImage] = useState(""); 
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         async function getFeature() {
//             const res = await supabase.from("Features").select("*").eq("id", id);
            
          

//             setTitle(res.data[0].name_en);
//             setDescription(res.data[0].des2);
//             setImage(res.data[0].thumbnail);
//               setLoading(false);
//         }
//         getFeature();
//     }, []);

//     async function saveFeature2() {
//         let thumbnailUrl = image;

//         // Only upload if a new image file was selected
//         if (image && image.name) {
//             const { data, error } = await supabase.storage
//                 .from("aseers")
//                 .upload(`features/${image.name}`, image);

//             console.log("upload data:", data);
//             console.log("upload error:", error);

//             if (error) {
//                 console.log("Upload error:", error);
//                 return;
//             }

//             const { data: urlData } = supabase.storage
//                 .from("aseers")
//                 .getPublicUrl(`features/${image.name}`);

//             thumbnailUrl = urlData.publicUrl;
//         }

//         const { data: updateData, error: updateError } = await supabase.from("Features").update({
//             "name_en": title,
//             "des2": description,
//             "thumbnail": thumbnailUrl,
//         }).eq("id", id);

//         console.log("update data:", updateData);
//         console.log("update error:", updateError);

//         navigate("/features");
//     }

//     return ( 
//         <>
//           <div className='nabarwithmain'>
//             <Navbar/>
//             <div className='mainBar'>
//               <div className='titlewsearch'>
//                 <SectionTitle Sectiontitle="Edit Feature"/>
//               </div>
             
//               <div className='forallinputs'>
//                 <div className='titlewithinput'>
//                   <p className='project-image imagemargintop'>Image</p>
//                   <div className='imagewithbutton'>
//                     <div className='inputforiumage inputforiumagec'>
//                       <input type="file" onChange={(e) => setImage(e.target.files[0])} className='input-width logininput-text' name="" id="" />  
//                     </div>
//                   </div>
//                 </div>
                 
//                 <div className='titlewithinput'>
//                   <p className='project-image'>Title</p>
//                   <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='input-width logininput-text' name="" id="" placeholder=''/>  
//                 </div>
               
//                 <div className='titlewithinput'>
//                   <p className='project-image'>Description</p>
//                   <div className='rte1'>
//                     <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='input-width2 logininput-text' name="" id="" placeholder=''/>  
//                   </div>
//                 </div>

//                 <div onClick={saveFeature2} className='buttoncont'>
//                   <Button buttontext="Save" buttonwidth="200px"/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//     );
// }
 
// export default EditFeature;

import React, { useState, useEffect } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back2 from '../assets/back2.svg';


const EditFeature = () => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");
    const [descriptionAr, setDescriptionAr] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getFeature() {
            const res = await supabase.from("Features").select("*").eq("id", id);

            setTitleEn(res.data[0].name_en);
            setTitleAr(res.data[0].name_ar);
            setDescriptionEn(res.data[0].des2);
            setDescriptionAr(res.data[0].description_ar);
            setImage(res.data[0].thumbnail);
            setLoading(false);
        }
        getFeature();
    }, []);

    async function saveFeature2() {
        let thumbnailUrl = image;

        if (image && image.name) {
            const { data, error } = await supabase.storage
                .from("aseers")
                .upload(`features/${image.name}`, image);

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
            "name_en": titleEn,
            "name_ar": titleAr,
            "des2": descriptionEn,
            "description_ar": descriptionAr,
            "thumbnail": thumbnailUrl,
        }).eq("id", id);

        console.log("update data:", updateData);
        console.log("update error:", updateError);

        navigate("/features");
    }

    return (
        <>
            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar'>
                      <div className='titlewsearchgap'>
                    <Link to="/features" style={{textDecoration: "none"}}>
                        <img src={back2} alt="back icon" />
                    </Link>
                    <SectionTitle Sectiontitle="Edit Feature"/>
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
                                <input className='inner-input rtl-input' />
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

                        <div onClick={saveFeature2} className='buttoncont'>
                            <Button buttontext="Save" buttonwidth="200px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditFeature;