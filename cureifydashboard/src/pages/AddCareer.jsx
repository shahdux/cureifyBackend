import React, { useState } from 'react';
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import "./AddCareer.css";
import back2 from '../assets/back2.svg';



const AddCareer = () => {
    const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");

    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();

    async function saveCareer() {
        const { data, error } = await supabase.from("Careers").insert({
            "title_en": title,
             "shortdes": description,
            "department_en": department,
            "location_en": location,
            "salary": type,
        });

        console.log("insert data:", data);
        console.log("insert error:", error);

        navigate("/careers");
    }

    return ( 
        <>
          <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
              <div className='titlewsearchgap'>
                <Link to="/careers" style={{textDecoration: "none"}}>
                
                <img src={back2} alt="back icon" />
                </Link>
                <SectionTitle Sectiontitle="Add Career"/>
              </div>
             
              <div className='forallinputs fai2'>
                <div className='titlewithinput'>
                  <p className='project-image'>Title</p>
                  <input onChange={(e) => setTitle(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />  
                </div>

                <div className='titlewithinput'>
                  <p className='project-image'>Description</p>
                  <input onChange={(e) => setDescription(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />  
                </div>
  <div className='titlewithinput'>
                  <p className='project-image'>Department</p>
                  <input onChange={(e) => setDepartment(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />  
                </div>
                <div className='titlewithinput'>
                  <p className='project-image'>Location</p>
                  <input onChange={(e) => setLocation(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />  
                </div>

                <div className='titlewithinput'>
                  <p className='project-image'>Salary</p>
                  <input onChange={(e) => setType(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />  
                </div>

                <div onClick={saveCareer} className='buttoncont'>
                  <Button buttontext="Save" buttonwidth="200px"/>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}
 
export default AddCareer;