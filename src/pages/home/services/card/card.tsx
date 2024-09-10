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
            activitie.map((acts, index ) => (
                <Col key={acts.id} xs={12} md={4}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="000"
                >
                  <div className="card-layout mt-1 mb-1">
                    <div className="card-body">
                    <i className={`bi ${acts.icon} fs-1 color-icon`}></i>
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