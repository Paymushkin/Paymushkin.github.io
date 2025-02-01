import { ref, computed } from 'vue'

import {
  id
} from './functions'

import { SECONDS_IN_HOUR, HUNDRED_PERCENT } from './constants'

export const activities = ref(generateActivities())

export const trackedActivities = computed(() => 
  activities.value.filter(( {secondsToComplete} ) => secondsToComplete )
)

console.log(trackedActivities.value)

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function updateActivity(activity, fields) {
    return Object.assign(activity, fields)
}

export function createActivity(activity) {
  activities.value.push(activity)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function calculateActivityCompletionPercentage({ secondsToComplete }, trackedSeconds) {

  return Math.floor((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete)
}

export function calculateCompletionPercentage(totalTrackedSeconds) {
  return Math.floor((totalTrackedSeconds * HUNDRED_PERCENT) / totalActivitySecondsToComplete.value)
}

const totalActivitySecondsToComplete = computed(() => {
  return trackedActivities.value
    .map(({ secondsToComplete }) => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0 )
})

function generateActivities() {
  return ['Coding', 'Reading', 'Training', 'Sleeping'].map((name, hours) => ({
      id: id(),
      name,
      // secondsToComplete: hours * SECONDS_IN_HOUR 
      secondsToComplete: 15 * 60
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map( (activity) => ({ label: activity.name, value: activity.id }) )
}