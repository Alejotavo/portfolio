import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Project } from './../../models/project';
import { Col, Row } from 'react-bootstrap';
import projectsData from '../../data/projects.json';
import './portfolioDetails.scss';

const PortfolioDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        const foundProject = projectsData.find((p: Project) => p.id === Number(id));
        setProject(foundProject || null);
    }, [id]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openImage = (src: string, index: number) => {
        if (!isMobile) {
            setSelectedImage(src);
            setCurrentImageIndex(index);
        }
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (project && project.thumbs.length > 0) {
            const nextIndex = (currentImageIndex + 1) % project.thumbs.length;
            setSelectedImage(`/${project.thumbs[nextIndex]}`);
            setCurrentImageIndex(nextIndex);
        }
    };

    const prevImage = () => {
        if (project && project.thumbs.length > 0) {
            const prevIndex = (currentImageIndex - 1 + project.thumbs.length) % project.thumbs.length;
            setSelectedImage(`/${project.thumbs[prevIndex]}`);
            setCurrentImageIndex(prevIndex);
        }
    };

    if (!project) {
        return <p>Project not finded</p>;
    }

    return (
        <section className="main-portfolio-details-content">
            <Row className='m-0 image-gallery pt-md-5 pe-md-3 ps-md-3'>
            <Col className="col-12 col-md-3 order-1 order-md-2 mb-4">
                    <aside>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        {project.technologies.map((technologie) => (
                                <span className="badge rounded-pill bg-info text-dark m-1">{technologie}</span>
                            ))}
                        <Link className='btn btn-light btn-see-all mt-4' to={'/portfolio'}>See all</Link>
                    </aside>
                </Col>
                <Col  className="col-12 col-md-8 order-2 order-md-1">
                    <div>
                        <Row className=' mb-2 mb-md-4'>
                            <Col>
                                <img src={`/${project.img}`} alt={project.title} />
                            </Col>
                        </Row>
                        <Row className='pb-5'>
                            {project.thumbs.map((thumb, index) => (
                                <Col key={index} className="col-12 col-md-4 mb-2 mb-md-0 mt-3 d-flex">
                                    <img
                                        src={`/${thumb}`}
                                        alt={`Thumbnail ${index}`}
                                        className="thumbnail"
                                        onClick={() => openImage(`/${thumb}`, index)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

            {selectedImage && !isMobile && (
                <div className="lightbox">
                    <button className='close-lightbox' onClick={closeImage}><i className="bi bi-x-lg"></i></button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="arrow left-arrow" onClick={(e) => { e.stopPropagation(); prevImage(); }}>←</button>
                        <img src={selectedImage} alt="Portfolio Alejo Gustavo Francomano" className="full-screen-image" />
                        <button className="arrow right-arrow" onClick={(e) => { e.stopPropagation(); nextImage(); }}>→</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default PortfolioDetails;
