import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Feature } from '../../types';
import { Code, Rocket, Users, LineChart, Shield, Zap, BrainCircuit } from 'lucide-react';

const featureData: Feature[] = [
  {
    id: 1,
    title: 'Rapid MVP Development',
    description: 'Build and launch your product in weeks, not months, with our AI-accelerated development process.',
    icon: <Rocket className="text-mint-500" size={24} />,
  },
  {
    id: 2,
    title: 'AI-Driven Architecture',
    description: 'Leverage AI to design scalable, robust application architectures that grow with your business.',
    icon: <BrainCircuit className="text-mint-500" size={24} />,
  },
  {
    id: 3,
    title: 'Custom AI Integration',
    description: 'Seamlessly integrate cutting-edge AI capabilities into your product to create competitive advantages.',
    icon: <Code className="text-mint-500" size={24} />,
  },
  {
    id: 4,
    title: 'User Testing & Validation',
    description: 'Validate your concept with real users and refine your product based on meaningful feedback.',
    icon: <Users className="text-mint-500" size={24} />,
  },
  {
    id: 5,
    title: 'Data-Driven Optimization',
    description: 'Continuously improve your product using data analytics and performance metrics.',
    icon: <LineChart className="text-mint-500" size={24} />,
  },
  {
    id: 6,
    title: 'Security & Compliance',
    description: 'Build with security best practices and industry compliance standards from day one.',
    icon: <Shield className="text-mint-500" size={24} />,
  },
];

const Features: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-mint-100 text-mint-700 font-medium text-sm">
            Our Services
          </div>
          <h2 className="section-title">Supercharge Your Startup With AI</h2>
          <p className="section-subtitle">
            We combine cutting-edge AI technologies with expert development to build exceptional products at unprecedented speeds.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureData.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants}
              className="feature-card bg-white"
            >
              <div className="bg-mint-50 p-3 rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-midnight-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-primary">
            Start Your Project
            <Zap size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;