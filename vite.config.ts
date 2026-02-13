import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    server: {
    host: '0.0.0.0', // 👈 allows access from other devices
    port: 5173,      // optional, default is 5173
  }
});
