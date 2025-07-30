
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../routes';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-midnight-950 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-space text-2xl font-bold mb-4 text-white">AnoraTech</h3>
            <p className="text-midnight-300 mb-4">
              Building extraordinary MVPs at unprecedented speeds using AI-powered development.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} className="text-midnight-300 hover:text-mint-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.twitter} className="text-midnight-300 hover:text-mint-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href={SOCIAL_LINKS.instagram} className="text-midnight-300 hover:text-mint-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} className="text-midnight-300 hover:text-mint-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL_LINKS.github} className="text-midnight-300 hover:text-mint-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-space text-lg font-medium mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link to={ROUTE_PATHS.SERVICES} className="text-midnight-300 hover:text-mint-500 transition-colors">MVP Development</Link></li>
              <li><Link to={ROUTE_PATHS.SERVICES} className="text-midnight-300 hover:text-mint-500 transition-colors">AI Integration</Link></li>
              <li><Link to={ROUTE_PATHS.SERVICES} className="text-midnight-300 hover:text-mint-500 transition-colors">UX Design</Link></li>
              <li><Link to={ROUTE_PATHS.SERVICES} className="text-midnight-300 hover:text-mint-500 transition-colors">API Development</Link></li>
              <li><Link to={ROUTE_PATHS.SERVICES} className="text-midnight-300 hover:text-mint-500 transition-colors">Web Applications</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-space text-lg font-medium mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link to={ROUTE_PATHS.ABOUT} className="text-midnight-300 hover:text-mint-500 transition-colors">About Us</Link></li>
              <li><Link to={ROUTE_PATHS.PORTFOLIO} className="text-midnight-300 hover:text-mint-500 transition-colors">Portfolio</Link></li>
              <li><Link to={ROUTE_PATHS.BLOG} className="text-midnight-300 hover:text-mint-500 transition-colors">Blog</Link></li>
              <li><Link to={ROUTE_PATHS.ABOUT} className="text-midnight-300 hover:text-mint-500 transition-colors">Careers</Link></li>
              <li><Link to={ROUTE_PATHS.ABOUT} className="text-midnight-300 hover:text-mint-500 transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-space text-lg font-medium mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-mint-500" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-midnight-300 hover:text-mint-500 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-mint-500" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-midnight-300 hover:text-mint-500 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-mint-500" />
                <span className="text-midnight-300">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-midnight-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-midnight-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AnoraTech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to={ROUTE_PATHS.ABOUT} className="text-midnight-400 hover:text-mint-500 text-sm transition-colors">Privacy Policy</Link>
            <Link to={ROUTE_PATHS.ABOUT} className="text-midnight-400 hover:text-mint-500 text-sm transition-colors">Terms of Service</Link>
            <Link to={ROUTE_PATHS.ABOUT} className="text-midnight-400 hover:text-mint-500 text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;