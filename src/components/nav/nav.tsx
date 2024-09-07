import "./nav.scss"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../logo/logo";

function NavBar() {
    return (
    
    <Navbar expand="lg" className="bg-body-tertiary nav">
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link>Service</Nav.Link>
              <Nav.Link>Skills</Nav.Link>
              <Nav.Link href="">Portfolio</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   );
  }
  
  export default NavBar;
  