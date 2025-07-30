import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import Pages from 'vite-plugin-pages';
import VitePluginSitemap from 'vite-plugin-sitemap';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'AnoraTech - AI-Powered MVPs',
          description: 'Leading technology company specializing in web development, mobile applications, and digital solutions.',
        },
      },
    }),
    Pages({
      dirs: 'src/pages',
      extensions: ['tsx', 'ts', 'jsx', 'js'],
      exclude: ['**/components/**'],
    }),
    VitePluginSitemap({
      hostname: 'https://anoratech.com',
      dynamicRoutes: [
        '/',
        '/services',
        '/portfolio',
        '/blog',
        '/testimonials',
        '/about',
        '/contact',
        '/faq',
      ],
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
