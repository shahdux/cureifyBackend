import React, { useState } from 'react';
import "./Navbar.css";
import Navlink from './Navlink';
import dashboardicon from '../assets/dashboard.svg';
import users from '../assets/users.svg';
import orders from '../assets/cart.svg';
import messages from '../assets/messages.svg';
// import pharmacies from '../assets/pharmacies.svg';
import features from '../assets/features.svg';
import careers from '../assets/careers.svg';
import mob from '../assets/mob.svg';
import web from '../assets/web.svg';
import setting from '../assets/setting.svg';
import logout from '../assets/log.svg';







import logo from '../assets/logo.svg';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <>
      {/* Burger Button */}
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`navbar ${open ? "active" : ""}`}>
                    <img src={logo} alt="logo" className='logo'/>
        

        <Navlink linkicon={dashboardicon} linktitle="Dashboard" />

        <Navlink linkicon={users} linktitle="Users" />

        <Navlink linkicon={orders} linktitle="Orders" />

        <Navlink linkicon={messages} linktitle="Messages" />

        <Navlink linkicon={features} linktitle="Features" />
                {/* <Navlink linkicon={pharmacies} linktitle="Pharmacies" /> */}
                                <Navlink linkicon={careers} linktitle="Careers" />
                               




        {/* --- DROPDOWN START --- */}
        <div 
          className="dropdown-container"
          onClick={() => setPagesOpen(!pagesOpen)}
        >
          <Navlink linkicon={mob} linktitle="App CMS ▾" />
        </div>
        {pagesOpen && (
          <div className="dropdown-menu">
            <p>Onboarding</p>
            <p>Home</p>
            <p>Pharmacy Search</p>
            <p>Medicine Details</p>
          </div>
        )}
          <div 
          className="dropdown-container"
          onClick={() => setPagesOpen(!pagesOpen)}
        >
          <Navlink linkicon={web} linktitle="Website CMS ▾" />
        </div>
        {pagesOpen && (
          <div className="dropdown-menu">
            <p>Home</p>
            <p>Blogs</p>
            <p>About</p>
            <p>Careers</p>
                        <p>Policies</p>

          </div>
        )}
                                <Navlink linkicon={setting} linktitle="Settings" />
        <div className='formargintop'></div>

        <Navlink linkicon={logout} linktitle="Log out" />
      </div>
    </>
  );
};

export default Navbar;