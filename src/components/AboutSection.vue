<template>
  <section id="about" class="py-24 px-6 max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-4">
      <span class="text-sm font-normal" :style="{ color: config.accentColor }">01.</span>
      关于我
      <span class="h-px bg-gray-800 flex-1 ml-4"></span>
    </h2>
    <p class="text-gray-400 leading-relaxed text-lg">
      {{ config.aboutMe }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { siteConfig as config } from '../data/config'
</script>