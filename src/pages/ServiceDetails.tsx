import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Users, Code, Smartphone, Palette, TrendingUp, Cloud, Users as UsersIcon } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Service } from '../types';

// Mock service data - in a real app, this would come from an API
const services: Record<string, Service> = {
  'web-development': {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications and websites built with modern technologies and best practices.',
    icon: <Code className="w-8 h-8 text-mint-600" />,
    features: [
      'Responsive design for all devices',
      'SEO optimization for better visibility',
      'Performance optimization for fast loading',
      'Security best practices implementation',
      'Content management systems',
      'E-commerce solutions',
      'API development and integration',
      'Database design and optimization'
    ],
    price: 'Starting from $5,000'
  },
  'mobile-development': {
    id: 2,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: <Smartphone className="w-8 h-8 text-mint-600" />,
    features: [
      'iOS development with Swift/Objective-C',
      'Android development with Kotlin/Java',
      'Cross-platform solutions (React Native, Flutter)',
      'App store optimization',
      'Push notifications implementation',
      'Offline functionality',
      'Biometric authentication',
      'Real-time data synchronization'
    ],
    price: 'Starting from $8,000'
  },
  'ui-ux-design': {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging user experiences.',
    icon: <Palette className="w-8 h-8 text-mint-600" />,
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and branding',
      'User testing and feedback',
      'Design systems and style guides',
      'Accessibility compliance',
      'Interactive prototypes',
      'Design-to-development handoff'
    ],
    price: 'Starting from $3,000'
  },
  'digital-marketing': {
    id: 4,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    icon: <TrendingUp className="w-8 h-8 text-mint-600" />,
    features: [
      'Search engine optimization (SEO)',
      'Social media marketing',
      'Content marketing strategy',
      'Email marketing campaigns',
      'Analytics and reporting',
      'Conversion optimization',
      'PPC and paid advertising',
      'Marketing automation'
    ],
    price: 'Starting from $2,000'
  },
  'cloud-solutions': {
    id: 5,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps solutions for modern applications.',
    icon: <Cloud className="w-8 h-8 text-mint-600" />,
    features: [
      'AWS/Azure/GCP setup and migration',
      'CI/CD pipeline implementation',
      'Container orchestration (Kubernetes)',
      'Monitoring and logging solutions',
      'Security and compliance',
      'Cost optimization strategies',
      'Disaster recovery planning',
      'Auto-scaling configuration'
    ],
    price: 'Starting from $4,000'
  },
  'consulting': {
    id: 6,
    title: 'Technology Consulting',
    description: 'Strategic technology consulting to help you make informed decisions.',
    icon: <UsersIcon className="w-8 h-8 text-mint-600" />,
    features: [
      'Technology assessment and audit',
      'Architecture planning and design',
      'Team augmentation services',
      'Project management support',
      'Code reviews and optimization',
      'Performance audits',
      'Security assessments',
      'Technology roadmap planning'
    ],
    price: 'Starting from $150/hour'
  }
};

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, requirements, and target audience.',
    icon: <Users className="w-6 h-6" />
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description: 'Create wireframes, mockups, and interactive prototypes for your approval.',
    icon: <Palette className="w-6 h-6" />
  },
  {
    step: 3,
    title: 'Development',
    description: 'Build your solution using modern technologies and best practices.',
    icon: <Code className="w-6 h-6" />
  },
  {
    step: 4,
    title: 'Testing & Quality Assurance',
    description: 'Thorough testing to ensure everything works perfectly.',
    icon: <Check className="w-6 h-6" />
  },
  {
    step: 5,
    title: 'Deployment & Launch',
    description: 'Deploy your solution and provide launch support.',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    step: 6,
    title: 'Support & Maintenance',
    description: 'Ongoing support and maintenance to keep your solution running smoothly.',
    icon: <Clock className="w-6 h-6" />
  }
];

const ServiceDetails: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  // In a real app, you would fetch the service based on the serviceSlug
  const service = services[serviceSlug || 'web-development'];

  if (!service) {
    return (
      <main className="pt-20">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-midnight-900 mb-4">Service Not Found</h1>
            <p className="text-midnight-600 mb-8">The service you're looking for doesn't exist.</p>
            <Link to="/services" className="text-mint-600 hover:text-mint-700 font-medium">
              ← Back to Services
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-900 to-mint-600 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-mint-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
            
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-mint-100 mb-8 max-w-3xl mx-auto">
                {service.description}
              </p>
              <div className="text-2xl font-bold text-mint-200">
                {service.price}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-midnight-900 mb-12 text-center">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-mint-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-mint-600" />
                  </div>
                  <p className="text-midnight-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="bg-midnight-50 py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-midnight-900 mb-12 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <Card key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-mint-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-sm text-mint-600 font-medium mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-bold text-midnight-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-midnight-600">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-midnight-600 mb-8">
              Let's discuss your project requirements and create a custom solution for your business.
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
    </main>
  );
};

export default ServiceDetails; 