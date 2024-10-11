import './navbar.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-nav-bar-bg stwar-navbar">
                <Container>
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
                                <Nav.Link as={Link} to="/" className='navbar-item text-white menu-item-border-primary'>
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/Services" className='navbar-item text-white'>
                                    Servicios
                                </Nav.Link>
                                <Nav.Link as={Link} to="/Portafolio" className='navbar-item text-white'>
                                    Portafolio
                                </Nav.Link>
                            </Container>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className='contact-button'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
