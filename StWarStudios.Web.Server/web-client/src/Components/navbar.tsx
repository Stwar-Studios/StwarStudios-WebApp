import './navbar.css';
import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { MdLanguage } from 'react-icons/md'; // Language icon (alternative to flags)
import WorldFlag from 'react-world-flags';
import { useTranslations  } from './translation-provider';

function NavBar() {    
    const location = useLocation();
    const isHome = location.pathname === '/'; 
    const isContact = location.pathname.toLowerCase() === '/contact'; 
    const [expanded, setExpanded] = useState(false);
    const [langSelectorExpanded, setLangSelectorExpanded] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(0); 
    const [language, setLanguage] = useState('en'); // State for language selection
    const { changeLanguage, getCurrentLanguage, navbar } = useTranslations();
    const langSelectorRef = useRef<HTMLDivElement | null>(null);
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
    // Disable body scroll when navbar is expanded
    useEffect(() => {
        document.body.style.overflow = expanded ? 'hidden' : 'auto';
    }, [expanded]);

    const scrollToSection = (section : string) => {
        setExpanded(false);
        setLangSelectorExpanded(false);
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: 'easeIn'
        });
    };
    // Toggle language
    const handleLanguageChange = (lang : string) => {
        setLangSelectorExpanded(false);
        setLanguage(lang);
        changeLanguage(lang);
    };
    // Close the dropdown if clicked outside
    useEffect(() => {
        setLanguage(getCurrentLanguage());
        const handleClickOutside = (event : any) => {
            // Check if the click is outside the language selector
            if (langSelectorRef.current && !langSelectorRef.current.contains(event.target)) {
                setLangSelectorExpanded(false); // Collapse the dropdown
            }
        };
        // Listen for clicks on the document
        document.addEventListener('mousedown', handleClickOutside);
        // Cleanup the event listener when the component is unmounted
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);   

    return (
        <header className="header">
            <div className={`stwar-navbar ${expanded ? 'expanded' : ''}`}>
                <div className={`navbar ${expanded ? 'expanded' : ''}`}>
                    <div className={`navbar-container ${expanded ? 'expanded' : ''}`} style={{ backgroundColor: `rgba(0, 0, 0, ${expanded ? 1 : scrollOpacity})`, transition: 'background-color 0.3s ease' }}>
                        <div className={`navbar-menu-header ${expanded ? 'expanded' : ''}`}>
                            <a href="/" className="navbar-brand d-flex align-items-center">
                                <img src="images/logo.png" alt="logo" />
                                <div className="ms-2 text-center d-flex flex-column align-items-start">
                                    <div className="stwar-title mb-0"><strong>STWAR</strong></div>
                                    <strong className="stwar-studios-title"><span><small>Studios</small></span></strong>
                                </div>
                            </a>
                            <a href="#toggle" className={`navbar-toggler ${expanded ? 'expanded' : ''}`} aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)}>
                                {expanded ? <FaTimes size={30} /> : <FaBars />}
                            </a>
                        </div>
                        <div className={`navbar-collapse ${expanded ? 'show' : ''}`} id="responsive-navbar-nav">
                            <nav className="me-auto w-100 navbar-nav">
                                <div className="navbar-nav">
                                    <a href="#services-section" className="navbar-item p-2" onClick={() => scrollToSection('services')}>
                                        <span>{navbar.servicesSection}</span>
                                    </a>
                                    <a href="#tech-stack" className="navbar-item p-2" onClick={() => scrollToSection('tech-stack')}>
                                    <span>{navbar.techStackSection}</span>
                                    </a>
                                    <a href="#values-desc" className="navbar-item p-2" onClick={() => scrollToSection('values-desc')}>
                                    <span>{navbar.valuesSection}</span>
                                    </a>
                                </div>
                            </nav>
                            <div className="contact-btn">
                                <a href="#contact-section" className={`${isHome ? 'navbar-contact-button-home' : 'navbar-contact-button'} ${isContact ? 'active menu-item-border-primary' : ''}`} onClick={() => scrollToSection('contact-section')}>
                                <span>{navbar.contactButton}</span>
                                </a>
                            </div>
                        </div>
                        <div className="language-selector" ref={langSelectorRef}>
                            <button className={`language-btn ${langSelectorExpanded ? 'expanded' : ''}`} onClick= { () =>setLangSelectorExpanded(!langSelectorExpanded)}>
                                <MdLanguage size={20} />
                                <span className="ms-2">{language === 'en' ? 'EN' : 'ES'}</span>
                            </button>

                            {/* Dropdown for language options */}
                            <div className={`language-dropdown ${langSelectorExpanded ? 'show' : ''}`}>
                                <ul className="language-list">
                                    <li>
                                        <a href="#en-us" onClick={() => handleLanguageChange('en')} className="language-option">
                                            <WorldFlag code="US" style={{ width: 20, height: 15 }} className='me-2'/> EN
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#es-co" onClick={() => handleLanguageChange('es')} className="language-option">
                                            <WorldFlag code="CO" style={{ width: 20, height: 15 }} className='me-2'/> ES
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </header>
    );
};
export default NavBar;
