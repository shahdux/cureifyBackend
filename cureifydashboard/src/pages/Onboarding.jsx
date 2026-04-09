import React from 'react';
import "./Onboarding.css";
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Onboarding = () => {
    return (
        <>
            <div className='nabarwithmain'>
                <Navbar />
                <div className='mainBar'>
                    <div className='titlewsearch width90'>
                        <SectionTitle Sectiontitle="Onboarding" />
                    </div>

                    <div className='onboarding-cont'>

                       <div className='onboarding-screen'>
                            <h2 className='screen-title'>Screen 1</h2>
                            <div className='titlewithinput'>
                                <p className='project-image'>Image</p>
                                <input type="file" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Alt text (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Alt text (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Title (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Title (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Description (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Description (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>CTA button 1</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput '>
                                <p className='project-image'>CTA button 2</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                        <div className='buttoncont'>
                            <Button buttontext="Save" buttonwidth="210px" />
                        </div>
                        </div>

                       <div className='onboarding-screen'>
                            <h2 className='screen-title'>Screen 2</h2>
                            <div className='titlewithinput'>
                                <p className='project-image'>Image</p>
                                <input type="file" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Alt text (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Alt text (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Title (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Title (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Description (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Description (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>CTA button 1</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput '>
                                <p className='project-image'>CTA button 2</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                        <div className='buttoncont'>
                            <Button buttontext="Save" buttonwidth="210px" />
                        </div>
                        </div>

                        <div className='onboarding-screen'>
                            <h2 className='screen-title'>Screen 3</h2>
                            <div className='titlewithinput'>
                                <p className='project-image'>Image</p>
                                <input type="file" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Alt text (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Alt text (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Title (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Title (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Description (EN)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>Description (AR)</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput'>
                                <p className='project-image'>CTA button 1</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                            <div className='titlewithinput '>
                                <p className='project-image'>CTA button 2</p>
                                <input type="text" className='input-width logininput-text' />
                            </div>
                        <div className='buttoncont'>
                            <Button buttontext="Save" buttonwidth="210px" />
                        </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Onboarding;