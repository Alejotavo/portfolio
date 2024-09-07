import { Col, Row } from "react-bootstrap";
import profile from '../../../assets/profile_pic.png'; // Importa la imagen
import "./mainHeader.scss"

function MainHeader() {
    return (
    <section className="main-header-content">
        <Row g-0>
            <Col>
                <aside data-aos="fade-right">
                    <h1>Welcome to my <b>Portfolio</b></h1>
                    <h3>ALEJO GUSTAVO FRANCOMANO</h3>
                    <p>At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet, quod doloribus the framework of the essence represents a bond between the flexible production planning</p>
                </aside>
            </Col>
            <Col>
                <div  className="col d-flex justify-content-center">
                <img src={profile} alt="Profile" />
                </div>
            </Col>
        </Row>
    </section>
   );
  }
  
  export default MainHeader;