import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollBtn from "./components/scrollBtn/scrollBtn"

import PortfolioDetails from "./pages/portfolio-details/portfolioDetails";
import About from "./pages/about/about";
import NavBar from "./components/nav/nav";
import Home from "./pages/home/home";

import 'aos/dist/aos.css';
import AOS from 'aos';
import MainPortfolioPage from "./pages/mainPortfolio/mainPortfolio";
import Contact from "./pages/contact/contact";

AOS.init({
  duration: 1000,
});

function App() {
  return (
    <Container fluid className="px-0 main-wrapper">
      <ScrollBtn/>
        <NavBar/>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<MainPortfolioPage />} />
            <Route path="/portfolioDetails/:id" element={<PortfolioDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
    </Container>
  );
}

export default App;

