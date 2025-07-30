import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../../types';

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'How quickly can you deliver an MVP?',
    answer: `Our typical timeline ranges from 2-6 weeks depending on the complexity of your project. During our initial consultation, we'll provide you with a more specific estimate based on your requirements.`,
  },
  {
    id: 2,
    question: 'Do you provide ongoing support after the MVP is launched?',
    answer: 'Yes, we offer flexible post-launch support and maintenance packages. We can help with bug fixes, additional feature development, and scaling your product as your user base grows.',
  },
  {
    id: 3,
    question: 'How much does it cost to build an MVP with your agency?',
    answer: 'Our MVP development starts at $15,000, with the final cost depending on the scope and complexity of your project. We provide detailed, transparent quotes after understanding your specific requirements.',
  },
  {
    id: 4,
    question: 'Do I need a technical background to work with you?',
    answer: 'Not at all! We work with many non-technical founders and can guide you through the entire process. Our team excels at translating business requirements into technical specifications and delivering user-friendly products.',
  },
  {
    id: 5,
    question: 'Do you offer design services as part of the MVP development?',
    answer: 'Yes, our comprehensive MVP package includes UX/UI design. Our design team works closely with developers to create intuitive, visually appealing interfaces that align with your brand identity.',
  },
  {
    id: 6,
    question: 'Will I own the source code and intellectual property?',
    answer: 'Absolutely. Upon final payment, you receive full ownership of all code, design assets, and intellectual property related to your project.',
  },
];

const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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
        duration: 0.5,
      },
    },
  };

  return (
    <section id="faq" className="section bg-midnight-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-mint-100 text-mint-700 font-medium text-sm">
            FAQ
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our MVP development process.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="mb-4 bg-white rounded-xl shadow-subtle overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={openId === item.id}
              >
                <h3 className="text-lg font-bold">{item.question}</h3>
                {openId === item.id ? (
                  <ChevronUp size={20} className="text-mint-500" />
                ) : (
                  <ChevronDown size={20} className="text-midnight-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-midnight-600">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-midnight-600 mb-6">
            Still have questions? Feel free to reach out to us directly.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;