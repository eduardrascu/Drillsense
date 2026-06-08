import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite host for previewing / building screens from the src/ design system.
// Does not touch the existing Next demo — additive only.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@screens': path.resolve(__dirname, 'screens'),
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: { port: 5173, open: true },
});
