import './navbar.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function NavBar() {
    return (
        <header className='header'>
        <div className='stwar-navbar'>
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className=" p-1">
                <Container className=''>
                    <Navbar.Brand href="#home">
                        <div className='d-flex align-items-center'>
                            <Image src="images/logo.png" fluid width={68} />
                            <div className='ms-2 text-center d-flex flex-column align-items-start'>
                                <div className='stwar-title mb-0'><strong>STWAR</strong></div>
                                <strong className='stwar-studios-title'>
                                    <span> <small>Studios </small></span>
                                </strong>
                            </div>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto w-100">
                            <Container className='d-flex justify-content-center navbar-nav'>
                                <NavLink to="/" 
                                    className={({ isActive   }) => `p-2 navbar-item text-white ${isActive ? 'menu-item-border-primary' : ''}`}>
                                    Home
                                </NavLink >
                                <NavLink to="/Services" className={({ isActive   }) => `p-2 navbar-item text-white ${isActive ? 'menu-item-border-primary' : ''}`}>
                                    Servicios
                                </NavLink>
                                <NavLink to="/Portafolio" className={({ isActive   }) => `p-2 navbar-item text-white ${isActive ? 'menu-item-border-primary' : ''}`}>
                                    Portafolio
                                </NavLink>
                            </Container>
                        </Nav>
                        <Nav>
                            <NavLink to='/Contact' className='contact-button'>
                            <Button className='btn-lg btn-warning text-white' >Contact</Button>
                            
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </header>
    );
};

export default NavBar;
