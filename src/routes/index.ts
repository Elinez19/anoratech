import { ROUTES } from '../constants';

// Route path constants
export const ROUTE_PATHS = {
  HOME: ROUTES.HOME,
  SERVICES: ROUTES.SERVICES,
  PORTFOLIO: ROUTES.PORTFOLIO,
  BLOG: ROUTES.BLOG,
  TESTIMONIALS: ROUTES.TESTIMONIALS,
  ABOUT: ROUTES.ABOUT,
  CONTACT: ROUTES.CONTACT,
  FAQ: ROUTES.FAQ,
  // Detail routes
  SERVICE_DETAILS: '/services/:serviceSlug',
  SERVICES_ABUJA: '/services/abuja',
  SERVICES_ADO_EKITI: '/services/ado-ekiti',
  PORTFOLIO_DETAILS: '/portfolio/:projectSlug',
  BLOG_DETAILS: '/blog/:slug',
} as const;

// Route metadata for SEO and navigation
export const ROUTE_METADATA = {
  [ROUTE_PATHS.HOME]: {
    title: 'AnoraTech - AI-Powered MVPs',
    description: 'Leading technology company specializing in web development, mobile applications, and digital solutions.',
    keywords: ['web development', 'mobile apps', 'AI', 'technology', 'digital solutions'],
  },
  [ROUTE_PATHS.SERVICES]: {
    title: 'Our Services - AnoraTech',
    description: 'Comprehensive technology solutions including web development, mobile apps, UI/UX design, and digital marketing.',
    keywords: ['web development', 'mobile development', 'UI/UX design', 'digital marketing', 'cloud solutions'],
  },
  [ROUTE_PATHS.PORTFOLIO]: {
    title: 'Our Portfolio - AnoraTech',
    description: 'Explore our successful projects and case studies across different industries and technologies.',
    keywords: ['portfolio', 'case studies', 'projects', 'web development', 'mobile apps'],
  },
  [ROUTE_PATHS.BLOG]: {
    title: 'Blog - AnoraTech',
    description: 'Latest insights, tips, and industry trends in technology and digital innovation.',
    keywords: ['blog', 'technology', 'insights', 'web development', 'AI'],
  },
  [ROUTE_PATHS.TESTIMONIALS]: {
    title: 'Client Testimonials - AnoraTech',
    description: 'Hear from our satisfied clients about their experience working with AnoraTech.',
    keywords: ['testimonials', 'clients', 'reviews', 'success stories'],
  },
  [ROUTE_PATHS.ABOUT]: {
    title: 'About Us - AnoraTech',
    description: 'Learn about our team, mission, and the story behind AnoraTech.',
    keywords: ['about', 'team', 'mission', 'company'],
  },
  [ROUTE_PATHS.CONTACT]: {
    title: 'Contact Us - AnoraTech',
    description: 'Get in touch with us to discuss your project and start your digital transformation journey.',
    keywords: ['contact', 'get quote', 'project consultation'],
  },
  [ROUTE_PATHS.FAQ]: {
    title: 'FAQ - AnoraTech',
    description: 'Find answers to frequently asked questions about our services and process.',
    keywords: ['FAQ', 'questions', 'services', 'process'],
  },
  '/services/abuja': {
    title: 'Best Software Development Agency in Abuja - AnoraTech',
    description: 'Top-rated software development agency in Abuja, FCT. Expert web development, mobile apps, and digital solutions serving Central Business District, Maitama, Wuse, Garki.',
    keywords: ['software development agency Abuja', 'web development Abuja FCT', 'mobile app development Abuja', 'Abuja software company'],
  },
  '/services/ado-ekiti': {
    title: 'Best Software Development Agency in Ado Ekiti - AnoraTech',
    description: 'Leading software development agency in Ado Ekiti, Ekiti State. Professional web development, mobile apps, and digital solutions serving Ado Ekiti and surrounding areas.',
    keywords: ['software development agency Ado Ekiti', 'web development Ado Ekiti', 'mobile app development Ekiti State', 'Ado Ekiti software company'],
  },
} as const;

// Route groups for navigation
export const NAVIGATION_ROUTES = {
  MAIN: [
    { path: ROUTE_PATHS.HOME, label: 'Home' },
    { path: ROUTE_PATHS.SERVICES, label: 'Services' },
    { path: ROUTE_PATHS.PORTFOLIO, label: 'Portfolio' },
    { path: ROUTE_PATHS.BLOG, label: 'Blog' },
    { path: ROUTE_PATHS.ABOUT, label: 'About' },
    { path: ROUTE_PATHS.CONTACT, label: 'Contact' },
  ],
  FOOTER: [
    { path: ROUTE_PATHS.ABOUT, label: 'About Us' },
    { path: ROUTE_PATHS.SERVICES, label: 'Services' },
    { path: ROUTE_PATHS.PORTFOLIO, label: 'Portfolio' },
    { path: ROUTE_PATHS.BLOG, label: 'Blog' },
    { path: ROUTE_PATHS.TESTIMONIALS, label: 'Testimonials' },
    { path: ROUTE_PATHS.FAQ, label: 'FAQ' },
    { path: ROUTE_PATHS.CONTACT, label: 'Contact' },
  ],
} as const;

// Helper function to get route metadata
export const getRouteMetadata = (path: string) => {
  return ROUTE_METADATA[path as keyof typeof ROUTE_METADATA] || {
    title: 'AnoraTech',
    description: 'Leading technology company',
    keywords: ['technology', 'web development'],
  };
};
