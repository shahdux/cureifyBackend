// import React, { useEffect, useState } from 'react';
// import "./Careers.css";
// import { Link } from 'react-router-dom';
// import { supabase } from '../supabase';
// import Navbar from '../components/Navbar';
// import SectionTitle from '../components/SectionTitle';
// import StrokeButton from '../components/StrokeButton';
// import TableHeader from '../components/TableHeader';
// import edit from "../assets/edit.svg";
// import del from "../assets/delte.svg";

// const Careers = () => {
//     const [loading, setLoading] = useState(true);
//     const [careers, setCareers] = useState([]);

//     useEffect(() => {
//         async function getCareers() {
//             const res = await supabase.from("Careers").select("*");
//             setCareers(res.data);
//             setLoading(false);
//         }
//         getCareers();
//     }, []);

//     const deleteCareer = async (id) => {
//         await supabase.from("Careers").delete().eq('id', id);
//         setCareers(careers.filter((career) => career.id !== id));
//     };

//     if (loading) return <p>Loading...</p>;

//     return (
//         <>
//             <div className='nabarwithmain'>
//                 <Navbar />
//                 <div className='mainBar marginxleft'>
//                     <div className='titlewsearch '>
//                         <SectionTitle Sectiontitle="Careers" />
//                         <Link to="/add-career" style={{ textDecoration: "none" }}>
//                             <StrokeButton btext="Add" />
//                         </Link>
//                     </div>
//                     <input className='searchcont width85' type="text" placeholder='Search' />

//                     <div className='titlewsection2 '>
//                         <div className='titlewsearch '>
//                             <SectionTitle textsize="24px" Sectiontitle="All Careers" />
//                         </div>

//                         <div className='recentprojectsDiv'>
//                             <div className='users-header-row marginleft40'>
//                                 <TableHeader tableheadertext="Title" />
//                                 <TableHeader tableheadertext="Description" />
//                                 <TableHeader tableheadertext="Department" />
//                                 <TableHeader tableheadertext="Location" />
//                                 <TableHeader tableheadertext="Salary" />
//                                 <TableHeader tableheadertext="Actions" />
//                             </div>

//                             {careers.map((career) => {
//                                 return (
//                                     <div className='users-data-row width85' key={career.id}>
//                                         <p className='projectName ucol-user'>{career.title_en}</p>
//                                         <p className='projectName ucol-email'>{career.shortdes}</p>
//                                         <p className='projectName ucol-med'>{career.department_en}</p>
//                                         <p className='projectName ucol-med'>{career.location_en}</p>
//                                         <p className='projectName ucol-points'>{career.salary}</p>
//                                         <div className='ucol-status' style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
//                                             <Link to={"/edit-career/" + career.id}>
//                                                 <img src={edit} alt="edit icon" />
//                                             </Link>
//                                             <img 
//                                                 src={del} 
//                                                 alt="delete icon" 
//                                                 style={{ cursor: 'pointer' }} 
//                                                 onClick={() => deleteCareer(career.id)} 
//                                             />
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Careers;
import React, { useEffect, useState } from 'react';
import "./Careers.css";
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import StrokeButton from '../components/StrokeButton';
import TableHeader from '../components/TableHeader';
import edit from "../assets/edit.svg";
import del from "../assets/delte.svg";

const Careers = () => {
    const [loading, setLoading] = useState(true);
    const [careers, setCareers] = useState([]);
    const [confirmId, setConfirmId] = useState(null);

    useEffect(() => {
        async function getCareers() {
            const res = await supabase.from("Careers").select("*");
            setCareers(res.data);
            setLoading(false);
        }
        getCareers();
    }, []);

    const deleteCareer = async (id) => {
        await supabase.from("Careers").delete().eq('id', id);
        setCareers(careers.filter((career) => career.id !== id));
        setConfirmId(null);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <>
            {confirmId && (
                <div className='confirm-overlay'>
                    <div className='confirm-box'>
                        <p className='confirm-text'>Are you sure you want to delete this career?</p>
                        <div className='confirm-buttons'>
                            <button className='confirm-delete' onClick={() => deleteCareer(confirmId)}>Delete</button>
                            <button className='confirm-cancel' onClick={() => setConfirmId(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar marginxleft'>
                    <div className='titlewsearch '>
                        <SectionTitle Sectiontitle="Careers" />
                        <Link to="/add-career" style={{ textDecoration: "none" }}>
                            <StrokeButton btext="Add" />
                        </Link>
                    </div>
                    <input className='searchcont width85' type="text" placeholder='Search' />

                    <div className='titlewsection2 '>
                        <div className='titlewsearch '>
                            <SectionTitle textsize="24px" Sectiontitle="All Careers" />
                        </div>

                        <div className='recentprojectsDiv'>
                            <div className='users-header-row marginleft40'>
                                <TableHeader tableheadertext="Title" />
                                <TableHeader tableheadertext="Description" />
                                <TableHeader tableheadertext="Department" />
                                <TableHeader tableheadertext="Location" />
                                <TableHeader tableheadertext="Salary" />
                                <TableHeader tableheadertext="Actions" />
                            </div>

                            {careers.map((career) => {
                                return (
                                    <div className='users-data-row width85' key={career.id}>
                                        <p className='projectName ucol-user'>{career.title_en}</p>
                                        <p className='projectName ucol-email'>{career.shortdes}</p>
                                        <p className='projectName ucol-med'>{career.department_en}</p>
                                        <p className='projectName ucol-med'>{career.location_en}</p>
                                        <p className='projectName ucol-points'>{career.salary}</p>
                                        <div className='ucol-status' style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                            <Link to={"/edit-career/" + career.id}>
                                                <img src={edit} alt="edit icon" />
                                            </Link>
                                            <img
                                                src={del}
                                                alt="delete icon"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setConfirmId(career.id)}
                                            />
                                        </div>
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

export default Careers;