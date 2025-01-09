import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/books': {
        target: 'http://localhost:5000', // Backend server for books route
        changeOrigin: true,
        secure: false,
      },
      '/add-order': {
        target: 'http://localhost:5000', // Backend server for add-order route
        changeOrigin: true,
        secure: false,
      },
      '/orders': {
        target: 'http://localhost:5000', // Backend server for orders route
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
