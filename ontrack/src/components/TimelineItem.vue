<template>
    <li
        class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4"
    >
        <TimelineHour 
            :hour="timelineItem.hour"
            @click.prevent="emit('scrollToHour', timelineItem.hour)"
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
import { isTimelineItemValid } from '../validators'
import { updateTimelineItem } from '../timeline-items'
import { activitySelectOptions } from '../activities'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'

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
import { isHourValid } from '../validators';

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
    selectActivity:  isActivityValid,
    scrollToHour: isHourValid
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

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour
      :hour="timelineItem.hour"
    />
    <BaseSelect
      placeholder="Rest"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="updateTimelineItem(timelineItem, { activityId: $event} )"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>