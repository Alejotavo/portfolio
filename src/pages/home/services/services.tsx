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
        <Container id="section1" fluid className="custom-container ">
            <Row className="custom-row">
               <Col xs={12} className="row ms-0">
                <label className="skyblue-subtitle">MY SERVICES</label>
                <h3 className="grey-subtitle">What I Do?</h3>
                <p>At any rate, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet, quod doloribus the framework of the essence represents a bond between the flexible production planning</p>
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