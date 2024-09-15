import { useState, useEffect } from 'react';
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


    useEffect(() => {
        // Agregar la clase 'no-scroll' al body cuando el menú está abierto
        if (showFullscreenMenu) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        // Limpiar la clase al desmontar el componente
        return () => {
          document.body.classList.remove('no-scroll');
        };
    }, [showFullscreenMenu]);




    return (
        <>
            <Navbar expand="lg" className="fixed-top nav" expanded={isExpanded}>
                <Container className="nav-container">
                    <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
    
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
                    <button className="bi bi-x-lg close-button" onClick={() => setShowFullscreenMenu(false)}></button>
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
