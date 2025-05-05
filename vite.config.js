import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@/', replacement: resolve('src') + '/'}],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css')
            return 'main.css';
          return '[name].[ext]';
        }
      },
      inject: {
        target: 'body'
      }
    },
    assetsDir: '',
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/scss/helpers' as *;
        `,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})
