<template>
  <header class="sticky top-0 z-50 flex items-center justify-between border-b bg-white p-3">
    <TheLogo />
    <TheHeaderProgress />
  </header>
</template>

<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'

import { navigate } from '../router'

</script>
