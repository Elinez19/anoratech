import Button from '../ui/Button';
import Container from '../ui/Container';

const ServicesHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-midnight-900 to-mint-600 text-white py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-mint-100 mb-8">
            We provide comprehensive technology solutions to help your business grow and succeed in the digital world.
          </p>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-900">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero; 