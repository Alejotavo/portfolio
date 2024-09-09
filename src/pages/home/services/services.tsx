import { Col, Container, Row } from "react-bootstrap";
import "./services.scss"
import Card from "./card/card";

function Services() {
    return (
        <Container id="section1" fluid className="custom-container ">
            <Row className="custom-row">
               <Col xs={12}>
                <label className="skyblue-subtitle">MY SERVICES</label>
                <h3 className="grey-subtitle">What I Do?</h3>
                <p>At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet, quod doloribus the framework of the essence represents a bond between the flexible production planning</p>
               </Col>
                <Col  xs={12}>
                    <Row className="custom-row">
                        <Col data-aos="fade-up"  data-aos-delay="100" xs={12} md={4} >
                            <Card/>
                        </Col>
                        <Col data-aos="fade-up"  data-aos-delay="300" xs={12} md={4}>
                            <Card/>
                        </Col>
                        <Col data-aos="fade-up"  data-aos-delay="500" xs={12} md={4}>
                            <Card/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
   );
  }
  
  export default Services;