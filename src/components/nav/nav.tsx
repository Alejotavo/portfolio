import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.scss"
import Logo from "../logo/logo";
import { useEffect } from "react";



function NavBar() {
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
    
    <Navbar expand="lg" className="fixed-top nav">
        <Container className="nav-container">
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#section2">Service</Nav.Link>
              <Nav.Link href="#section3">Skills</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   );
  }
  
  export default NavBar;
  