import { ref } from 'vue'
import { HOURS_IN_DAY, SECONDS_IN_MINUTE, SECONDS_IN_HOUR, MIDNIGHT_HOUR } from './constants'
import { now } from './time'

export const timelineItemRefs = ref()

export const timelineItems = ref(generateTimelineItems())

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItemActivities(timelineItems, activity) {
  filterTimelineItemsByActivity(timelineItems, activity).forEach((timelineItem) => 
    updateTimelineItem(timelineItem, {
      activityId: null,
      activitySeconds: timelineItem.hour === now.getHours() ? timelineItem.activitySeconds : 0
    }))
}

export function calculateTrackedActivitySeconds(timelineItems, activity) {
  return (
    filterTimelineItemsByActivity(timelineItems, activity)
    .reduce((totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds), 0)
  )
}

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(now.value.getHours(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {

  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

function filterTimelineItemsByActivity(timelineItems, activity) {
  return timelineItems.filter((timelineItem) => timelineItem.activityId === activity.id)
}

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null, //[0,1,2,3,4].includes(hour) ? getRandomActivity(activities.value, hour) : null,
    activitySeconds: 0, //[0,1,2,3,4].includes(hour) ? getRandomSeconds(hour) : 0
  }))
}

function getRandomActivity(activities, value) {
  return value % 4 === 0 ? null : activities[value % 2].id
}

function getRandomSeconds(value) {
  return value % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * value) % SECONDS_IN_HOUR
}