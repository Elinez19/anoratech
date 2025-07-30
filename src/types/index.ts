export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
  link: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}