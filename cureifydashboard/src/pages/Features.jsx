import React, { Component, useEffect, useState } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
// import FeatureCard from '../component/FeatureCard';
// import { supabase } from '../Supabase';
import fimg1 from "../assets/fcard1.svg"


const Features = () => {
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

    return ( 
        <>
          <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
              <div className='titlewsearch width85'>
            <SectionTitle Sectiontitle="Features"/>
            </div>
            
           

        <div className='forfeaturesdiv'>
         {/* {
           features.map((feature)=>{
             return   <div className='forfeaturesdiv'>  <FeatureCard
             featureimg={feature.Thumbnail}
             featuretitle={feature.Title}
             featuredes={feature.description}
             /></div>
            })
          } */}
       <FeatureCard
             featureimg={fimg1}
             featuretitle="fuheu"
             featuredes="j"
             />
              <FeatureCard
             featureimg={fimg1}
             featuretitle="fuheu"
             featuredes="j"
             />
        </div>
        
          </div>
          </div>
        </>
     );
}
 
export default Features;