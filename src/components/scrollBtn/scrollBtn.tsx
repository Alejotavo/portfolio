import React, { useState, useEffect } from 'react';
import './scrollBtn.scss'; // Import the CSS file for styling

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button 
            className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            ↑
        </button>
    );
};

export default ScrollToTopButton;
