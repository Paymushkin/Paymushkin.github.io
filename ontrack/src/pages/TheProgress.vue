<template>
    <ul v-if="trackedActivities.length" class="divide-y">
        <ProgressItem v-for="activity of trackedActivities" :key="activity.id" :activity="activity" />
    </ul>
    <TheProgressEmptyState v-else />
</template>

<script setup>
    import ProgressItem from '../components/ProgressItem.vue';
    import TheProgressEmptyState from '../components/TheProgressEmptyState.vue';
    import { trackedActivities } from '../activities.js';
</script>