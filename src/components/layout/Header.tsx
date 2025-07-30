import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, MEGA_MENU_ITEMS, COMPANY_INFO } from '../../constants';
import { ROUTE_PATHS } from '../../routes';
import Button from '../ui/Button';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMegaMenuEnter = (title: string) => {
    setActiveMegaMenu(title);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const isActiveLink = (href: string) => {
    if (href === ROUTE_PATHS.HOME) {
      return location.pathname === ROUTE_PATHS.HOME;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-subtle backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to={ROUTE_PATHS.HOME} className="flex items-center flex-shrink-0">
            <span className="font-space text-2xl font-bold bg-gradient-to-r from-midnight-900 to-mint-600 bg-clip-text text-transparent">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => {
                const hasMegaMenu = MEGA_MENU_ITEMS.some(menu => menu.title === item.label);
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasMegaMenu && handleMegaMenuEnter(item.label)}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                        isActiveLink(item.href)
                          ? 'text-mint-600 bg-mint-50'
                          : 'text-midnight-800 hover:text-mint-600'
                      }`}
                    >
                      {item.label}
                      {hasMegaMenu && <ChevronDown size={16} />}
                    </Link>
                    {/* Mega Menu */}
                    {hasMegaMenu && activeMegaMenu === item.label && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white border border-midnight-100 rounded-lg shadow-xl"
                          style={{
                            left: '50%',
                            transform: 'translateX(-50%)'
                          }}
                        >
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                            {MEGA_MENU_ITEMS.find(menu => menu.title === item.label)?.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="group p-4 rounded-lg hover:bg-midnight-50 transition-colors"
                              >
                                <h3 className="font-semibold text-midnight-900 group-hover:text-mint-600 transition-colors">
                                  {subItem.label}
                                </h3>
                                <p className="text-sm text-midnight-600 mt-1">
                                  {subItem.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-midnight-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button href={ROUTE_PATHS.CONTACT} variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-midnight-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-midnight-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-midnight-100"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`py-2 px-3 rounded-lg font-medium transition-colors ${
                      isActiveLink(item.href)
                        ? 'text-mint-600 bg-mint-50'
                        : 'text-midnight-800 hover:text-mint-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button href={ROUTE_PATHS.CONTACT} variant="primary" className="w-full">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;