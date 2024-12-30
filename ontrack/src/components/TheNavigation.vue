<template>
  <nav class="sticky bottom-0 z-5 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem 
        v-for="(icon, page) in NAV_ITEMS" 
        :key="page" 
        :href="`#${page}`" 
        :class="{ 'bg-gray-200 pointer-events-none' : page === currentPage}"
        @click="emit('navigate', page)" >
        <component :is="icon" class="w-6 h-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import { isPageValid } from '../validators';
import { NAV_ITEMS } from '../constants';
import NavItem from './NavItem.vue';

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid
})

</script>
