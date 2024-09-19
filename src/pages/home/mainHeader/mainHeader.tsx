import { Col, Row } from "react-bootstrap";
import profile from '../../../../public/images/profile_pic.png'; // Importa la imagen
import "./mainHeader.scss"

function MainHeader() {
    return (
    <section  className="main-header-content">
        <Row  className="m-0">
            <Col className="col-12 col-md-6">
                <aside data-aos="fade-right" className="custom-padding ">
                    <h1 className="mb-5">Welcome to my <b>Portfolio</b></h1>
                    <label className="name mt-0 mb-0">ALEJO GUSTAVO FRANCOMANO</label>
                    <label className="ui-ux mt-1 mb-3">UI-UX & FRONT END DEVELOPER</label>
                    <p>
                        I specialize in creating intuitive and visually appealing interfaces that enhance user experience. If you're looking for innovative and effective solutions for your digital projects, I'm here to help!
                    </p>
                </aside>
            </Col>
            <Col className="col-12 col-md-6">
                <div  className="col d-flex justify-content-center" data-aos="fade-up">
                <img src={profile} alt="Profile" className="img-fluid"  />
                </div>
            </Col>
        </Row>
    </section>
   );
  }
  
  export default MainHeader;