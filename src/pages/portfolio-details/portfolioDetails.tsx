import './portfolioDetails.scss'
import {  Col, Row } from "react-bootstrap";

function PortfolioDetails() {
    return (
    <section  className="wrapper">
        <Row className='m-0'>
            <Col className="col-12 col-md-9">
                <div>
                   galeria de imagen
                </div>
            </Col>
            <Col className="col-12 col-md-3">
                <aside>
                    Aca va la info
                </aside>
            </Col>
        </Row>
    </section>
   );
  }
  
  export default PortfolioDetails;