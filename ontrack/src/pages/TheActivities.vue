<template>
    <div class="flex flex-col grow">
        <ul 
            v-if="activities.length"
            class="divide-y grow">
            <ActivityItem 
                v-for="activity in activities"
                :key="activity.id"
                :activity="activity"
                @delete="emit('deleteActivity', activity)"
                @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
            />
        </ul>

        <TheActivitiesEmptyState v-else />
        
        <TheActivityForm @submit="emit('createActivity', $event)" />
    </div>
</template>

<script setup>

import ActivityItem from '../components/ActivityItem.vue';
import TheActivityForm from '../components/TheActivityForm.vue';
import TheActivitiesEmptyState from '../components/TheActivitiesEmptyState.vue';

import { validateActivities, isActivityValid, isNumber } from '../validators.js';

import { BUTTON_TYPE_PRIMARY } from '../constants.js';

defineProps({
    activities: {
        required: true,
        type: Array,
        validator: validateActivities
    }
})

const emit = defineEmits({
    deleteActivity: isActivityValid,
    createActivity: isActivityValid,
    setActivitySecondsToComplete(activity, secondsToComplete) {
        return [
            isActivityValid(activity),
            isNumber(secondsToComplete)
        ].every(Boolean)
    }
})

function setSecondsToComplete(activity, secondsToComplete) {
    emit('setActivitySecondsToComplete', activity, secondsToComplete)
}

</script>