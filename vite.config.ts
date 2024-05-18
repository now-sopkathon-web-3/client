import { defineConfig } from 'vite';
import { default as svgr, default as svgrPlugin } from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), svgr({ include: '**/*.svg' }), svgrPlugin()],
});
