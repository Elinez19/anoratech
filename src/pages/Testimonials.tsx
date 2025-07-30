import React from 'react';
import TestimonialsHero from '../components/sections/TestimonialsHero';
import TestimonialsGrid from '../components/sections/TestimonialsGrid';

const Testimonials: React.FC = () => {
  return (
    <main className="pt-20">
      <TestimonialsHero />
      <TestimonialsGrid />
    </main>
  );
};

export default Testimonials; 