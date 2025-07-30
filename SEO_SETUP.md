# SEO Setup Documentation

This document outlines the SEO configuration and features implemented in the AnoraTech website.

## Installed Packages

The following SEO-related packages have been installed:

- `react-helmet-async`: For managing document head tags and meta information
- `vite-plugin-html`: For HTML template optimization
- `vite-plugin-pages`: For file-based routing (future use)
- `vite-plugin-sitemap`: For automatic sitemap generation
- `vite-ssg`: For static site generation

## SEO Components

### SEO Component (`src/components/ui/SEO.tsx`)

A reusable SEO component that manages:
- Basic meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card tags
- Article-specific meta tags
- Canonical URLs
- Favicon and icon links
- Preconnect links for performance
- Structured data (JSON-LD)

### Usage Example

```tsx
import SEO from '../components/ui/SEO';

const MyPage = () => {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description for search engines"
        keywords={['keyword1', 'keyword2']}
        url="/page-url"
        type="website"
      />
      {/* Page content */}
    </>
  );
};
```

## Configuration Files

### Vite Configuration (`vite.config.ts`)

Updated to include:
- HTML plugin for template optimization
- Pages plugin for file-based routing
- Sitemap plugin for automatic sitemap generation
- Build optimization with manual chunks

### Sitemap Configuration (`sitemap.config.ts`)

Defines:
- Hostname and base URL
- Dynamic routes for all pages
- Excluded paths (admin, private)
- Readable sitemap output

### Robots.txt (`public/robots.txt`)

Configured to:
- Allow crawling of all public pages
- Disallow admin and private areas
- Reference sitemap location
- Set crawl delay

## Meta Tags

### Homepage (`index.html`)

Includes comprehensive meta tags:
- Primary meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL
- Favicon and icon links
- Structured data (Organization schema)

## App Configuration

### HelmetProvider

The main App component is wrapped with `HelmetProvider` to enable SEO functionality throughout the application.

## Build Scripts

Added new build scripts:
- `npm run build:ssg`: Build with static site generation
- `npm run generate`: Alias for SSG build

## SEO Features Implemented

### 1. Dynamic Meta Tags
Each page can have custom meta tags that are managed by the SEO component.

### 2. Social Media Optimization
Open Graph and Twitter Card tags for better social media sharing.

### 3. Structured Data
JSON-LD structured data for better search engine understanding.

### 4. Performance Optimization
- Preconnect links for external resources
- Manual chunk splitting for better caching
- Optimized build configuration

### 5. Sitemap Generation
Automatic sitemap generation with proper URL structure.

### 6. Robots.txt
Proper crawling instructions for search engines.

## Usage Guidelines

### Adding SEO to New Pages

1. Import the SEO component:
```tsx
import SEO from '../components/ui/SEO';
```

2. Add SEO component to your page:
```tsx
<SEO
  title="Your Page Title"
  description="Your page description"
  keywords={['relevant', 'keywords']}
  url="/your-page-url"
  type="website"
/>
```

### Article Pages

For blog posts or articles, use the article type:
```tsx
<SEO
  title="Article Title"
  description="Article description"
  type="article"
  author="Author Name"
  publishedTime="2024-01-15T00:00:00Z"
  tags={['tag1', 'tag2']}
/>
```

### Image Optimization

For pages with featured images:
```tsx
<SEO
  title="Page Title"
  description="Description"
  image="/path/to/image.jpg"
/>
```

## Best Practices

1. **Unique Titles**: Each page should have a unique, descriptive title
2. **Descriptive Descriptions**: Write compelling descriptions under 160 characters
3. **Relevant Keywords**: Use relevant keywords naturally in content
4. **Canonical URLs**: Always specify canonical URLs to prevent duplicate content
5. **Structured Data**: Use appropriate schema markup for your content type
6. **Performance**: Optimize images and use preconnect links for external resources

## Testing

### Meta Tags
Use browser developer tools to inspect meta tags:
1. Right-click and "View Page Source"
2. Check `<head>` section for meta tags
3. Use social media debugging tools (Facebook Sharing Debugger, Twitter Card Validator)

### Sitemap
- Check `/sitemap.xml` after build
- Validate with online sitemap validators

### Robots.txt
- Check `/robots.txt` is accessible
- Verify sitemap reference is correct

## Future Enhancements

1. **Dynamic Sitemap**: Generate sitemap entries for blog posts and portfolio items
2. **Image Sitemap**: Add image sitemap for better image SEO
3. **News Sitemap**: If adding news/blog functionality
4. **Video Sitemap**: For video content
5. **Analytics Integration**: Connect with Google Analytics and Search Console
6. **Performance Monitoring**: Implement Core Web Vitals monitoring 