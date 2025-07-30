
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

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
              <a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-space text-lg font-medium mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">MVP Development</a></li>
              <li><a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">AI Integration</a></li>
              <li><a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">UX Design</a></li>
              <li><a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">API Development</a></li>
              <li><a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">Web Applications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-space text-lg font-medium mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-midnight-300 hover:text-mint-500 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-midnight-300 hover:text-mint-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-midnight-300 hover:text-mint-500 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-space text-lg font-medium mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-mint-500" />
                <span className="text-midnight-300">hello@anora.tech</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-mint-500" />
                <span className="text-midnight-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-mint-500" />
                <span className="text-midnight-300">
                  123 Innovation Way<br />
                  San Francisco, CA 94107
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
            <a href="#" className="text-midnight-400 hover:text-mint-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-midnight-400 hover:text-mint-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-midnight-400 hover:text-mint-500 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;