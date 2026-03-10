import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { AntdvNextResolver } from '@antdv-next/auto-import-resolver'
import Components from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite';
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    tailwindcss(),
    Components({
      resolvers: [AntdvNextResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'./src'),
    }
  },

})
