<template>
    <div :class="classes">
        {{ seconds }}
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { formatSeconds} from '../functions';
    import { getTotalActivitySeconds } from '../timeline-items';
    import { isActivityValid } from '../validators';

    const props = defineProps({
        activity: {
            required: true,
            type: Object,
            validator: isActivityValid
        }
    })

    const classes = computed(() => `flex items-center rounded bg-purple-100 px-2 font-mono text-xl text-purple-600 ${colorClasses.value}`)

    const colorClasses = computed(() => secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600')

    const sign = computed(() => secondsDiff.value >=0 ? '+' : '-')

    const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`);

    const secondsDiff = computed(() => 
            getTotalActivitySeconds(props.activity) - props.activity.secondsToComplete
        )

</script>
