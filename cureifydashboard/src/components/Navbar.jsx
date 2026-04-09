
import React, { useState } from 'react';
import "./Navbar.css";
import Navlink from './Navlink';
import greyd2 from '../assets/Vector.png';
import users from '../assets/users.svg';
import orders from '../assets/cart.svg';
import messages from '../assets/messages.svg';
import features from '../assets/features.svg';
import mob from '../assets/mob.svg';
import web from '../assets/web.svg';
import setting from '../assets/setting.svg';
import logout from '../assets/log.svg';
import logosmall from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const [webOpen, setWebOpen] = useState(false);
  const location = useLocation();

  const activeColor = "#00A4AA";
  const defaultColor = "";

  const isActive = (path) => location.pathname === path ? activeColor : defaultColor;

  return (
    <>
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`navbar ${open ? "active" : ""}`}>
        <img src={logosmall} alt="logo" className='logosmall'/>

        <Link to="/" style={{textDecoration: "none"}}>
          <Navlink linkicon={greyd2} linktitle="Dashboard" navcolor={isActive("/")} />
        </Link>
        <Link to="/users" style={{textDecoration: "none"}}>
          <Navlink linkicon={users} linktitle="Users" navcolor={isActive("/users")} />
        </Link>
        <Link to="/orders" style={{textDecoration: "none"}}>
          <Navlink linkicon={orders} linktitle="Orders" navcolor={isActive("/orders")} />
        </Link>
        <Link to="/messages" style={{textDecoration: "none"}}>
          <Navlink linkicon={messages} linktitle="Messages" navcolor={isActive("/messages")} />
        </Link>
        <Link to="/features" style={{textDecoration: "none"}}>
          <Navlink linkicon={features} linktitle="Features" navcolor={isActive("/features")} />
        </Link>

        <div className="dropdown-container" onClick={() => setAppOpen(!appOpen)}>
          <Navlink linkicon={mob} linktitle="App CMS ▾" />
        </div>
        {appOpen && (
          <div className="dropdown-menu">
            <p>Onboarding</p>
            <p>Home</p>
            <p>Pharmacy Search</p>
            <p>Medicine Details</p>
          </div>
        )}

        <div className="dropdown-container" onClick={() => setWebOpen(!webOpen)}>
          <Navlink linkicon={web} linktitle="Website CMS ▾" />
        </div>
        {webOpen && (
          <div className="dropdown-menu">
            <p>Home</p>
                    <Link to="/careers" style={{textDecoration: "none"}}>

            <p>Careers</p></Link>
            <p>About</p>
          
            <p>Policies</p>
          </div>
        )}

        <Navlink linkicon={setting} linktitle="Settings" navcolor={isActive("/settings")} />
        <div className='formargintop'></div>
        <Navlink linkicon={logout} linktitle="Log out" />
      </div>
    </>
  );
};

export default Navbar;