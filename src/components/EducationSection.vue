<template>
  <section id="education" class="py-24 px-6 max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold text-white mb-12 flex items-center gap-4">
      <span class="text-sm font-normal" :style="{ color: config.accentColor }">05.</span>
      教育背景
      <span class="h-px bg-gray-800 flex-1 ml-4"></span>
    </h2>

    <div class="space-y-12">
      <div v-for="(edu, index) in config.education" :key="index" class="relative pl-8 border-l border-gray-800">
        <div class="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: config.accentColor }"></div>
        
        <div class="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
          <h3 class="text-lg font-bold text-white">{{ edu.school }}</h3>
          <span class="text-sm text-gray-500 font-mono mt-1 md:mt-0">{{ edu.dateRange }}</span>
        </div>
        <p class="text-gray-300 mb-4">{{ edu.degree }}</p>
        
        <ul class="space-y-2 text-gray-400 text-sm">
          <li v-for="(item, i) in edu.achievements" :key="i" class="flex gap-3">
            <span class="mt-1.5 text-xs" :style="{ color: config.accentColor }">▹</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig as config } from '../data/config'
</script>