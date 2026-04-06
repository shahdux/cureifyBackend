import React, { Component, useEffect, useState } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
// import FeatureCard from '../component/FeatureCard';
// import { supabase } from '../Supabase';
import fimg1 from "../assets/fcard1.svg"
import { supabase } from '../supabase';


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
},[])
    return ( 
        <>
          <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
              <div className='titlewsearch width85'>
            <SectionTitle Sectiontitle="Features"/>
            </div>
            
           

        <div className='forfeaturesdiv'>
         {
           features.map((feature)=>{
             return   <div className='forfeaturesdiv'>  <FeatureCard
             featureimg={feature.thumbnail}
             featuretitle={feature.name_en}
             featuredes={feature.des2}
             /></div>
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