import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChildComponentProps } from './../../../../models/project';
import { Col } from 'react-bootstrap';
import "./project.scss"

const ProjectCard: React.FC<ChildComponentProps> = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/portfolioDetails/${id}`);
    };

    return (
        <>
            {project.map((item, index) => (
                <Col 
                    key={item.id} 
                    xs={12} 
                    md={4}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="500"
                    className="mt-3"
                >
                    <div 
                        className="project-card-body mt-1 mb-1" 
                        onClick={() => handleClick(item.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={`/${item.img}`}
                            alt={`Image ${item.description}`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Col>
            ))}
        </>
    );
};

export default ProjectCard;
