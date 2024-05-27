import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteFooter',
      filename: 'remoteFooter.js',
      exposes: {
        './RemoteFooter': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  preview: {
    host: 'localhost',
    port: 5174,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
