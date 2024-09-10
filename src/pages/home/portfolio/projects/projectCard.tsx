import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChildComponentProps } from './../../../../models/project'; // Ensure correct path
import { Col } from 'react-bootstrap';

const ProjectCard: React.FC<ChildComponentProps> = ({ project }) => {
    const navigate = useNavigate();

    // Define the function to handle clicks
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
                    data-aos-duration="500" // Adjusted to a numeric value
                >
                    <div 
                        className="card-layout mt-1 mb-1" 
                        onClick={() => handleClick(item.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="project-card-body">
                            <img
                                src={`/${item.img}`}
                                alt={`Image ${item.id}`}
                                style={{ width: '100%', height: 'auto' }} // Ensure image is responsive
                            />
                        </div>
                    </div>
                </Col>
            ))}
        </>
    );
};

export default ProjectCard;
