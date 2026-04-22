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









                    




 





        </Routes>
        
    
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;