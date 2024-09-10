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
        <section className="wrapper">
            <Row className='m-0'>
                <Col className="col-12 col-md-9">
                    <div>
                        <img src={`/${project.img}`} alt={project.title} />
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
