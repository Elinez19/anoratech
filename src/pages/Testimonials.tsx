import React from 'react';
import SEO from '../components/ui/SEO';
import TestimonialsHero from '../components/sections/TestimonialsHero';
import TestimonialsGrid from '../components/sections/TestimonialsGrid';

const Testimonials: React.FC = () => {
  return (
    <>
      <SEO
        title="Client Testimonials"
        description="Hear from our satisfied clients about their experience working with AnoraTech. Read real success stories and discover how we've helped businesses achieve their goals."
        keywords={['testimonials', 'clients', 'reviews', 'success stories', 'client feedback', 'case studies']}
        url="/testimonials"
        type="website"
      />
      <main className="pt-20">
        <TestimonialsHero />
        <TestimonialsGrid />
      </main>
    </>
  );
};

export default Testimonials; 