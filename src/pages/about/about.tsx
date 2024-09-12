import { Col, Row } from "react-bootstrap";
import profile from '../../../public/images/perfil2_pic.png'; // Importa la imagen
import "./about.scss"

function About() {
    return (
    <section  className="main-about-content d-flex  justify-content-center">
        <Row  className="m-0">
            <Col className="col-12 col-md-6">
                <div  className="col d-flex justify-content-center" data-aos="fade-up">
                <img src={profile} alt="Profile" className="img-fluid flip-horizontal"  />
                </div>
            </Col>
            <Col className="col-12 col-md-6">
                <aside data-aos="fade-right" className="custom-padding mt-md-5 pt-md-5 ">
                    <h1 className="mb-5">Find out more about me</h1>
                    <label className="name mt-0 mb-0">ALEJO GUSTAVO FRANCOMANO</label>
                    <label className="ui-ux mt-1 mb-3">UI-UX & FRONT END DEVELOPER</label>
                    <p>
                    I am a Front-End Developer with a focus on UI/UX, passionate about creating intuitive and visually engaging digital experiences. My work sits at the crossroads of design and functionality, using technologies like React and frameworks such as Bootstrap to develop responsive and optimized interfaces. I enjoy collaborating with multidisciplinary teams to solve complex problems creatively, always keeping the user at the center of the development process.

With a keen eye for detail, I continuously strive to improve my skills and stay updated on the latest design and technology trends, ensuring that every project is modern and effective.
                    </p>
                </aside>
            </Col>
        </Row>
    </section>
   );
  }
  
  export default About;