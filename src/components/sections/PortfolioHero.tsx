import Button from '../ui/Button';
import Container from '../ui/Container';

const PortfolioHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-midnight-900 to-mint-600 text-white py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-mint-100 mb-8">
            Discover our successful projects and see how we've helped businesses transform their ideas into reality.
          </p>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-900">
            Start Your Project
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioHero; 