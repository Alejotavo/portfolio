import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './portfolio.scss'
import {Project} from '../../../models/project'
import data from './../../../data/projects.json'
import ProjectCard from "./projects/projectCard";


function Portfolio() {

    const [project, setProject] = useState<Project[]>([])

    useEffect( () => {
     setProject(data);
    }, []);

    return (
        <Container id="section4" fluid className="portfolio-custom-container">
            <Row className="custom-row">
               <Col xs={12} xl={6} className="row ms-0">
                <label className="skyblue-subtitle">MY PORTFOLIO</label>
                <h3 className="white-subtitle">Case Studies</h3>
                <p className="mb-4 mb-lg-5">These are the projects I've been actively involved in.</p>
               </Col>
                <Col  xs={12}>
                    <Row className="custom-row">
                       <ProjectCard project={project}/>
                    </Row>
                </Col>
            </Row>
        </Container>
   );
  }
  
  export default Portfolio;