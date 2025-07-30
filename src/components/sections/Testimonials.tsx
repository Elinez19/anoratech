import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Founder & CEO',
    company: 'HealthTech Solutions',
    quote: 'Working with AnoraTech transformed our startup journey. They delivered a sophisticated health tracking MVP in just 3 weeks, which helped us secure our seed funding round of $1.5M. Their AI-driven approach saved us months of development time.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'David Chen',
    position: 'Co-founder',
    company: 'FinEdge',
    quote: 'We had a complex financial product that needed a simplified user experience. AnoraTech not only built our MVP rapidly, but their AI integration recommendations gave us a competitive edge in the fintech space. Impressive work!',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Alex Rivera',
    position: 'Product Lead',
    company: 'LogistX',
    quote: `Our supply chain optimization platform needed to handle complex algorithms while remaining user-friendly. The team at AnoraTech delivered exactly what we needed in record time. We've since raised Series A and our user base is growing exponentially.`,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-midnight-950 text-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-midnight-800 text-mint-400 font-medium text-sm">
            Success Stories
          </div>
          <h2 className="section-title text-white">What Our Clients Say</h2>
          <p className="section-subtitle text-midnight-300">
            Don't just take our word for it. Hear from founders who've transformed their startups with our help.
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="relative bg-midnight-900 rounded-2xl p-8 md:p-10 shadow-elevated">
              <Quote className="absolute top-8 left-8 text-mint-500 opacity-20" size={48} />
              
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-mint-500">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</h3>
                <p className="text-midnight-300 text-sm">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
              
              <blockquote className="text-lg md:text-xl text-midnight-100 text-center relative z-10">
                "{testimonials[currentIndex].quote}"
              </blockquote>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-midnight-800 hover:bg-midnight-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-mint-500' : 'bg-midnight-700'
                  } transition-colors`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-midnight-800 hover:bg-midnight-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;