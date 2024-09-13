import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.scss';
import Logo from '../logo/logo';

function NavBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showFullscreenMenu, setShowFullscreenMenu] = useState(false);

    // Colapsar el Navbar cuando un enlace es clicado en móvil
    const handleLinkClick = () => {
        if (window.innerWidth < 992) {
            setIsExpanded(false);
            setShowFullscreenMenu(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.nav');
            if (nav) {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                    console.log('Scrolled: added .scrolled');
                } else {
                    nav.classList.remove('scrolled');
                    console.log('Scrolled: removed .scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Llamada inicial para aplicar el estilo correcto si la página ya ha sido desplazada
        handleScroll();

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar expand="lg" className="fixed-top nav" expanded={isExpanded}>
                <Container className="nav-container">
                    <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
    
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        onClick={() => setShowFullscreenMenu(!isExpanded)} 
                     />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/home" className="d-flex align-items-center" onClick={handleLinkClick}>Home</Nav.Link>
                            <Nav.Link href="#section2" className="d-flex align-items-center" onClick={handleLinkClick}>Service</Nav.Link>
                            <Nav.Link href="#section3" className="d-flex align-items-center" onClick={handleLinkClick}>Skills</Nav.Link>
                            <Nav.Link href="/portfolio" className="d-flex align-items-center" onClick={handleLinkClick}>Portfolio</Nav.Link>
                            <Nav.Link href="/about" className="d-flex align-items-center" onClick={handleLinkClick}>About Me</Nav.Link>
                            <Nav.Link href="" className="btn btn-portfolio-secondary" onClick={handleLinkClick}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Menú de pantalla completa */}
            <div className={`fullscreen-menu ${showFullscreenMenu ? 'show' : ''}`}>
                <button className="close-button" onClick={() => setShowFullscreenMenu(false)}>Close</button>
                <div className="fullscreen-content">
                    <h1>Menu</h1>
                    <ul className="list-unstyled">
                        <li><a href="/home" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="/h#section2"onClick={(e) => handleLinkClick(e, '#section2')}>Service</a></li>
                        <li><a href="#section3" onClick={(e) => handleLinkClick(e, '#section3')}>Skills</a></li>
                        <li><a href="/portfolio" onClick={handleLinkClick}>Portfolio</a></li>
                        <li><a href="/about" onClick={handleLinkClick}>About Me</a></li>
                        <li><a href="" className="btn btn-portfolio-secondary" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;
