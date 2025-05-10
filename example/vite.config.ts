import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')

export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // Ensure the example uses the library from ../lib
      'react-viewer-pan-zoom': resolve(rootDir, 'lib'),
      // Ensure the example uses the React and other dependencies installed in the root
      'react': resolve(rootDir, 'node_modules/react'),
      'react-dom': resolve(rootDir, 'node_modules/react-dom'),
      'react-inlinesvg': resolve(rootDir, 'node_modules/react-inlinesvg')
    },
  },
  root: __dirname,
  build: {
    emptyOutDir: true,
    outDir: '../docs',
  },
})
