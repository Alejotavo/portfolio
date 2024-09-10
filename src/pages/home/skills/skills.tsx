import { useEffect, useState } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./skills.scss"
import Progress from "./progress";

import data from '../../../data/skills.json'
import {Skill} from '../../../models/skill'

function Skills() {

    const [skill, setSkill] = useState<Skill[]>([])

    useEffect( () => {
        setSkill(data);
    }, []);

    return (
    <Container id="section2" fluid className="skills-custom-container">
       <Row  className="skills-custom-row">
               <Col className="ms-0 col-12 col-md-6">
                    <Row>
                        <Col className='col-12'>
                        <label className="skyblue-subtitle">MY SKILLS</label>
                        <h3 className="grey-subtitle">Some of my Knowledge</h3>
                        <p className="mb-4 mb-lg-5"> My skill set encompasses a range of technologies and methodologies, ensuring I can tackle diverse project requirements with efficiency and creativity.</p>
                        </Col>
                        <Col className='col-12'>
                            <Progress skill= {skill}/>
                        </Col>
                    </Row>
               </Col>
               <Col>
                Imagen
               </Col>
        </Row>
    </Container>
      
    );
  }
  export default Skills;
  