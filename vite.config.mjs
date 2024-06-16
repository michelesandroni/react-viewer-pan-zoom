import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: './src/index.js',
      name: 'ReactViewerPanZoom',
      formats: ['es'], // 'es', 'umd'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: '[name].js', // [name].[format].js'
        // assetFileNames: '[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  }
})
