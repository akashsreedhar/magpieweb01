import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Ensure static files like sitemap.xml are copied to build output
  publicDir: 'public',
  build: {
    copyPublicDir: true,
    // Optimize bundle size for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
    // Simplified minification
    minify: 'esbuild',
    target: 'esnext',
  },
  // Improve development server performance
  server: {
    hmr: {
      overlay: false,
    },
  },
});
