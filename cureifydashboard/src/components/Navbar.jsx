// import React, { useState } from 'react';
// import "./Navbar.css";
// import Navlink from './Navlink';
// import greyd2 from '../assets/Vector.png';
// import users from '../assets/users.svg';
// import orders from '../assets/cart.svg';
// import messages from '../assets/messages.svg';
// // import pharmacies from '../assets/pharmacies.svg';
// import features from '../assets/features.svg';
// import careers from '../assets/careers.svg';
// import mob from '../assets/mob.svg';
// import web from '../assets/web.svg';
// import setting from '../assets/setting.svg';
// import logout from '../assets/log.svg';







// import logosmall from '../assets/logo.svg';
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [pagesOpen, setPagesOpen] = useState(false);

//   return (
//     <>
//       <div className="burger" onClick={() => setOpen(!open)}>
//         ☰
//       </div>

//       <div className={`navbar ${open ? "active" : ""}`}>

//                     <img src={logosmall} alt="logo" className='logosmall'/>
//        <Link to="/" style={{textDecoration: "none"}}>

//         <Navlink linkicon={greyd2} linktitle="Dashboard" /></Link>

//         <Navlink linkicon={users} linktitle="Users" />

//         <Navlink linkicon={orders} linktitle="Orders" />

//         <Navlink linkicon={messages} linktitle="Messages" />
// <Link to="/features" style={{textDecoration: "none"}}>
//         <Navlink linkicon={features} linktitle="Features" />
// </Link>
//                                 <Navlink linkicon={careers} linktitle="Careers" />
                               




//         <div 
//           className="dropdown-container"
//           onClick={() => setPagesOpen(!pagesOpen)}
//         >
//           <Navlink linkicon={mob} linktitle="App CMS ▾" />
//         </div>
//         {pagesOpen && (
//           <div className="dropdown-menu">
//             <p>Onboarding</p>
//             <p>Home</p>
//             <p>Pharmacy Search</p>
//             <p>Medicine Details</p>
//           </div>
//         )}
//           <div 
//           className="dropdown-container"
//           onClick={() => setPagesOpen(!pagesOpen)}
//         >
//           <Navlink linkicon={web} linktitle="Website CMS ▾" />
//         </div>
//         {pagesOpen && (
//           <div className="dropdown-menu">
//             <p>Home</p>
//             <p>Blogs</p>
//             <p>About</p>
//             <p>Careers</p>
//                         <p>Policies</p>

//           </div>
//         )}
//                                 <Navlink linkicon={setting} linktitle="Settings" />
//         <div className='formargintop'></div>

//         <Navlink linkicon={logout} linktitle="Log out" />
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import "./Navbar.css";
import Navlink from './Navlink';
import greyd2 from '../assets/Vector.png';
import users from '../assets/users.svg';
import orders from '../assets/cart.svg';
import messages from '../assets/messages.svg';
import features from '../assets/features.svg';
import careers from '../assets/careers.svg';
import mob from '../assets/mob.svg';
import web from '../assets/web.svg';
import setting from '../assets/setting.svg';
import logout from '../assets/log.svg';
import logosmall from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
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

        <Navlink linkicon={users} linktitle="Users" navcolor={isActive("/users")} />
        <Navlink linkicon={orders} linktitle="Orders" navcolor={isActive("/orders")} />
        <Navlink linkicon={messages} linktitle="Messages" navcolor={isActive("/messages")} />

        <Link to="/features" style={{textDecoration: "none"}}>
          <Navlink linkicon={features} linktitle="Features" navcolor={isActive("/features")} />
        </Link>

        <Navlink linkicon={careers} linktitle="Careers" navcolor={isActive("/careers")} />

        <div className="dropdown-container" onClick={() => setPagesOpen(!pagesOpen)}>
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

        <div className="dropdown-container" onClick={() => setPagesOpen(!pagesOpen)}>
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

        <Navlink linkicon={setting} linktitle="Settings" navcolor={isActive("/settings")} />
        <div className='formargintop'></div>
        <Navlink linkicon={logout} linktitle="Log out" />
      </div>
    </>
  );
};

export default Navbar;