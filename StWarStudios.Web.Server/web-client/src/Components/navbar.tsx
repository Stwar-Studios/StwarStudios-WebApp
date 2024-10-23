import './navbar.css';
import React, { useState, useEffect  } from "react";
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
function NavBar() {    
    const location = useLocation();
    const isHome = location.pathname === '/'; 
    const isContact = location.pathname.toLowerCase() === '/contact'; 
    const [expanded, setExpanded] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(0); 
    useEffect(() => {
        // Scroll event listener to adjust navbar opacity based on scroll distance
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // Calculate new opacity based on scroll position (max opacity is 0.9)
            const newOpacity = Math.min(scrollTop / 300, 1);
            setScrollOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        if (expanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [expanded]);

    return (
        
        <header className='header'>
            <div className={`stwar-navbar ${expanded ? 'expanded' : ''} `}>
            <div className={`navbar ${expanded ? 'expanded' : ''}`}>
                    <div className={`navbar-container ${expanded ? 'expanded' : ''}`} style={{ backgroundColor: `rgba(0, 0, 0, ${expanded ? 1 : scrollOpacity})`,  transition: 'background-color 0.3s ease' }}>
                        <div className={`navbar-menu-header ${expanded ? 'expanded' : ''}`} >
                            <a href="/" className='navbar-brand d-flex align-items-center'>
                                <img src="images/logo.png" alt="logo" style={{ width: 68 }} />
                                <div className='ms-2 text-center d-flex flex-column align-items-start'>
                                    <div className='stwar-title mb-0'><strong>STWAR</strong></div>
                                    <strong className='stwar-studios-title'>
                                        <span><small>Studios</small></span>
                                    </strong>
                                </div>
                            </a>
                            <a href='#toggle' className={`navbar-toggler ${expanded ? 'expanded' : ''}`} aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)}>
                                {expanded ? <FaTimes size={30} /> : <FaBars />}
                            </a>
                        </div>
                        <div className={`navbar-collapse ${expanded ? 'show' : ''}`} id="responsive-navbar-nav">
                            <nav className="me-auto w-100 navbar-nav">
                                <div className='navbar-nav'>
                                    <NavLink to="/" className={({ isActive }) => `navbar-item p-2 ${isActive ? 'menu-item-border-primary' : ''}`} onClick={() => setExpanded(false)}>
                                        Home
                                    </NavLink>
                                    <NavLink to="/services" className={({ isActive }) => `navbar-item p-2  ${isActive ? 'menu-item-border-primary' : ''}`} onClick={() => setExpanded(false)}>
                                        Servicios
                                    </NavLink>
                                    <NavLink to="/portafolio" className={({ isActive }) => `navbar-item p-2  ${isActive ? 'menu-item-border-primary' : ''}`} onClick={() => setExpanded(false)}>
                                        Portafolio
                                    </NavLink>
                                </div>
                            </nav>
                            <div className='contact-btn'>
                                <NavLink to='/contact' className={`navbar-contact-button ${ isHome ? 'home-active' : ''} ${isContact ? 'contact-active menu-item-border-primary' : ''}`} onClick={() => setExpanded(false)}>
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
