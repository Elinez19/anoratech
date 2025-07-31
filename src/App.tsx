import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastProvider } from './components/ui/ToastContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { ROUTE_PATHS } from './routes';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <HelmetProvider>
      <ToastProvider>
        <Router>
          <div className={`${isDarkMode ? 'dark' : ''}`}>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              <Route path={ROUTE_PATHS.SERVICES} element={<Services />} />
              <Route path={ROUTE_PATHS.SERVICE_DETAILS} element={<ServiceDetails />} />
              <Route path={ROUTE_PATHS.PORTFOLIO} element={<Portfolio />} />
              <Route path={ROUTE_PATHS.PORTFOLIO_DETAILS} element={<PortfolioDetails />} />
              <Route path={ROUTE_PATHS.BLOG} element={<Blog />} />
              <Route path={ROUTE_PATHS.BLOG_DETAILS} element={<BlogDetails />} />
              <Route path={ROUTE_PATHS.TESTIMONIALS} element={<Testimonials />} />
              <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
              <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
              <Route path={ROUTE_PATHS.FAQ} element={<FAQ />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ToastProvider>
    </HelmetProvider>
  );
}

export default App;