import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollBtn from "./components/scrollBtn/scrollBtn"

import PortfolioDetails from "./pages/portfolio-details/portfolioDetails";
import About from "./pages/about/about";
import NavBar from "./components/nav/nav";
import Home from "./pages/home/home";

import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS


// Inicializa AOS
AOS.init({
  duration: 1000, // Duración de la animación en milisegundos
});

function App() {
  return (
    <Container fluid className="px-0">
      <ScrollBtn/>
        <NavBar/>
        <Router>
          <Routes>
            <Route path="*" />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolioDetails/:id" element={<PortfolioDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
    </Container>
  );
}

export default App;

