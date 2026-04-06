import React from 'react';
import "./AddFeature.css"
import Button from '../components/Button';
// import Navbar from '../component/Navbar';
// import SectionTitle from '../component/SectionTitle';
// import textcase from "../assets/textcase.svg";
// import underline from "../assets/underline.svg";
// import numbered from "../assets/numbered.svg";
// import left from "../assets/left.svg";
// import it from "../assets/it.svg";
// import fill from "../assets/fill.svg";
// import center from "../assets/center.svg";
// import center2 from "../assets/center2.svg";
// import bullet from "../assets/bullet.svg";
// import bold from "../assets/bold.svg";
import Navbar from './../components/Navbar';
import SectionTitle from './../components/SectionTitle';

const AddFeature = () => {

  return ( 
    <>
      <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
          <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Add Category"/>
          </div>
         
          <div className='forallinputs'>
            <div className='titlewithinput'>
              <p className='project-image imagemargintop'>Image</p>
              <div className='imagewithbutton'>
                <div className='inputforiumage inputforiumagec'>
                  <input type="text" className='input-width' name="" id="" placeholder=''/>  
                </div>
              </div>
            </div>
             
            <div className='titlewithinput'>
              <p className='project-image'>Title</p>
              <input type="text" className='input-width' name="" id="" placeholder=''/>  
            </div>
           
            <div className='titlewithinput'>
              <p className='project-image'>Description</p>
              <div className='rte1'>
            
                <input type="text" className='input-width2' name="" id="" placeholder=''/>  
              </div>
            </div>

            <div className='buttoncont'>
              <Button buttontext="Save" buttonwidth="200px"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default AddFeature;