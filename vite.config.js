import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // 添加这行

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 添加这行
  ],
})