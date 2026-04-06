import React, { Component, useEffect, useState } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
// import FeatureCard from '../component/FeatureCard';
// import { supabase } from '../Supabase';
import fimg1 from "../assets/fcard1.svg"
import { supabase } from '../supabase';
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg"
import StrokeButton from '../components/StrokeButton';
import { Link } from 'react-router-dom';
import add from '../assets/add.svg';


const Features = () => {
   const [features, setFeatures] = useState([""]);
//    const [loading, setLoading] = useState(true);
//    const [features, setFeatures] = useState("");

//    useEffect(()=>{
//          async function callGetAPI3(){
//                const res = await supabase.from("Features").select("*");
//                setFeatures(res.data);
//                setLoading(false);
//          }
//          callGetAPI3();
//    },[]);
//    if (loading) return <p>Loading...</p>;
useEffect(()=>{
  const getTaks = async ()=>{
    const res = await supabase.from("Features").select("*");
   setFeatures(res.data);

}
getTaks();
},[]);

// const deleteFeature = async (id)=>{
//       const res = await supabase.from("Features").delete().eq('id', id)
//     }
const deleteFeature = async (id) => {
  const res = await supabase.from("Features").delete().eq('id', id);
  setFeatures(features.filter((feature) => feature.id !== id));
};

// const creatFeature = async ()=>{
//  const res = await supabase.from("Features").insert([{
//   "name_en": "test"
//  }])
//  console.log(res)
// }
    return ( 
        <>
          <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
              <div className='titlewsearch width85'>
            <SectionTitle Sectiontitle="Features"/>
               <Link to="/add-feature" style={{textDecoration: "none"}}>
            <StrokeButton btext="Add" />
               </Link>
            {/* <div  className='strokeb'>
                    <img src={add} alt="add icon" />
                    <p className='stoketext'>Add</p>
                </div> */}
            </div>
            
           {/* <div className='featurecard'>
               <img src={props.featureimg} alt="feature cover img" className='featureimgclass'/>
               <div className='for2texts'>
                   <p className='featureTitle'>{props.featuretitle}</p>
                           <p className='featureDes'>{props.featuredes}</p>
               </div>
               <div className='icons'>
           
               <img src={edit} alt="edit icon" />
                   <img onClick={()=> deleteFeature} src={del} alt="delete icon" />
               </div>
           
           </div> */}

        <div className='forfeaturesdiv'>
         {
           features.map((feature)=>{
             return   <div className='forfeaturesdiv'> 
              <div className='featurecard'> 
 <img src={feature.thumbnail} alt="feature cover img" className='featureimgclass'/>
 <div className='for2texts'>
                   <p className='featureTitle'>{feature.name_en}</p>
                           <p className='featureDes'>{feature.des2}</p>
               </div>
               <div className='icons'>
           <Link to ={"/edit/"+feature.id}>
           
               <img src={edit} alt="edit icon" />
           </Link>
                   <img onClick={()=> deleteFeature(feature.id)} src={del} alt="delete icon" />
               </div>
              </div>
             
              {/* <FeatureCard
             featureimg={feature.thumbnail}
             featuretitle={feature.name_en}
             featuredes={feature.des2}
             
             /> */}
             
             </div>
            })
          }
       {/* <FeatureCard
             featureimg={fimg1}
             featuretitle="fuheu"
             featuredes="j"
             />
              <FeatureCard
             featureimg={fimg1}
             featuretitle="fuheu"
             featuredes="j"
             /> */}
        </div>
        
          </div>
          </div>
        </>
     );
}
 
export default Features;