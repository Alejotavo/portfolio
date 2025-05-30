import Container from "react-bootstrap/esm/Container";
import MainHeader from "./mainHeader/mainHeader";
import Services from "./services/services";
import Skills from "./skills/skills";
import Portfolio from "./portfolio/portfolio";
import Carrousel from "./carrousel/carrousel";

function Home() {
    return (

      <Container fluid className="px-0" >
        <section className="d-flex  justify-content-center">
          <MainHeader/>
        </section>
        <section>
          <Carrousel/>
        </section>
        <section>
          <Services/>
        </section>
        <section>
          <Skills/>
        </section>
        <section>
          <Portfolio/>
        </section>
      </Container>
    );
  }
  
  export default Home;
  