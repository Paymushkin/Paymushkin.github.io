<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="handleClick" >
    <img src="../assets/img/logo.png" class="h-9" alt="Logo" />
  </a>
</template>

<script setup>
  import { PAGE_TIMELINE} from '../constants';
  import { currentPage, navigate } from '../router';
  import { scrollToCurrentHour } from '../timeline-items';

  function handleClick() {
    currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
  }

</script>