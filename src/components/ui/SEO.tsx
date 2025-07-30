import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export default function SEO({
  title = 'AnoraTech - AI-Powered MVPs',
  description = 'Leading technology company specializing in web development, mobile applications, and digital solutions.',
  keywords = ['web development', 'mobile apps', 'AI', 'technology', 'digital solutions'],
  image = '/og-image.jpg',
  url = 'https://anoratech.com',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps) {
  const siteTitle = 'AnoraTech';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const fullUrl = url.startsWith('http') ? url : `https://anoratech.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://anoratech.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author || 'AnoraTech'} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@anoratech" />
      <meta name="twitter:creator" content="@anoratech" />

      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://images.pexels.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'AnoraTech',
          url: 'https://anoratech.com',
          logo: 'https://anoratech.com/logo.png',
          description: 'Leading technology company specializing in web development, mobile applications, and digital solutions.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Tech Street',
            addressLocality: 'Innovation City',
            addressRegion: 'IC',
            postalCode: '12345',
            addressCountry: 'US',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-123-4567',
            contactType: 'customer service',
            email: 'hello@anoratech.com',
          },
          sameAs: [
            'https://facebook.com/anora-tech',
            'https://twitter.com/anora-tech',
            'https://linkedin.com/company/anora-tech',
            'https://instagram.com/anora-tech',
            'https://github.com/anora-tech',
          ],
        })}
      </script>
    </Helmet>
  );
} 