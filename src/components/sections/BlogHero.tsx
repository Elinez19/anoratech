import Button from '../ui/Button';
import Container from '../ui/Container';

const BlogHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-midnight-900 to-mint-600 text-white py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-mint-100 mb-8">
            Insights, tips, and industry trends to help you stay ahead in the digital world.
          </p>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-midnight-900">
            Subscribe to Newsletter
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BlogHero; 