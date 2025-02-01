import { computed } from 'vue'
import { timelineItems, calculateTrackedActivitySeconds } from '../timeline-items'
import { calculateCompletionPercentage, trackedActivities } from '../activities';
import { getProgressColorClass } from '../functions'

export function useTotalProgress() {
    const colorClass = computed(() => getProgressColorClass(percentage.value))

    const totalTrackedSeconds = computed(() => {
        return trackedActivities.value.reduce((total, activity) => {
            let trackedSeconds = calculateTrackedActivitySeconds(timelineItems.value, activity)

            trackedSeconds = trackedSeconds < activity.secondsToComplete ? trackedSeconds : activity.secondsToComplete

            return total + trackedSeconds
        }, 0)
    })

    const percentage = computed(() => 
        calculateCompletionPercentage(totalTrackedSeconds.value) 
    )   


    return {
        colorClass,
        percentage
    }
}