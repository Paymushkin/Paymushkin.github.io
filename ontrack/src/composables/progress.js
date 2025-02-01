import { computed } from 'vue'
import { timelineItems, calculateTrackedActivitySeconds } from '../timeline-items'
import { calculateActivityCompletionPercentage } from '../activities';
import { getProgressColorClass } from '../functions'

export function useProgress(activity ) {
    const colorClass = computed(() => getProgressColorClass(percentage.value))

    const percentage = computed(() => 
        calculateActivityCompletionPercentage(
            activity, 
            trackedSeconds.value
        ) 
    )   

    const trackedSeconds = computed(() => 
        calculateTrackedActivitySeconds(timelineItems.value, activity)
    )

    return {
        colorClass,
        percentage,
        trackedSeconds
    }
}