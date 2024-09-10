import { Col } from "react-bootstrap";
import {Project} from '../../../../models/project'
import './project.scss'

interface ChildComponentProps {
    project: Project[]
}

const ProjectCard = ({ project }: ChildComponentProps) => {
    return (

    <>
        {
            project.map((item, index ) => (
                <Col key={item.id} xs={12} md={4}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="000"
                >
                  <div className="card-layout mt-1 mb-1">
                    <div className="project-card-body">
                        <img
                            key={item.id}
                            src={`/${item.img}`}
                            alt={`Image ${item.id}`}
                            />
                        </div>
                    </div>
                </Col>

            ))
        }
    </>
);
}

  export default ProjectCard;