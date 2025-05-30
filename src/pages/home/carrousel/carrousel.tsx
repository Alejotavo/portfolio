
import { Col, Container, Row } from "react-bootstrap";
import './carrousel.scss'

import Marquee from "react-fast-marquee";

function Carrousel() {



    return (
        <Container id="section4" fluid className="carrousel">
            <Row>
               <Col>
               <Marquee>
                    <ul>
                        <li><img src="./images/carrousel/logo1.png"></img></li>
                        <li><img src="./images/carrousel/logo2.png"></img></li>
                        <li><img src="./images/carrousel/logo3.png"></img></li>
                        <li><img src="./images/carrousel/logo4.png"></img></li>
                        <li><img src="./images/carrousel/logo5.png"></img></li>
                        <li><img src="./images/carrousel/logo6.png"></img></li>
                        <li><img src="./images/carrousel/logo7.png"></img></li>
                    </ul>
                </Marquee>
               </Col>
            </Row>
        </Container>
   );
  }
  
  export default Carrousel;