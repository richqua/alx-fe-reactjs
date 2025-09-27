import tailwindcss from '@tailwindcss/vite'; // ✅ Add this
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
        react(),
        tailwindcss(), // ✅ Add this
  ],
})