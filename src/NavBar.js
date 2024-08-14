// src/components/NavBar.js
import React, { useState } from 'react';
import './NavBar.css'
const NavBar = () => {

    const [activeLink, setActiveLink] = useState('about');

    const handleLinkClick = (id, alertMessage) => {
        
  
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
     
      setActiveLink(id);
    };

  return (
    <div className="main-nav">
      <div className="container">
        <header className="group top-nav">
         
          <nav id="navbar-1" className="navbar item-nav">
          <ul className='nav-list'>
      <li className={activeLink === 'about' ? 'active' : ''}>
        <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about', 'ab'); }}>About</a>
      </li>
      <li className={activeLink === 'experiences' ? 'active' : ''}>
        <a href="#experiences" onClick={(e) => { e.preventDefault(); handleLinkClick('experiences', 'exp'); }}>Experiences</a>
      </li>
      <li className={activeLink === 'achievements' ? 'active' : ''}>
        <a href="#achievements" onClick={(e) => { e.preventDefault(); handleLinkClick('achievements', 'edu'); }}>Education</a>
      </li>
      <li className={activeLink === 'skills' ? 'active' : ''}>
        <a href="#skills" onClick={(e) => { e.preventDefault(); handleLinkClick('skills', 'sk'); }}>Skills</a>
      </li>
      {/* <li className={activeLink === 'projects' ? 'active' : ''}>
        <a href="#projects" onClick={(e) => { e.preventDefault(); handleLinkClick('projects', 'prj'); }}>Projects</a>
      </li> */}
      <li className={activeLink === 'contacts' ? 'active' : ''}>
        <a href="#contacts" onClick={(e) => { e.preventDefault(); handleLinkClick('contacts', 'cnt'); }}>Contacts</a>
      </li>
    </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
