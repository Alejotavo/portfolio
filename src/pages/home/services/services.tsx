import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./services.scss"
import Card from "./card/card";

import data from './../../../data/services.json'
import {Activitie} from '../../../models/activitie'


function Services() {

   const [activitie, setActivitie] = useState<Activitie[]>([])

   useEffect( () => {
    setActivitie(data);
   }, []);

    return (
        <Container id="section2" fluid className="custom-container">
            <Row className="custom-row mt-0 mt-md-5">
               <Col xs={12} xl={6} className="row ms-0">
                <label className="skyblue-subtitle">MY SERVICES</label>
                <h3 className="white-subtitle">What I Do?</h3>
                <p className="mb-4 mb-lg-5">At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet, quod doloribus the framework of the essence represents a bond between the flexible production planning</p>
               </Col>
                <Col  xs={12}>
                    <Row className="custom-row">
                        <Card activitie= {activitie}/>
                    </Row>
                </Col>
            </Row>
        </Container>
   );
  }
  
  export default Services;