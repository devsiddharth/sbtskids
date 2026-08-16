import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        /* Shared vendor chunks so swiper/framer-motion aren't duplicated
           across lazily-loaded pages. */
        manualChunks: {
          swiper: ['swiper'],
          motion: ['framer-motion'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
