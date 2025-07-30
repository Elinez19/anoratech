import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Award, Users, Zap } from 'lucide-react';
import { TeamMember } from '../../types';

const stats = [
  { id: 1, label: 'Projects Completed', value: '150+', icon: <Award size={24} className="text-mint-500" /> },
  { id: 2, label: 'Average Time to MVP', value: '4 Weeks', icon: <Clock size={24} className="text-mint-500" /> },
  { id: 3, label: 'Client Satisfaction', value: '97%', icon: <Users size={24} className="text-mint-500" /> },
  { id: 4, label: 'Development Speed', value: '3x Faster', icon: <Zap size={24} className="text-mint-500" /> },
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Jennifer Lee',
    position: 'Founder & CEO',
    bio: 'Former CTO at ScaleTech with 15+ years of experience in building tech startups.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    position: 'CTO',
    bio: 'AI expert with a PhD in Computer Science and 10 years of industry experience.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Ava Chen',
    position: 'Head of Design',
    bio: 'Award-winning designer who previously worked at Apple and Google.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'James Wilson',
    position: 'Lead Developer',
    bio: 'Full-stack developer with expertise in building scalable applications.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const About: React.FC = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
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
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-mint-100 text-mint-700 font-medium text-sm">
            About Us
          </div>
          <h2 className="section-title">Building The Future, Faster</h2>
          <p className="section-subtitle">
            We're a team of engineers, designers, and AI specialists on a mission to revolutionize how startups build and launch products.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team working together"
              className="rounded-2xl shadow-elevated h-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-midnight-600 mb-6">
              Founded in 2022, AIDev was born from a simple observation: building MVPs takes too long and costs too much. 
              Our founders, coming from technical backgrounds at leading tech companies, knew there had to be a better way.
            </p>
            <p className="text-midnight-600 mb-6">
              By leveraging the latest in AI and machine learning technologies, we developed a unique methodology that drastically 
              reduces development time while maintaining exceptional quality. What would typically take 3-6 months, we can deliver in weeks.
            </p>
            <p className="text-midnight-600 mb-6">
              Today, we've helped over 150 startups launch their products and secure funding. Our mission is to democratize 
              product development and help founders bring their visions to life faster than ever before.
            </p>
            <a href="#contact" className="btn btn-primary">
              Work With Us
            </a>
          </div>
        </div>

        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-midnight-50 rounded-2xl p-6 text-center"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-subtle">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-midnight-900">{stat.value}</h3>
              <p className="text-midnight-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
          <p className="text-midnight-600 max-w-3xl mx-auto">
            Our diverse team brings together expertise from top tech companies, startups, and research institutions.
          </p>
        </div>

        <motion.div
          ref={teamRef}
          variants={containerVariants}
          initial="hidden"
          animate={teamInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl mx-auto group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-bold mb-1">{member.name}</h4>
              <p className="text-mint-600 font-medium mb-3">{member.position}</p>
              <p className="text-midnight-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;