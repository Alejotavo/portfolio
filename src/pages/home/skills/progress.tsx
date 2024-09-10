import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Skill } from '../../../models/skill';
import { useInView } from 'react-intersection-observer';

interface ChildComponentProps {
    skill: Skill[];
}

const Progress = ({ skill }: ChildComponentProps) => {
    // Estado para las barras de progreso animadas
    const [progressValues, setProgressValues] = useState<{ [key: number]: number }>({});
    
    // Hook para detectar si el componente está en vista
    const { ref, inView } = useInView({
        triggerOnce: true, // Solo ejecutar la animación una vez
        threshold: 0.1, // El componente debe estar al menos al 10% visible
    });

    useEffect(() => {
        if (inView) {
            // Función para animar el progreso
            const animateProgress = () => {
                skill.forEach((x, index) => {
                    setProgressValues(prev => {
                        const current = prev[index] || 0;
                        if (current < x.value) {
                            return { ...prev, [index]: Math.min(current + 1, x.value) };
                        } else {
                            return prev;
                        }
                    });
                });
            };

            const interval = setInterval(animateProgress, 20); // Ajusta el intervalo según tu necesidad

            // Limpieza del intervalo cuando se completa la animación
            const cleanup = () => clearInterval(interval);
            return cleanup;
        }
    }, [inView, skill]);

    return (
        <div ref={ref}>
            {skill.map((x, index) => (
                <div
                    key={index}
                    className="col-12 mb-3"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-duration="500"
                >
                    <label className="form-label">{x.title}</label>
                    <div>
                        <span className="progress-label">{`${progressValues[index] || 0}%`}</span>
                        <ProgressBar now={progressValues[index] || 0} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Progress;
