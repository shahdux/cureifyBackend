import React from 'react';
import { motion } from 'framer-motion';
import "./Settings.css";

import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import logo3 from '../assets/setlogo.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const Settings = () => {
    return (
        <div className='nabarwithmain'>
            <Navbar />
            <div className='mainBar'>
                <motion.div 
                    className='titlewsearch width90'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle Sectiontitle="Settings" />
                </motion.div>

                <motion.div 
                    className='profilesettingdiv'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className='imgcontwidth'>
                        <SectionTitle textsize="24px" Sectiontitle="Profile settings" />
                    </div>

                    <div className='imgcontwidth'>
                        <img src={logo3} alt="profile image" className='profileicon' />
                    </div>

                    <div className='inputs2sections'>
                        {/* Row 1: Name and Number */}
                        <div className='input-row'>
                            <div className='input-group'>
                                <label className='input-label'>Name</label>
                                <input 
                                    type="text" 
                                    className='custom-input' 
                                    defaultValue="Cureify" 
                                />
                            </div>
                            <div className='input-group'>
                                <label className='input-label'>Number</label>
                                <input 
                                    type="text" 
                                    className='custom-input' 
                                    placeholder="Enter number"
                                />
                            </div>
                        </div>

                        {/* Row 2: Address (Full Width) */}
                        <div className='input-row full-width'>
                            <div className='input-group'>
                                <label className='input-label'>Adress</label>
                                <input 
                                    type="text" 
                                    className='custom-input' 
                                />
                            </div>
                        </div>

                        {/* Row 3: Email and Linkedin */}
                        <div className='input-row'>
                            <div className='input-group'>
                                <label className='input-label'>Email</label>
                                <input 
                                    type="email" 
                                    className='custom-input' 
                                />
                            </div>
                            <div className='input-group'>
                                <label className='input-label'>Linkedin</label>
                                <input 
                                    type="text" 
                                    className='custom-input' 
                                />
                            </div>
                        </div>

                        <div className='imgcontwidth2'>
                            <Button buttontext="Save" buttonwidth="210px" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Settings;