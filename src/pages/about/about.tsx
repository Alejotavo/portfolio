import { Col, Row } from "react-bootstrap";
import profile from '../../../public/images/perfil2_pic.png'; // Importa la imagen
import "./about.scss"
import Timeline from "../../components/timeline/timeline";
import timelineData from "../../data/timeline.json";
import {Event} from "../../models/timeline"
import { useEffect, useState } from "react";


function About() {

    const [timeline, setTimeline] = useState<Event[]>([])

    useEffect( () => {
     setTimeline(timelineData);
    }, []);


    return (
    <section  className="main-about-content d-flex  justify-content-center">
        <Row  className="m-0">
            <Col className="col-12 col-md-6">
                <div  className="col d-flex justify-content-center" data-aos="fade-up">
                <img src={profile} alt="Alejo Gustavo Francomano" className="img-fluid flip-horizontal"  />
                </div>
            </Col>
            <Col className="col-12 col-md-6">
                <aside data-aos="fade-right" className=" mt-md-5 pt-md-5 pe-md-5 p-2">
                    <h1 className="mb-5">Find out more about me</h1>
                    <div className="name mt-0 mb-0">ALEJO GUSTAVO FRANCOMANO</div>
                    <label className="ui-ux mt-1 mb-3 fw-bold">UI-UX & FRONT END DEVELOPER</label>
                   <ul>
                        <li className=" mb-3">
                            Front-End Developer specialized in UI/UX design, passionate about crafting intuitive and visually compelling digital experiences.
                        </li>
                        <li className=" mb-3">
                            Skilled in combining design principles with functional development to create seamless user interfaces.
                        </li>
                        <li className=" mb-3">
                            Proficient in React, Ant Design, Tailwind and Bootstrap, focusing on building responsive, performant, and optimized web applications.
                        </li>
                        <li className=" mb-3">
                            Experienced working collaboratively within multidisciplinary teams to tackle complex challenges with creative solutions.
                        </li>
                        <li className=" mb-3">
                            Strong user-centered approach, ensuring that all development decisions prioritize usability and user satisfaction.
                        </li>
                   </ul>
                </aside>
                <section data-aos="fade-left">
                        <Timeline timeline={timeline}/>
                </section>
            </Col>
        </Row>
    </section>
   );
  }
  
  export default About;