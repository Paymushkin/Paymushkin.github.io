import { ref, computed } from 'vue'

import {
  id
} from './functions'

import { SECONDS_IN_HOUR } from './constants'

export const activities = ref(generateActivities())

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

function generateActivities() {
  return ['Coding', 'Reading', 'Training', 'Sleeping'].map((name, hours) => ({
      id: id(),
      name,
      secondsToComplete: hours * SECONDS_IN_HOUR 
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map( (activity) => ({ label: activity.name, value: activity.id }) )
}