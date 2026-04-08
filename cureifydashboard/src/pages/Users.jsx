import React, { Component, useEffect, useState } from 'react';
import "./Users.css";

import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import StrokeButton from '../components/StrokeButton';
import TableHeader from '../components/TableHeader';



const Users = () => {
      const [loading, setLoading] = useState(true);
      const [projects, setProjects] = useState("");

      useEffect(()=>{
            async function callGetAPI(){
                  const res = await supabase.from("Users").select("*");
                  setProjects(res.data);
                  setLoading(false);
            }
            callGetAPI();
      },[]);
      if (loading) return <p>Loading...</p>;
    return ( 
          <>
         <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
            <div className='titlewsearch width90'>
            <SectionTitle Sectiontitle="Users"/>
            <StrokeButton btext="Add"/>
            </div>
         <input className='searchcont width90' type="text" name="" id="" placeholder='Search'  />
               <div className='titlewsection2 titlewsection3'>
            <div className='titlewsearch width90'>
                <SectionTitle textsize="24px" Sectiontitle="All Users"/>
            </div>
<div className='recentprojectsDiv'>
    <div className='users-header-row marginleft40'>
        <TableHeader tableheadertext="User"       />
        <TableHeader tableheadertext="Email"       />
        <TableHeader tableheadertext="Medications" />
        <TableHeader tableheadertext="Points"   />
        <TableHeader tableheadertext="Status" />
    </div>

    {projects.map((project) => {
        return (
            <div className='users-data-row' key={project.id}>
                <p className='projectName ucol-user'>{project.user}</p>
                <p className='projectName ucol-email'>{project.email}</p>
                <p className='projectName ucol-med'>{project.medications}</p>
                <p className='projectName ucol-points'>{project.points}</p>
                <p className='projectName ucol-status'>{project.status}</p>
            </div>
        );
    })}
</div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Users;