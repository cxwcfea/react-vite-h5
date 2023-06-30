import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import pxtorem from 'postcss-pxtorem';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
      utils: path.resolve(__dirname, 'src/utils'), // src 路径
    },
  },
  css: {
    modules: {
      localsConvention: 'dashesOnly',
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5,
          propList: ['*'],
          selectorBlackList: ['.norem'],
        }),
      ],
    },
  },
  server: {
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://api.chennick.wang/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 将 /api 重写为空
      },
    },
  },
});
