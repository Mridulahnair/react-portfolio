import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/react-portfolio/', // Comment this out if you want to test locally
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  assetsInclude: ['**/*.md'],
  // module: {
  //   rules: [
  //     // ... other rules
  //     {
  //       test: /\.md$/,
  //       use: 'raw-loader',
  //     },
  //   ],
  // },
});
