import './navbar.css';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
function NavBar() {    
    const location = useLocation();
    const isHome = location.pathname === '/'; 
    const isContact = location.pathname.toLowerCase() === '/contact'; 
    const [expanded, setExpanded] = useState(false);
    return (
        
        <header className='header'>
            <div className={`stwar-navbar ${expanded ? 'expanded' : ''} `}>
            <div className={`navbar ${expanded ? 'expanded' : ''}`}>
                    <div className='navbar-container'>
                        <div className={`navbar-menu-header ${expanded ? 'expanded' : ''}`}>
                            <a href="/" className='navbar-brand d-flex align-items-center'>
                                <img src="images/logo.png" alt="logo" style={{ width: 68 }} />
                                <div className='ms-2 text-center d-flex flex-column align-items-start'>
                                    <div className='stwar-title mb-0'><strong>STWAR</strong></div>
                                    <strong className='stwar-studios-title'>
                                        <span><small>Studios</small></span>
                                    </strong>
                                </div>
                            </a>
                            <a className={`navbar-toggler ${expanded ? 'expanded' : ''}`} aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)}>
                                {expanded ? <FaTimes size={30} /> : <FaBars />}
                            </a>
                        </div>
                        <div className={`navbar-collapse ${expanded ? 'show' : ''}`} id="responsive-navbar-nav">
                            <nav className="me-auto w-100">
                                <div className='d-flex justify-content-center navbar-nav'>
                                    <NavLink to="/" className={({ isActive }) => `p-2 navbar-item ${isActive ? 'menu-item-border-primary' : ''}`} onClick={() => setExpanded(false)}>
                                        Home
                                    </NavLink>
                                    <NavLink to="/services" className={({ isActive }) => `p-2 navbar-item ${isActive ? 'menu-item-border-primary' : ''}`} onClick={() => setExpanded(false)}>
                                        Servicios
                                    </NavLink>
                                    <NavLink to="/portafolio" className={({ isActive }) => `p-2 navbar-item ${isActive ? 'menu-item-border-primary' : ''}`} onClick={() => setExpanded(false)}>
                                        Portafolio
                                    </NavLink>
                                </div>
                            </nav>
                            <div className='contact-btn'>
                                <NavLink to='/contact' className={`${ isHome ? 'navbar-contact-button-home' : 'navbar-contact-button'} ${isContact ? 'active menu-item-border-primary' : ''}`} onClick={() => setExpanded(false)}>
                                    <span>Contact us</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
