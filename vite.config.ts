import { fileURLToPath, URL } from 'node:url'
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import {createHtmlPlugin} from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// @ts-ignore
const getViteEnv = (mode, target) => {
  console.log(mode)
  console.log(target)
  return loadEnv(mode, process.cwd())[target];
}

// https://vitejs.dev/config/
// @ts-ignore
export default  ({ mode }) => defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    createHtmlPlugin({
      inject: {
        data: {
          title: getViteEnv(mode, "VITE_NAME"),
        },
      },
    }),
      // element-plus自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // element-plus组件
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
