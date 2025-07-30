import Button from '../ui/Button';
import Container from '../ui/Container';

const AboutHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-midnight-900 to-mint-600 text-white py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About AnoraTech
          </h1>
          <p className="text-xl text-mint-100 mb-8">
            We're a team of passionate technologists dedicated to transforming ideas into innovative digital solutions.
          </p>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-900">
            Get in Touch
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero; 