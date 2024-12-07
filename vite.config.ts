import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/BotanInvestments-test-task/',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/404.html',
          dest: '.',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env': process.env,
  },
  build: {
    outDir: 'dist',
  },
})
