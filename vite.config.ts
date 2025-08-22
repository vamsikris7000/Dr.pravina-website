import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api/voice-integration': {
        target: process.env.VITE_VOICE_API_BASE_URL || 'https://d3sgivh2kmd3c8.cloudfront.net',
        changeOrigin: true,
        rewrite: (path) => {
          // Remove the /api/voice-integration prefix and add the path
          const cleanPath = path.replace(/^\/api\/voice-integration/, '');
          return cleanPath || '/';
        },
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Add the API key header only if it exists
            if (process.env.VITE_VOICE_API_KEY) {
              proxyReq.setHeader('x-api-key', process.env.VITE_VOICE_API_KEY);
            }
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
      '/.netlify/functions': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('Netlify functions proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Sending Request to Netlify Functions:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Received Response from Netlify Functions:', proxyRes.statusCode, req.url);
          });
        },
      }
    }
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
