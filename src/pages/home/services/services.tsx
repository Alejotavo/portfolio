import { Button, Col, Container, Row } from "react-bootstrap";
import "./services.scss"

function Services() {
    return (
        <Container fluid className="custom-container">
            <Row className="custom-row">
               <Col xs={12}>
                <label>MY SERVICES</label>
                <h3>What I Do?</h3>
                <p>At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet, quod doloribus the framework of the essence represents a bond between the flexible production planning</p>
               </Col>
                <Row className="custom-row">
                    <Col xs={12} md={4}>
                    <label>MY SERVICES</label>
                    <p>At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                    <Col xs={12} md={4}>
                    <label>MY SERVICES</label>
                    <p>At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                    <Col xs={12} md={4}>
                    <label className="col col-md-4">MY SERVICES</label>
                    <p>At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Row>
            </Row>
        </Container>
   );
  }
  
  export default Services;