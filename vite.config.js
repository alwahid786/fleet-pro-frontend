// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Or any other plugin you are using

export default defineConfig({
  plugins: [vue()], // Add any plugins you need
  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
  }
});
