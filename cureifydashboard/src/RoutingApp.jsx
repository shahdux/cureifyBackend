import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Features from './pages/Features';
import AddFeature from './pages/AddFeature';
import EditFeature from './pages/EditFeature';
import Messages from './pages/Messages';
import MessageModal from './pages/MessageModal';
import Users from './pages/Users';


const RoutingApp = () => {
    return ( 
        <>
               <BrowserRouter>
        <Routes>
  <Route path='/' element={<Home />} />
    <Route path='/features' element={<Features />} />
        <Route path='/messages' element={<Messages />} />
<Route path="/msg-details/:id" element={<MessageModal />} />

        <Route path='/add-feature' element={<AddFeature />} />

        <Route path='/edit/:id' element={<EditFeature />} />
          <Route path='/users' element={<Users />} />



 





        </Routes>
        
    
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;