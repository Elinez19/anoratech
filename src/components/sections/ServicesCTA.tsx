import Button from '../ui/Button';
import Container from '../ui/Container';

const ServicesCTA: React.FC = () => {
  return (
    <section className="bg-midnight-50 py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-midnight-600 mb-8">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCTA; 