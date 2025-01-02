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
            @scroll-to-hour="scrollToHour"
        />
        </ul>
    </div>
</template>

<script setup>

import { ref, watchPostEffect, nextTick } from 'vue'

import { 
    validateTimelineItems, 
    validateSelectOptions, 
    validateActivities, 
    isActivityValid,
    isTimelineItemValid,
    isPageValid
} from '../validators.js';

import TimelineItem from '../components/TimelineItem.vue';
import { MIDNIGTH_HOUR, PAGE_TIMELINE } from '@/constants.js';

const props = defineProps({
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
    currentPage: {
        required: true,
        type: String,
        validator: isPageValid
    }
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

watchPostEffect(async () => {
    if(props.currentPage === PAGE_TIMELINE) {

        await nextTick()

        scrollToHour(new Date().getHours())
    }
})

function scrollToHour(hour) {

    if(hour === MIDNIGTH_HOUR) {
        document.body.scrollIntoView()
    } else {
        timelineItemRefs.value[hour - 1].$el.scrollIntoView()
    }
}

</script>