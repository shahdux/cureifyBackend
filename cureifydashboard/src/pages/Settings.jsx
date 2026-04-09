import React, { Component } from 'react';
import "./Settings.css";

import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import logo3 from '../assets/setlogo.svg';
import Titlewinput from '../components/Titlewinput';


const Settings = () => {
        //  const [loading, setLoading] = useState(true);
        //         const [settings, setSettings] = useState("");
          
        //         useEffect(()=>{
        //               async function callGetAPI5(){
        //                     const res = await supabase.from("ProfileSettings").select("*");
        //                     setSettings(res.data);
        //                     // console.log(res);
        //                     setLoading(false);
        //               }
        //               callGetAPI5();
        //         },[]);
        //         if (loading) return <p>Loading...</p>;
    return ( 
        
        <>
        
          <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
             <div className='titlewsearch width90'>
            <SectionTitle Sectiontitle="Settings"/>
    
            </div>

            <div className='profilesettingdiv'>
                                                    <div className='imgcontwidth'>

                  <SectionTitle textsize="24px" 
                Sectiontitle="Profile settings"/>
</div>
                                    <div className='imgcontwidth'>

                <img src={logo3} alt="profile image" className='profileicon'/>
                </div>
                <div className='inputs2sections'>
                    <div className='section1inputs'>
                        <Titlewinput inputtile="Name" 
                        placetext="Cureify"
                        />
   <Titlewinput inputtile="Adress" 
                        placetext=""
                        />   <Titlewinput inputtile="Website" 
                        placetext=""
                        />
                    </div>
                     <div className='section1inputs'>
                        <Titlewinput inputtile="Email" 
                        placetext=""
                        />
   <Titlewinput inputtile="Number" 
                        placetext=""
                        />   <Titlewinput inputtile="Linkedin" 
                        
                        />
                    </div>
                    <div className='imgcontwidth2'>

                    <Button buttontext="Save"
                    buttonwidth="210px
"/>
                    </div>

                </div>

            </div>
           
        </div>
            
        </div>
        
        
        
        
        
        
        
        
        
        
        </>
     );
}
 
export default Settings;