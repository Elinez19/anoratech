import Button from '../ui/Button';
import Container from '../ui/Container';

const FAQHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-midnight-900 to-mint-600 text-white py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-mint-100 mb-8">
            Find answers to common questions about our services, process, and what to expect when working with us.
          </p>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-900">
            Still Have Questions?
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FAQHero; 