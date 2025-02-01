<template>

    <div
        ref="indicatorRef" 
        class="flex justify-between items-center pointer-events-none absolute w-full h-[2px] bg-purple-900"
        :style="`top: ${topOffset}px`"
    >
        <BaseIcon :name="ICON_ARROW_LONG_LEFT " class="h-7 text-purple-900 rotate-180 z-10 translate-x-[-0.5rem]" />
        <BaseIcon :name="ICON_ARROW_LONG_LEFT " class="h-7 text-purple-900 z-10 translate-x-[0.5rem]" /> 
    </div>
    
</template>

<script setup>
import { ref, computed, onActivated, onDeactivated } from 'vue'
import { HUNDRED_PERCENT } from '../constants';
import { secondsSinceMidnightInPercentage, startTimer, stopTimer } from '../time'
import BaseIcon from './BaseIcon.vue';
import { ICON_ARROW_LONG_LEFT } from '../icons';

const indicatorRef = ref()

const topOffset = computed(
    () => ((secondsSinceMidnightInPercentage.value * getTimelineHeigth()) / HUNDRED_PERCENT)
) 

function getTimelineHeigth() {
    return indicatorRef.value?.parentNode.getBoundingClientRect().height
}

onActivated(startTimer)

onDeactivated(stopTimer)

</script>