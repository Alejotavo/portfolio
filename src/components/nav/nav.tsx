import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.scss';
import Logo from '../logo/logo';

function NavBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showFullscreenMenu, setShowFullscreenMenu] = useState(false);

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
                if (window.scrollY > 100) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {

        if (showFullscreenMenu) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        return () => {
          document.body.classList.remove('no-scroll');
        };
    }, [showFullscreenMenu]);




    return (
        <>
            <Navbar expand="lg" className="fixed-top nav" expanded={isExpanded}>
                <Container className="nav-container">
                    <Navbar.Brand><Logo/><label className='iso-logo'>Code & Design</label></Navbar.Brand>
    
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        onClick={() => setShowFullscreenMenu(!isExpanded)} 
                        className="custom-toggler-icon"
                     />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/home" className="d-flex align-items-center" onClick={handleLinkClick}>Home</Nav.Link>
                            <Nav.Link href="/portfolio" className="d-flex align-items-center" onClick={handleLinkClick}>Portfolio</Nav.Link>
                            <Nav.Link href="/about" className="d-flex align-items-center" onClick={handleLinkClick}>About Me</Nav.Link>
                            <Nav.Link href="/contact" className="btn btn-portfolio-secondary" onClick={handleLinkClick}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Menú de pantalla completa */}
            <div className={`fullscreen-menu ${showFullscreenMenu ? 'show' : ''}`}>
                <div className='close-button-content'>
                    <button className="bi bi-x-lg close-button rotate-360" onClick={() => setShowFullscreenMenu(false)}></button>
                </div>
                <div className="fullscreen-content">
                    <Nav className='list' >
                            <Nav.Link href="/home" className=" btn-margin d-flex align-items-center" onClick={handleLinkClick}>Home</Nav.Link>
                            <Nav.Link href="/portfolio" className="btn-margin d-flex align-items-center" onClick={handleLinkClick}>Portfolio</Nav.Link>
                            <Nav.Link href="/about" className="btn-margin d-flex align-items-center" onClick={handleLinkClick}>About Me</Nav.Link>
                            <Nav.Link href="/contact" className="btn-margin btn btn-portfolio-secondary mt-5" onClick={handleLinkClick}>Contact</Nav.Link>
                        </Nav>
                </div>
            </div>
        </>
    );
}

export default NavBar;
