import { useEffect, useState } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./skills.scss"
import Progress from "./progress";
import skills from '../../../../public/images/skills_pic.png'
import data from '../../../data/skills.json'
import {Skill} from '../../../models/skill'


function Skills() {

    const [skill, setSkill] = useState<Skill[]>([])

    useEffect( () => {
        setSkill(data);
    }, []);

    return (
    <Container id="section3" fluid className="skills-custom-container">
       <Row  className="skills-custom-row">
               <Col className="ms-0 col-12 col-md-6">
                    <Row>
                        <Col className='col-12 col-lg-10 mt-0 mt-md-5'>
                        <label className="skyblue-subtitle">MY SKILLS</label>
                        <h3 className="grey-subtitle">Some of my Knowledge</h3>
                        <p className="mb-4 mb-lg-5"> My experience covers a wide range of technologies and methods, allowing me to approach different project needs with accuracy and innovative solutions.</p>
                        </Col>
                        <Col className='col-12 col-lg-11'>
                            <Progress skill= {skill}/>
                        </Col>
                    </Row>
               </Col>
               <Col className='mt-5'>
               <img src={skills} alt="Alejo Gustavo Francomano web development skills" className="img-fluid"  data-aos="fade-up" data-aos-delay={1000}/>
               </Col>
        </Row>
    </Container>
      
    );
  }
  export default Skills;
  