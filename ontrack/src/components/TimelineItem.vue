<template>
    <li
        class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4"
    >
        <TimelineHour 
            :hour="timelineItem.hour"
        />

        <BaseSelect 
            :options="activitySelectOptions" 
            :selected="timelineItem.activityId"
            @select="selectActivity" 
            placeholder="Rest"
        />
        <TimelineStopwatch 
            :seconds="timelineItem.activitySeconds"
            :hour="timelineItem.hour"
        />
    </li>
</template>

<script setup>

import TimelineHour from './TimelineHour.vue';
import BaseSelect from './BaseSelect.vue';
import TimelineStopwatch from './TimelineStopwatch.vue';

import { NULLABLE_ACTIVITY } from '../constants';

import { 
    isTimelineItemValid, 
    validateSelectOptions, 
    isActivityValid, 
    validateActivities
} from '../validators';

const props = defineProps({
    timelineItem: {
        required: true,
        type: Object,
        validator: isTimelineItemValid
    },
    activities: {
        required: true,
        type: Array,
        validator: validateActivities
    },
    activitySelectOptions: {
        required: true,
        type: Array,
        validator: validateSelectOptions
    }
})

const emit = defineEmits({
    selectActivity:  isActivityValid
})

function selectActivity(id) {
    emit(
        'selectActivity',
        findActivityById(id)
    )
}

function findActivityById(id) {
    return props.activities.find((activity) => activity.id === id ) || NULLABLE_ACTIVITY
}

</script>