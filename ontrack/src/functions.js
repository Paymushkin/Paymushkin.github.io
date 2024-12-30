import { 
    PAGE_TIMELINE,
    HOURS_IN_DAY,
    SECONDS_IN_HOUR,
    SECONDS_IN_MINUTE,
    MINUTES_IN_HOUR,
    MILLISECONDS_IN_SECOND 
} from './constants';

import { 
  isPageValid, 
  isNull
} from './validators';

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if(isPageValid(page)) {
    return page
  }

  return window.location.hash = PAGE_TIMELINE
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generateActivities() {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
      id: id(),
      name,
      secondsToComplete: hours * SECONDS_IN_HOUR 
  }))
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateTimelineItems(activities) {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    // activityId: null,
    activityId: getRandomActivity(activities, hour) ,
    activitySeconds: getRandomSeconds(hour)
    }))
}

export function generateActivitySelectOptions(activities) {
  return activities.map( (activity) => ({ label: activity.name, value: activity.id }) )
}

export function formatSeconds(seconds) {
    const date = new Date()

    date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

    const utc = date.toUTCString()

    return utc.substring(utc.indexOf(':') -2, utc.indexOf(':') + 6)
    // return utc.substring(17, 25)
}

function getRandomActivity(activities, value) {
  return value % 4 === 0 ? null : activities[value % 2].id
}

function getRandomSeconds(value) {
  return value % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * value) % SECONDS_IN_HOUR
}