<template>
  <footer class="py-12 text-center text-sm text-gray-600 border-t border-gray-900">
    <p class="mb-4">感谢访问！欢迎交流技术、项目与合作。</p>
    <div class="flex justify-center gap-6 mb-4">
      <a :href="`mailto:${config.social.email}`" class="hover:text-white transition">Email</a>
      <a :href="config.social.github" target="_blank" class="hover:text-white transition">GitHub</a>
    </div>
    <p>Built with Vue3 &amp; Tailwind CSS</p>
  </footer>
</template>

<script setup lang="ts">
import { siteConfig as config } from '../data/config'
</script>