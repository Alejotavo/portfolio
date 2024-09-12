import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.scss"
import Logo from "../logo/logo";
import { useEffect, useState } from "react";



function NavBar() {

  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
      if (window.innerWidth < 992) { // Bootstrap's default breakpoint for "lg"
          setExpanded(false);
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
    
        <Navbar expand="lg" className="fixed-top nav" expanded={expanded}>
            <Container className="nav-container">
                <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(true)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home" onClick={handleLinkClick}>Home</Nav.Link>
                        <Nav.Link href="#section2" onClick={handleLinkClick}>Service</Nav.Link>
                        <Nav.Link href="#section3" onClick={handleLinkClick}>Skills</Nav.Link>
                        <Nav.Link href="/portfolio" onClick={handleLinkClick}>Portfolio</Nav.Link>
                        <Nav.Link href="/about" onClick={handleLinkClick}>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
   );
  }
  
  export default NavBar;
  