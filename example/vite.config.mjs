import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      'react-viewer-pan-zoom': path.resolve(__dirname, '../src'),
    },
  },
  root: __dirname,
  build: {
    emptyOutDir: true,
    outDir: '../docs',
  },
})
