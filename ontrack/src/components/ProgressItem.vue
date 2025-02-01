<template>
    <li class="flex flex-col gap-1 p-4 truncate text-xl">
        <div>{{ activity.name }}</div>
        <div class="relative flex h-5 overflow-hidden rounded bg-neutral-200">
            <div :class="colorClass" :style="`width: ${percentage}%;`"></div>
        </div>
        <div class="flex justify-between font-mono text-sm"> 
            <span>{{ percentage }}%</span>
            <span>
                {{ formatSeconds(trackedSeconds) }} / {{ formatSeconds(activity.secondsToComplete) }}
            </span>
        </div>
    </li>
</template>

<script setup>
import { isActivityValid } from '../validators';
import { useProgress } from '../composables/progress';
import { formatSeconds } from '../functions'

const props = defineProps({
    activity: {
        required: true,
        type: Object,
        validator: isActivityValid
    }
})

const { colorClass, percentage, trackedSeconds} = useProgress(props.activity)

</script>