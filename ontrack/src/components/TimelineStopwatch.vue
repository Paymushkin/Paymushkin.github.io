<template>
    <div class="flex w-full gap-2">
        <BaseButton
            :disabled="timelineItem.activitySeconds" 
            :type="BUTTON_TYPE_DANGER"
            @click="reset"
        >
            <BaseIcon :name="ICON_ARROW_PATH" />
        </BaseButton>
        <div 
            class="flex items-center grow rounded bg-gray-100 px-2 font-mono text-3xl">
            {{ formatSeconds(timelineItem.activitySeconds) }}
        </div>
        <BaseButton
            v-if="isRunning"
            :type="BUTTON_TYPE_WARNING"
            @click="stop"
        >
           <BaseIcon :name="ICON_PAUSE" />
        </BaseButton>
        <BaseButton
            v-else
            :disabled="timelineItem.hour !== now.getHours()"
            :type="BUTTON_TYPE_SUCCESS"
            @click="start"
        >
            <BaseIcon :name="ICON_PLAY" />
        </BaseButton>
    </div>
</template>

<script setup> 
import { watchEffect } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseIcon from './BaseIcon.vue';
import { ICON_ARROW_PATH, ICON_PLAY, ICON_PAUSE } from '../icons';

import { 
    BUTTON_TYPE_WARNING, 
    BUTTON_TYPE_DANGER, 
    BUTTON_TYPE_SUCCESS
} from '../constants';

import { formatSeconds } from '../functions'
import { isTimelineItemValid } from '../validators';
import { useStopWatch } from '../composables/stopWatch';
import { updateTimelineItem } from '../timeline-items';
import { now } from '../time';

const props = defineProps({
    timelineItem: {
        required: true,
        type: Object,
        validator: isTimelineItemValid
    },

})

const { seconds, isRunning, start, stop, reset } = useStopWatch( 
    props.timelineItem.activitySeconds
)

watchEffect(() => {
    if ( props.timelineItem.hour !== now.value.getHours() && isRunning.value) {
        stop()
    }
})

watchEffect(() => 
    updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value})
)
      
</script>