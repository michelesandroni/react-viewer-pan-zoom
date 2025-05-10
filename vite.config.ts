import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['lib'] }),
    libInjectCss(),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: './lib/index.ts',
      name: 'ReactViewerPanZoom',
      formats: ['es'], // 'es', 'umd'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        entryFileNames: '[name].js', // [name].[format].js'
        // assetFileNames: '[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    }
  }
})
