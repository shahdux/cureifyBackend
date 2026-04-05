import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';

const RoutingApp = () => {
    return ( 
        <>
               <BrowserRouter>
        <Routes>
  <Route path='/' element={<Home />} />
    {/* <Route path='/works' element={<Works />} />
      <Route path='/works/:key' element={<ProjectDetails />} /> 
            <Route path='/about' element={<About />} /> 
                        <Route path='/contact' element={<Contact />} /> 
                                                <Route path='/blogs' element={<Blog />} /> 
                                                                                                <Route path='/idek' element={<TestApi />} /> 
                                                                                                                                                                                                <Route path='/blogs/:key' element={<BlogDetails />} /> 
 */}





        </Routes>
        
    
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;