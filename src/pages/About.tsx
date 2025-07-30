import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import AboutContent from '../components/sections/AboutContent';

const About: React.FC = () => {
  return (
    <main className="pt-20">
      <AboutHero />
      <AboutContent />
    </main>
  );
};

export default About; 