import React, { useState, useEffect } from 'react';
import "./AddCareer.css"
import Button from '../components/Button';
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back2 from '../assets/back2.svg';
import { supabase } from '../supabase';

const EditCareer = () => {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getCareer() {
            const res = await supabase.from("Careers").select("*").eq("id", id);
            setTitle(res.data[0].title_en);
            setDescription(res.data[0].shortdes);
            setDepartment(res.data[0].department_en);
            setLocation(res.data[0].location_en);
            setType(res.data[0].salary);
            setLoading(false);
        }
        getCareer();
    }, []);

    async function saveCareer() {
        const { data, error } = await supabase.from("Careers").update({
            "title_en": title,
            "shortdes": description,
            "department_en": department,
            "location_en": location,
            "salary": type,
        }).eq("id", id);

        console.log("update data:", data);
        console.log("update error:", error);

        navigate("/careers");
    }

    if (loading) return <p>Loading...</p>;

    return (
        <>
          <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
              <div className='titlewsearchgap'>
                <Link to="/careers" style={{ textDecoration: "none" }}>
                  <img src={back2} alt="back icon" />
                </Link>
                <SectionTitle Sectiontitle="Edit Career"/>
              </div>

              <div className='forallinputs fai2'>
                <div className='titlewithinput'>
                  <p className='project-image'>Title</p>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />
                </div>

                <div className='titlewithinput'>
                  <p className='project-image'>Description</p>
                  <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />
                </div>

                <div className='titlewithinput'>
                  <p className='project-image'>Department</p>
                  <input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />
                </div>

                <div className='titlewithinput'>
                  <p className='project-image'>Location</p>
                  <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />
                </div>

                <div className='titlewithinput'>
                  <p className='project-image'>Salary</p>
                  <input value={type} onChange={(e) => setType(e.target.value)} type="text" className='input-width logininput-text input-widthhhh' placeholder='' />
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

export default EditCareer;