import { UserConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import windi from 'vite-plugin-windicss';

const config: UserConfig = {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
      },
    },
  },
  plugins: [Vue(), windi()],
};

export default config;
