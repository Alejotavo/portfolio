import Container from "react-bootstrap/esm/Container";
import MainHeader from "./mainHeader/mainHeader";
import Services from "./services/services";

function Home() {
    return (

      <Container fluid className="px-0" >
        <section className="d-flex  justify-content-center">
          <MainHeader/>
        </section>
        <section className="d-flex justify-content-center">
              <Services/>
          </section>
      </Container>
    );
  }
  
  export default Home;
  