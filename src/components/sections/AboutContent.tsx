import Container from '../ui/Container';
import Card from '../ui/Card';

const AboutContent: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-midnight-600 mb-6">
              Founded in 2020, AnoraTech has been at the forefront of digital innovation, helping businesses of all sizes transform their ideas into powerful digital solutions. Our team combines technical expertise with creative problem-solving to deliver exceptional results.
            </p>
            <p className="text-lg text-midnight-600 mb-6">
              We believe that technology should be accessible, intuitive, and impactful. That's why we focus on creating solutions that not only meet technical requirements but also provide real value to users and businesses.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-mint-600 mb-2">50+</h3>
                <p className="text-midnight-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-mint-600 mb-2">30+</h3>
                <p className="text-midnight-600">Happy Clients</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-midnight-900 mb-4">Innovation</h3>
            <p className="text-midnight-600">
              We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.
            </p>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-midnight-900 mb-4">Collaboration</h3>
            <p className="text-midnight-600">
              We work closely with our clients throughout the entire process, ensuring their vision is perfectly realized.
            </p>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-midnight-900 mb-4">Quality</h3>
            <p className="text-midnight-600">
              We maintain the highest standards of quality in every project, from initial concept to final delivery.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-midnight-600 max-w-4xl mx-auto">
            To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutContent; 