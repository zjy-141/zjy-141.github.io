<template>
  <section id="projects" class="py-24 px-6 max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold text-white mb-12 flex items-center gap-4">
      <span class="text-sm font-normal" :style="{ color: config.accentColor }">03.</span>
      项目经历
      <span class="h-px bg-gray-800 flex-1 ml-4"></span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="project in config.projects" :key="project.name"
           class="group block p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:-translate-y-1 hover:border-gray-600 transition duration-300">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-white transition group-hover:opacity-80">
            {{ project.name }}
          </h3>
        </div>

        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
          <span v-for="skill in project.skills" :key="skill" class="px-2 py-1 bg-gray-800/50 rounded">
            {{ skill }}
          </span>
        </div>

        <div class="flex flex-wrap gap-4 text-sm">
          <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank"
             class="inline-flex items-center gap-1 text-gray-400 hover:text-white transition">
            {{ link.label }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfig as config } from '../data/config'
</script>