import React from 'react';
import SEO from '../components/ui/SEO';
import PortfolioHero from '../components/sections/PortfolioHero';
import PortfolioGrid from '../components/sections/PortfolioGrid';

const Portfolio: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Portfolio"
        description="Explore our successful projects and case studies across different industries and technologies. See how we've helped businesses achieve their digital transformation goals."
        keywords={['portfolio', 'case studies', 'projects', 'web development', 'mobile apps', 'success stories', 'client work']}
        url="/portfolio"
        type="website"
      />
      <main className="pt-20">
        <PortfolioHero />
        <PortfolioGrid />
      </main>
    </>
  );
};

export default Portfolio; 