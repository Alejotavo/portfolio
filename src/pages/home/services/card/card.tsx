import "./card.scss"
import {Activitie} from '../../../../models/activitie'
import { Col } from "react-bootstrap";

interface ChildComponentProps {
    activitie: Activitie[]
}

const Card = ({ activitie }: ChildComponentProps) => {
    return (

    <>
        {
            activitie.map((acts ) => (
                <Col key={acts.id} data-aos="fade-up"  data-aos-delay="100" xs={12} md={4}>
                  <div className="card-layout mt-1 mb-1">
                    <div className="card-body">
                    <i className={`bi ${acts.icon}`}></i>
                        <div className="card-title mb-1">{acts.title}</div>
                        <p className="card-text">{acts.description}</p>
                    </div>
                    </div>
                </Col>

            ))
        }
    </>
);
}

  export default Card;