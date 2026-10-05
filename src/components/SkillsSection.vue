<template>
  <section id="skills" class="py-24 px-6 max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold text-white mb-12 flex items-center gap-4">
      <span class="text-sm font-normal" :style="{ color: config.accentColor }">02.</span>
      技术栈
      <span class="h-px bg-gray-800 flex-1 ml-4"></span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div v-for="skillGroup in config.skills" :key="skillGroup.category">
        <h3 class="text-white font-semibold mb-4">{{ skillGroup.category }}</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="item in skillGroup.items" :key="item"
                class="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-sm text-gray-300 hover:border-gray-600 transition">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig as config } from '../data/config'
</script>