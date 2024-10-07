<template>
  <nav class="sticky bottom-0 z-5 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem v-for="item in navItems" :key="item.name" :href="item.link">
        <component :is="item.icon" class="w-6 h-6" /> {{ item.name }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import NavItem from './NavItem.vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

// Массив элементов навигации
const navItems = [
  {
    name: 'timeline',
    icon: ClockIcon,
    link: '#timeline'
  },
  {
    name: 'activities',
    icon: ListBulletIcon,
    link: '#activities'
  },
  {
    name: 'progress',
    icon: ChartBarIcon,
    link: '#progress'
  }
]
</script>
