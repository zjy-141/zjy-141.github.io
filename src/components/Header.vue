<template>
  <header class="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="font-bold text-lg tracking-tighter" :style="{ color: config.accentColor }">
        ZJY.DEV
      </a>
      <nav class="hidden md:flex gap-8 text-sm text-gray-400">
        <a href="#about" class="hover:text-white transition">01. 关于</a>
        <a href="#skills" class="hover:text-white transition">02. 技能</a>
        <a href="#projects" class="hover:text-white transition">03. 项目</a>
        <a href="#experience" class="hover:text-white transition">04. 经历</a>
        <a href="#education" class="hover:text-white transition">05. 教育</a>
      </nav>
      <!-- 移动端菜单占位（可后续扩展） -->
      <button class="md:hidden text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { siteConfig as config } from '../data/config'
</script>