import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env files

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});
