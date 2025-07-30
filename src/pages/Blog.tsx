import React from 'react';
import SEO from '../components/ui/SEO';
import BlogHero from '../components/sections/BlogHero';
import BlogGrid from '../components/sections/BlogGrid';

const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog"
        description="Latest insights, tips, and industry trends in technology and digital innovation. Stay updated with the latest developments in web development, AI, and emerging technologies."
        keywords={['blog', 'technology', 'insights', 'web development', 'AI', 'digital innovation', 'tech trends']}
        url="/blog"
        type="website"
      />
      <main className="pt-20">
        <BlogHero />
        <BlogGrid />
      </main>
    </>
  );
};

export default Blog; 