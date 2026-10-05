<template>
  <section class="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
    <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
      {{ config.name }}
    </h1>
    <p class="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl">
      {{ config.title }}
    </p>
    <p class="text-xl md:text-2xl mb-12 font-semibold" :style="{ color: config.accentColor }">
      {{ config.description }}
    </p>

    <div class="flex flex-wrap justify-center gap-4">
      <!-- 修改这里：点击复制邮箱 -->
      <button @click="copyEmail"
              class="px-6 py-3 rounded-full border border-gray-700 hover:border-gray-400 transition text-sm text-gray-300">
        {{ copied ? '已复制 ✓' : 'Email' }}
      </button>
      <a :href="config.social.github" target="_blank"
         class="px-6 py-3 rounded-full border border-gray-700 hover:border-gray-400 transition text-sm text-gray-300">
        GitHub
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig as config } from '../data/config'

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(config.social.email)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch (e) {
    // 降级方案：老浏览器
    const input = document.createElement('input')
    input.value = config.social.email
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}
</script>