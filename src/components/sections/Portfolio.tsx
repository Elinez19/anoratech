import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../../types';

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'HealthTrack AI',
    description: 'A telemedicine platform with AI-powered symptom analysis and doctor matching.',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Healthcare',
    link: '#',
  },
  {
    id: 2,
    title: 'SupplyGenius',
    description: 'Supply chain optimization platform with predictive inventory management.',
    image: 'https://images.pexels.com/photos/7821488/pexels-photo-7821488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Logistics',
    link: '#',
  },
  {
    id: 3,
    title: 'InvestSmart',
    description: 'AI-powered financial advisory platform for personalized investment strategies.',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Fintech',
    link: '#',
  },
  {
    id: 4,
    title: 'LearnLoop',
    description: 'Adaptive learning platform that personalizes education using AI and machine learning.',
    image: 'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'EdTech',
    link: '#',
  },
];

const categories = ['All', 'Healthcare', 'Logistics', 'Fintech', 'EdTech'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'All'
    ? caseStudies
    : caseStudies.filter(project => project.tag === filter);

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
    <section id="portfolio" className="section bg-midnight-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-mint-100 text-mint-700 font-medium text-sm">
            Our Work
          </div>
          <h2 className="section-title">Transforming Ideas Into Reality</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful MVPs we've built for innovative startups.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category
                  ? 'bg-mint-500 text-white'
                  : 'bg-white text-midnight-600 hover:bg-midnight-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-midnight-900/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  {project.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-midnight-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-mint-600 font-medium hover:text-mint-700 transition-colors"
                >
                  View Case Study
                  <ArrowUpRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;