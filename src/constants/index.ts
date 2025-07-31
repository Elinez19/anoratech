import { NavItem, MegaMenuItem, CaseStudy, BlogPost, Testimonial, FAQItem } from '../types';

// Route constants
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  BLOG: '/blog',
  TESTIMONIALS: '/testimonials',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
} as const;

// Navigation items for the main menu
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Services', href: ROUTES.SERVICES },
  { label: 'Portfolio', href: ROUTES.PORTFOLIO },
  { label: 'Blog', href: ROUTES.BLOG },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Contact', href: ROUTES.CONTACT },
];

// Mega menu items
export const MEGA_MENU_ITEMS: MegaMenuItem[] = [
  {
    title: 'Services',
    items: [
      { label: 'Web Development', href: '/services/web-development', description: 'Custom web applications and websites' },
      { label: 'Mobile Development', href: '/services/mobile-development', description: 'iOS and Android applications' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design', description: 'User interface and experience design' },
      { label: 'Digital Marketing', href: '/services/digital-marketing', description: 'SEO, SEM, and social media marketing' },
      { label: 'Cloud Solutions', href: '/services/cloud-solutions', description: 'AWS, Azure, and Google Cloud services' },
      { label: 'Consulting', href: '/services/consulting', description: 'Technology strategy and consulting' },
    ]
  },
  {
    title: 'Portfolio',
    items: [
      { label: 'Web Projects', href: '/portfolio/web', description: 'Showcase of web development projects' },
      { label: 'Mobile Apps', href: '/portfolio/mobile', description: 'iOS and Android applications' },
      { label: 'Design Work', href: '/portfolio/design', description: 'UI/UX and graphic design projects' },
      { label: 'Case Studies', href: '/portfolio/case-studies', description: 'Detailed project case studies' },
    ]
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '/about', description: 'Learn about our team and mission' },
      { label: 'Our Team', href: '/about/team', description: 'Meet our talented team members' },
      { label: 'Careers', href: '/about/careers', description: 'Join our growing team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch with us' },
    ]
  },
  {
    title: 'Resources',
    items: [
      { label: 'Blog', href: '/blog', description: 'Latest insights and articles' },
      { label: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      { label: 'Testimonials', href: '/testimonials', description: 'What our clients say' },
      { label: 'Support', href: '/support', description: 'Technical support and help' },
    ]
  }
];

// Services data
export const SERVICES_DATA = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications and websites built with modern technologies and best practices.',
    iconName: 'Code',
    features: [
      'Responsive design',
      'SEO optimization',
      'Performance optimization',
      'Security best practices',
      'Content management systems',
      'E-commerce solutions'
    ],
    price: 'Starting from $5,000'
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    iconName: 'Smartphone',
    features: [
      'iOS development',
      'Android development',
      'Cross-platform solutions',
      'App store optimization',
      'Push notifications',
      'Offline functionality'
    ],
    price: 'Starting from $8,000'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging user experiences.',
    iconName: 'Palette',
    features: [
      'User research',
      'Wireframing & prototyping',
      'Visual design',
      'User testing',
      'Design systems',
      'Accessibility compliance'
    ],
    price: 'Starting from $3,000'
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    iconName: 'TrendingUp',
    features: [
      'Search engine optimization',
      'Social media marketing',
      'Content marketing',
      'Email campaigns',
      'Analytics & reporting',
      'Conversion optimization'
    ],
    price: 'Starting from $2,000'
  },
  {
    id: 5,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps solutions for modern applications.',
    iconName: 'Cloud',
    features: [
      'AWS/Azure/GCP setup',
      'CI/CD pipelines',
      'Container orchestration',
      'Monitoring & logging',
      'Security & compliance',
      'Cost optimization'
    ],
    price: 'Starting from $4,000'
  },
  {
    id: 6,
    title: 'Technology Consulting',
    description: 'Strategic technology consulting to help you make informed decisions.',
    iconName: 'Users',
    features: [
      'Technology assessment',
      'Architecture planning',
      'Team augmentation',
      'Project management',
      'Code reviews',
      'Performance audits'
    ],
    price: 'Starting from $150/hour'
  }
];

// Portfolio data
export const PORTFOLIO_DATA: CaseStudy[] = [
  {
    id: 1,
    title: 'HealthTrack AI',
    description: 'A telemedicine platform with AI-powered symptom analysis and doctor matching.',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Healthcare',
    link: '/portfolio/healthcare-system',
  },
  {
    id: 2,
    title: 'SupplyGenius',
    description: 'Supply chain optimization platform with predictive inventory management.',
    image: 'https://images.pexels.com/photos/7821488/pexels-photo-7821488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Logistics',
    link: '/portfolio/ecommerce-platform',
  },
  {
    id: 3,
    title: 'InvestSmart',
    description: 'AI-powered financial advisory platform for personalized investment strategies.',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Fintech',
    link: '/portfolio/mobile-banking',
  },
  {
    id: 4,
    title: 'LearnLoop',
    description: 'Adaptive learning platform that personalizes education using AI and machine learning.',
    image: 'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'EdTech',
    link: '/portfolio/healthcare-system',
  },
  {
    id: 5,
    title: 'EcoTracker',
    description: 'Environmental monitoring system for sustainable business practices.',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Sustainability',
    link: '/portfolio/mobile-banking',
  },
  {
    id: 6,
    title: 'SmartCity Hub',
    description: 'IoT-based smart city management platform for urban infrastructure.',
    image: 'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'IoT',
    link: '/portfolio/healthcare-system',
  },
];

export const PORTFOLIO_CATEGORIES = ['All', 'Healthcare', 'Logistics', 'Fintech', 'EdTech', 'Sustainability', 'IoT'];

// Blog data
export const BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Development: AI-Powered Tools',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we build websites and applications.',
    content: 'Full content here...',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
    tags: ['Web Development', 'AI', 'Technology'],
    slug: 'future-web-development-ai-tools'
  },
  {
    id: 2,
    title: 'Building Scalable Mobile Apps with React Native',
    excerpt: 'Learn the best practices for creating high-performance mobile applications that scale.',
    content: 'Full content here...',
    author: 'Mike Chen',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    tags: ['Mobile Development', 'React Native', 'Performance'],
    slug: 'building-scalable-mobile-apps-react-native'
  },
  {
    id: 3,
    title: 'UX Design Principles for Modern Applications',
    excerpt: 'Essential design principles that will help you create user-friendly and engaging applications.',
    content: 'Full content here...',
    author: 'Emily Davis',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tags: ['UX Design', 'Design Principles', 'User Experience'],
    slug: 'ux-design-principles-modern-applications'
  },
  {
    id: 4,
    title: 'Cloud Computing Trends for 2024',
    excerpt: 'Explore the latest trends in cloud computing and how they impact business technology.',
    content: 'Full content here...',
    author: 'David Wilson',
    date: '2023-12-28',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    tags: ['Cloud Computing', 'Technology Trends', 'Business'],
    slug: 'cloud-computing-trends-2024'
  },
  {
    id: 5,
    title: 'Optimizing Website Performance for Better SEO',
    excerpt: 'Learn how to improve your website\'s performance and boost your search engine rankings.',
    content: 'Full content here...',
    author: 'Lisa Thompson',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['SEO', 'Performance', 'Web Development'],
    slug: 'optimizing-website-performance-seo'
  },
  {
    id: 6,
    title: 'The Rise of Progressive Web Apps',
    excerpt: 'Understanding PWA technology and its benefits for modern web applications.',
    content: 'Full content here...',
    author: 'Alex Rodriguez',
    date: '2023-12-15',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    tags: ['PWA', 'Web Development', 'Mobile'],
    slug: 'rise-progressive-web-apps'
  }
];

// Testimonials data
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    role: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    quote: 'AnoraTech transformed our vision into reality. Their expertise in web development and attention to detail exceeded our expectations. The final product was delivered on time and within budget.',
    content: 'AnoraTech transformed our vision into reality. Their expertise in web development and attention to detail exceeded our expectations. The final product was delivered on time and within budget.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, HealthTech Solutions',
    role: 'Founder, HealthTech Solutions',
    company: 'HealthTech Solutions',
    quote: 'Working with AnoraTech was a game-changer for our healthcare platform. Their understanding of our industry and technical expertise helped us create a solution that truly serves our patients.',
    content: 'Working with AnoraTech was a game-changer for our healthcare platform. Their understanding of our industry and technical expertise helped us create a solution that truly serves our patients.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, EcoGreen',
    role: 'Marketing Director, EcoGreen',
    company: 'EcoGreen',
    quote: 'The team at AnoraTech delivered an exceptional e-commerce platform that perfectly aligns with our brand values. The user experience is intuitive and the performance is outstanding.',
    content: 'The team at AnoraTech delivered an exceptional e-commerce platform that perfectly aligns with our brand values. The user experience is intuitive and the performance is outstanding.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: 4,
    name: 'David Kim',
    position: 'CTO, FinFlow',
    role: 'CTO, FinFlow',
    company: 'FinFlow',
    quote: 'AnoraTech\'s mobile development expertise helped us create a secure and user-friendly banking app. Their attention to security and compliance requirements was impressive.',
    content: 'AnoraTech\'s mobile development expertise helped us create a secure and user-friendly banking app. Their attention to security and compliance requirements was impressive.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    position: 'Product Manager, LearnHub',
    role: 'Product Manager, LearnHub',
    company: 'LearnHub',
    quote: 'The educational platform AnoraTech built for us has revolutionized how we deliver content to our students. The performance and scalability are exactly what we needed.',
    content: 'The educational platform AnoraTech built for us has revolutionized how we deliver content to our students. The performance and scalability are exactly what we needed.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: 6,
    name: 'Alex Wilson',
    position: 'CEO, SmartCity Labs',
    role: 'CEO, SmartCity Labs',
    company: 'SmartCity Labs',
    quote: 'AnoraTech\'s IoT expertise helped us create a comprehensive smart city solution. Their innovative approach and technical knowledge were invaluable to our project\'s success.',
    content: 'AnoraTech\'s IoT expertise helped us create a comprehensive smart city solution. Their innovative approach and technical knowledge were invaluable to our project\'s success.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5
  }
];

// FAQ data
export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'What services does AnoraTech offer?',
    answer: 'We offer comprehensive technology solutions including web development, mobile app development, UI/UX design, digital marketing, cloud solutions, and technology consulting. Our team specializes in creating custom solutions tailored to your business needs.'
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process.'
  },
  {
    id: 3,
    question: 'What is your development process?',
    answer: 'Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support. We maintain regular communication and provide progress updates throughout each phase.'
  },
  {
    id: 4,
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer various support and maintenance packages to ensure your project continues to perform optimally after launch. This includes updates, security patches, technical support, and performance monitoring.'
  },
  {
    id: 5,
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Node.js, Python, AWS, and more. We choose the best technology stack for each project based on requirements, scalability needs, and business goals.'
  },
  {
    id: 6,
    question: 'How do you handle project communication?',
    answer: 'We maintain regular communication through scheduled calls, progress reports, and project management tools. You\'ll have a dedicated project manager as your main point of contact, and we\'re always available for urgent questions.'
  },
  {
    id: 7,
    question: 'What is your pricing structure?',
    answer: 'Our pricing is project-based and depends on the scope, complexity, and requirements. We provide detailed quotes after understanding your needs. We also offer flexible payment plans and milestone-based payments.'
  },
  {
    id: 8,
    question: 'Do you work with startups and small businesses?',
    answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We understand the unique challenges and opportunities that come with different business stages and tailor our approach accordingly.'
  },
  {
    id: 9,
    question: 'Can you help with existing projects or only new development?',
    answer: 'We can help with both new development and existing projects. We offer services like code reviews, performance optimization, feature additions, bug fixes, and complete redesigns for existing applications.'
  },
  {
    id: 10,
    question: 'What makes AnoraTech different from other agencies?',
    answer: 'We combine technical expertise with business understanding, focus on long-term partnerships, provide transparent communication, and deliver solutions that drive real business value. Our team stays current with the latest technologies and best practices.'
  }
];

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/anora-tech',
  twitter: 'https://twitter.com/anora-tech',
  linkedin: 'https://linkedin.com/company/anora-tech',
  instagram: 'https://instagram.com/anora-tech',
  github: 'https://github.com/anora-tech',
} as const;

// Contact information
export const CONTACT_INFO = {
  email: 'hello@anoratech.com',
  phone: '+234 (0) 812 345 6789',
  address: 'Plot 1234, Central Business District, Abuja, FCT, Nigeria',
  locations: {
    abuja: {
      address: 'Plot 1234, Central Business District, Abuja, FCT, Nigeria',
      phone: '+234 (0) 812 345 6789'
    },
    adoEkiti: {
      address: '15 Iworoko Road, Ado Ekiti, Ekiti State, Nigeria',
      phone: '+234 (0) 813 456 7890'
    }
  }
} as const;

// Company information
export const COMPANY_INFO = {
  name: 'AnoraTech',
  tagline: 'Innovating Tomorrow, Today',
  description: 'We are a leading technology company specializing in web development, mobile applications, and digital solutions.',
  founded: 2020,
} as const;

// Chat configuration
export const CHAT_CONFIG = {
  jivoWidgetId: import.meta.env.VITE_JIVO_WIDGET_ID || 'f8Fb1u752i',
  enabled: import.meta.env.VITE_JIVO_ENABLED !== 'false', // Enabled by default
} as const;

 