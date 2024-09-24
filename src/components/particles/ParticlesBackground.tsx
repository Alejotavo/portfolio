import React, { useEffect } from 'react';

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    // @ts-ignore to avoid TypeScript errors when using particlesJS
    window.particlesJS.load('particles-js', '/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100vh' }} />;
};

export default ParticlesBackground;
