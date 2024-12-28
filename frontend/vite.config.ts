import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineManifest, crx } from '@crxjs/vite-plugin';
import manifestJson from './manifest.json';

const manifest = defineManifest(manifestJson);

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        content: 'src/content.tsx'
      },
    },
  },
}); 