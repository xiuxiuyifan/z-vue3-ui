import md from "./plugins/md";
import SourceCode from "./plugins/source-code";
import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  mode: 'development',
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  //可以直接引入markdown文件
  plugins: [vue(), vueJsx(), SourceCode(), md()]
})
