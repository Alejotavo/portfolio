import { Col, Row } from "react-bootstrap";
import profile from '../../../assets/profile_pic.png'; // Importa la imagen

function MainHeader() {
    return (
    <section>
        <Row>
            <Col>
                <aside>
                    <h1>Welcome to My Portfolio</h1>
                    <h3>ALEJO GUSTAVO FRANCOMANO</h3>
                    <p>Lorem Ipsum segoe merdask laralala</p>
                </aside>
            </Col>
            <Col>
                <div>
                <img src={profile} alt="Profile" />
                </div>
            </Col>
        </Row>
    </section>
   );
  }
  
  export default MainHeader;