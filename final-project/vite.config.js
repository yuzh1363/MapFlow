import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // 這行會自動把你的 SCSS 注入到每個 Vue 元件中
        // additionalData: `@use "./src/assets/scss/style.scss" as *;`
      }
    }
  }
})
