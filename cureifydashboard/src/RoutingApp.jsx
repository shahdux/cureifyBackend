import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Features from './pages/Features';
import AddFeature from './pages/AddFeature';
import EditFeature from './pages/EditFeature';
import Messages from './pages/Messages';
import MessageModal from './pages/MessageModal';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Careers from './pages/Careers';
import Settings from './pages/Settings';
import Login from './pages/Login';
import EditOnboarding from './pages/EditOnboarding';
import Onboard from './pages/Onboard';
import AddCareer from './pages/AddCareer';
import EditCareer from './pages/EditCareer';
import Blogs from './pages/Blogs';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';
import AddOrder from './pages/AddOrder';
import EditOrder from './pages/EditOrder';
import AddOnboarding from './pages/AddOnbording';
import HowItWorks from './pages/HowItWorks';
import AddHowItWorks from './pages/AddHowItWorks';
import EditHowItWorks from './pages/EditHowItWorks';
import Pharmacies from './pages/Pharmacies';
import EditPharmacy from './pages/EditPharmacy';
import AddPharmacy from './pages/AddPharmacy';



const RoutingApp = () => {
    return ( 
        <>
               <BrowserRouter>
        <Routes>
  <Route path='/home' element={<Home />} />
    <Route path='/features' element={<Features />} />
        <Route path='/messages' element={<Messages />} />
<Route path="/msg-details/:id" element={<MessageModal />} />

        <Route path='/add-feature' element={<AddFeature />} />

        <Route path='/edit/:id' element={<EditFeature />} />
          <Route path='/users' element={<Users />} />
                    <Route path='/orders' element={<Orders />} />
                                        <Route path='/careers' element={<Careers />} />
                                                                                <Route path='/settings' element={<Settings />} />
                <Route path='/edit-onboarding' element={<EditOnboarding />} />
                                <Route path='/onboarding' element={<Onboard />} />
                                        <Route path='/onboard-details/:id' element={<EditOnboarding />} />
                                                                                <Route path='/edit-career/:id' element={<EditCareer />} />

                                <Route path='/add-career' element={<AddCareer />} />

                               

     <Route path='/' element={<Login />} />
          <Route path='/blogs' element={<Blogs />} />
                                          <Route path='/add-blog' element={<AddBlog />} />
                                                  <Route path='/edit-blog/:id' element={<EditBlog />} />



        <Route path='/add-order' element={<AddOrder />} />
                <Route path='/edit-order/:id' element={<EditOrder />} />
                        <Route path='/add-onboarding' element={<AddOnboarding />} />

                                <Route path='/how-it-works' element={<HowItWorks />} />

<Route path="/add-how-it-works" element={<AddHowItWorks />} />
<Route path="/how-it-works/edit/:id" element={<EditHowItWorks />} />
<Route path="/pharmacies" element={<Pharmacies />} />

<Route path="/add-pharmacy" element={<AddPharmacy />} />
<Route path="/edit-pharmacy/:id" element={<EditPharmacy />} />





                    




 





        </Routes>
        
    
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;