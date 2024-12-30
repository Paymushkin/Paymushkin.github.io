<template>
    <div>
        <ul class="mt-7">
        <TimelineItem
            v-for="timelineItem in timelineItems"
            :key="timelineItem.hour"
            :timeline-item="timelineItem"
            :activities="activities"
            :activity-select-options="activitySelectOptions"
            ref="timelineItemRefs"
            @select-activity="emit('setTimelineItemActivity', timelineItem, $event)"
        />
        </ul>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

import { 
    validateTimelineItems, 
    validateSelectOptions, 
    validateActivities, 
    isActivityValid,
    isTimelineItemValid
} from '../validators.js';

import TimelineItem from '../components/TimelineItem.vue';
import { MIDNIGTH_HOUR } from '@/constants.js';

defineProps({
    timelineItems: {
        required: true,
        type: Array,
        validator: validateTimelineItems
    },
    activitySelectOptions: {
        required: true,
        type: Array,
        validator: validateSelectOptions
    },
    activities: {
        required: true,
        type: Array,
        validator: validateActivities
    },
})

const emit = defineEmits({
    setTimelineItemActivity(timelineItem, activity) {
        return [
            isTimelineItemValid(timelineItem),
            isActivityValid(activity)
        ].every(Boolean)
    }
})

const timelineItemRefs = ref([])

onMounted(scrollToCurrentTimelineItem)

function scrollToCurrentTimelineItem() {
        const currentHour = new Date().getHours()

    if(currentHour === MIDNIGTH_HOUR) {
        document.body.scrollIntoView()
    } else {
        timelineItemRefs.value[currentHour - 1].$el.scrollIntoView()
    }
}

</script>