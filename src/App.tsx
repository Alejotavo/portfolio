import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/about/about";
import NavBar from "./components/nav/nav";

function App() {
  return (
    <Container fluid className="no-margins">
        <NavBar/>
        <Router>
          <Routes>
            <Route path="*" />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
    </Container>
  );
}

export default App;
