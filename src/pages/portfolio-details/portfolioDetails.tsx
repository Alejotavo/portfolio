import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Project } from './../../models/project'; // Asegúrate de que la ruta sea correcta
import { Col, Row } from 'react-bootstrap';
import projectsData from '../../data/projects.json';
import './portfolioDetails.scss'

const PortfolioDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Obtener el parámetro 'id' de la URL
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        // Filtrar los datos importados para encontrar el proyecto con el ID dado
        const foundProject = projectsData.find((p: Project) => p.id === Number(id));
        setProject(foundProject || null);
    }, [id]);

    if (!project) {
        return <p>Proyecto no encontrado</p>;
    }

    return (
        <section className="main-portfolio-details-content">
            <Row className='m-0'>
                <Col className="col-12 col-md-9">
                    <div className='image-gallery'>
                        <img src={`/${project.img}`} alt={project.title} />
                        <Row>
                            {
                                project.thumbs.map((thumb, id) => (
                                    <Col>
                                        <img key={id}  style={{ width: '100px' }}  src={`/${thumb}`} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Col>
                <Col className="col-12 col-md-3">
                    <aside>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </aside>
                </Col>
            </Row>
        </section>
    );
}

export default PortfolioDetails;


