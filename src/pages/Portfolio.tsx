import PortfolioHero from '../components/sections/PortfolioHero';
import PortfolioGrid from '../components/sections/PortfolioGrid';

const Portfolio: React.FC = () => {
  return (
    <main className="pt-20">
      <PortfolioHero />
      <PortfolioGrid />
    </main>
  );
};

export default Portfolio; 