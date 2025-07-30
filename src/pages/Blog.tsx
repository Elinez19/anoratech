import React from 'react';
import BlogHero from '../components/sections/BlogHero';
import BlogGrid from '../components/sections/BlogGrid';

const Blog: React.FC = () => {
  return (
    <main className="pt-20">
      <BlogHero />
      <BlogGrid />
    </main>
  );
};

export default Blog; 