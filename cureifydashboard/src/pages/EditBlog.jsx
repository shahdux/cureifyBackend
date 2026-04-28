// import React, { useState, useEffect } from 'react';
// import "./AddFeature.css"
// import Button from '../components/Button';
// import Navbar from './../components/Navbar';
// import SectionTitle from './../components/SectionTitle';
// import { supabase } from '../supabase';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditBlog = () => {
//     const [loading, setLoading] = useState(true);
//     const [image, setImage] = useState(""); 
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         async function getBlog() {
//             const res = await supabase.from("Blogs").select("*").eq("id", id);
//             setTitle(res.data[0].name_en);
//             setDescription(res.data[0].description_en);
//             setImage(res.data[0].image);
//             setLoading(false);
//         }
//         getBlog();
//     }, []);

//     async function saveBlog() {
//         let thumbnailUrl = image;

//         if (image && image.name) {
//             const { data, error } = await supabase.storage
//                 .from("aseers")
//                 .upload(`blogs/${image.name}`, image);

//             if (error) {
//                 console.log("Upload error:", error);
//                 return;
//             }

//             const { data: urlData } = supabase.storage
//                 .from("aseers")
//                 .getPublicUrl(`blogs/${image.name}`);

//             thumbnailUrl = urlData.publicUrl;
//         }

//         await supabase.from("Blogs").update({
//             "name_en": title,
//             "description_en": description,
//             "image": thumbnailUrl,
//         }).eq("id", id);

//         navigate("/blogs");
//     }

//     if (loading) return <p>Loading...</p>;

//     return ( 
//         <>
//           <div className='nabarwithmain'>
//             <Navbar/>
//             <div className='mainBar'>
//               <div className='titlewsearch'>
//                 <SectionTitle Sectiontitle="Edit Blog"/>
//               </div>
             
//               <div className='forallinputs'>
//                 <div className='titlewithinput'>
//                   <p className='project-image imagemargintop'>Image</p>
//                   <div className='imagewithbutton'>
//                     <div className='inputforiumage inputforiumagec'>
//                       <input type="file" onChange={(e) => setImage(e.target.files[0])} className='input-width logininput-text' />  
//                     </div>
//                   </div>
//                 </div>
                 
//                 <div className='titlewithinput'>
//                   <p className='project-image'>Title</p>
//                   <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='input-width logininput-text' placeholder=''/>  
//                 </div>
               
//                 <div className='titlewithinput'>
//                   <p className='project-image'>Description</p>
//                   <div className='rte1'>
//                     <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='input-width2 logininput-text' placeholder=''/>  
//                   </div>
//                 </div>

//                 <div onClick={saveBlog} className='buttoncont'>
//                   <Button buttontext="Save" buttonwidth="200px"/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//     );
// }
 
// export default EditBlog;

// import React, { useState, useEffect } from 'react';
// import "./AddFeature.css"
// import Button from '../components/Button';
// import Navbar from './../components/Navbar';
// import SectionTitle from './../components/SectionTitle';
// import { supabase } from '../supabase';
// import { useNavigate, useParams, Link } from 'react-router-dom';
// import back2 from '../assets/back2.svg';

// const EditBlog = () => {
//     const [loading, setLoading] = useState(true);
//     const [image, setImage] = useState(""); 
//     const [titleEn, setTitleEn] = useState("");
//     const [titleAr, setTitleAr] = useState("");
//     const [descriptionEn, setDescriptionEn] = useState("");
//     const [descriptionAr, setDescriptionAr] = useState("");
    
   

//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         async function getBlog() {
//             const { data, error } = await supabase.from("Blogs").select("*").eq("id", id).single();
            
//             if (data) {
//                 setTitleEn(data.name_en || "");
//                 setTitleAr(data.name_ar || "");
//                 setDescriptionEn(data.description_en || "");
//                 setDescriptionAr(data.description_ar || "");
//                 setImage(data.image || "");
               
//             }
//             setLoading(false);
//         }
//         getBlog();
//     }, [id]);

//     async function saveBlog() {
//         let thumbnailUrl = image;

//         if (image && image.name) {
//             const { data, error } = await supabase.storage
//                 .from("aseers")
//                 .upload(`blogs/${image.name}`, image);

//             if (error) {
//                 console.log("Upload error:", error);
//                 return;
//             }

//             const { data: urlData } = supabase.storage
//                 .from("aseers")
//                 .getPublicUrl(`blogs/${image.name}`);

//             thumbnailUrl = urlData.publicUrl;
//         }

//         const { error: updateError } = await supabase.from("Blogs").update({
//             "name_en": titleEn,
//             "name_ar": titleAr,
//             "description_en": descriptionEn,
//             "description_ar": descriptionAr,
//             "image": thumbnailUrl,
           
//         }).eq("id", id);

//         if (updateError) {
//             console.log("Update error:", updateError);
//         } else {
//             navigate("/blogs");
//         }
//     }

//     if (loading) return <p>Loading...</p>;

//     return ( 
//         <div className='nabarwithmain'>
//             <Navbar/>
//             <div className='mainBar'>
//                 <div className='titlewsearchgap'>
//                     <Link to="/blogs" style={{textDecoration: "none"}}>
//                         <img src={back2} alt="back icon" />
//                     </Link>
//                     <SectionTitle Sectiontitle="Edit Blog"/>
//                 </div>

//                 <div className='forallinputs'>
//                     <div className='titlewithinput'>
//                         <p className='project-image'>Cover Image</p>
//                         <div className='input-width'>
//                             <input className='inner-input' type="file" onChange={(e) => setImage(e.target.files[0])}/>
//                             {typeof image === 'string' && <p style={{fontSize: '12px', marginTop: '5px'}}>Current: {image.split('/').pop()}</p>}
//                         </div>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Title (EN)</p>
//                         <div className='input-width'>
//                             <input value={titleEn} className='inner-input' onChange={(e) => setTitleEn(e.target.value)} type="text" />
//                         </div>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Title (AR)</p>
//                         <div className='input-width'>
//                             <input value={titleAr} className='inner-input rtl-input' onChange={(e) => setTitleAr(e.target.value)} type="text" />
//                         </div>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Alt text (EN)</p>
//                         <div className='input-width'>
//                             <input  className='inner-input'  type="text" />
//                         </div>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Alt text (AR)</p>
//                         <div className='input-width'>
//                             <input  className='inner-input rtl-input'  type="text" />
//                         </div>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Description (EN)</p>
//                         <div className='input-width2'>
//                             <textarea value={descriptionEn} className='inner-textarea' onChange={(e) => setDescriptionEn(e.target.value)} />
//                         </div>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Description (AR)</p>
//                         <div className='input-width2'>
//                             <textarea value={descriptionAr} className='inner-textarea rtl-input' onChange={(e) => setDescriptionAr(e.target.value)} />
//                         </div>
//                     </div>

//                     <div className='seo-section-divider'>
//                         <SectionTitle Sectiontitle="SEO Settings"/>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Page Title</p>
//                         <div className='input-width'>
//                             <input className='inner-input'  />
//                         </div>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Meta Description</p>
//                         <div className='input-width2'>
//                             <textarea  className='inner-textarea'  />
//                         </div>
//                     </div>

//                     <div className='titlewithinput'>
//                         <p className='project-image'>Slug / URL</p>
//                         <div className='input-width'>
//                             <input  className='inner-input'  type="text" />
//                         </div>
//                     </div>

//                     <div onClick={saveBlog} className='buttoncont'>
//                         <Button buttontext="Update" buttonwidth="200px"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EditBlog;


import React, { useState, useEffect } from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { supabase } from '../supabase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back2 from '../assets/back2.svg';


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

    if (loading) return <p>Loading...</p>;

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