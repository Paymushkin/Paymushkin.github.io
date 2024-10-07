<template>
  <TheHeader />

  <main class="flex flex-grow flrx-col">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et veniam cumque iste? Eaque commodi
    consectetur enim, quasi eum provident veritatis cumque deleniti sapiente corporis nobis nostrum
    perferendis at, natus ex.
  </main>

  <TheNavigation />
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNavigation from './components/TheNavigation.vue'

// Функция для определения активной ссылки
// const isActive = (link) => {
//   return window.location.hash === link
// }
</script>

<style scoped></style>
