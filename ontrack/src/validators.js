import { 
    NAV_ITEMS, 
    HOURS_IN_DAY,
    MIDNIGHT_HOUR,
    BUTTON_TYPES
 } from './constants';

 import { ICONS } from './icons'

export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page)
}

export function isIconValid(icon) {
    return Object.keys(ICONS).includes(icon)
}

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

export function isButtonTypeValid(type) {
    return BUTTON_TYPES.includes(type)
}

export function isTimelineItemValid( {hour} ) {
    return isHourValid(hour)
}

export function isHourValid(hour) {
    return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1);
}

export function validateSelectOptions(options) {
    return options.every(isSelectOptionValue)
}

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isTimelineItemValid)
}

export function isUndefinedOrNull(value) {
    return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
    return isNumber(value) || isNull(value)
}

export function isActivityValid({ id, name, secondsToComplete }) {
    
    if(isNull(id)) {
        return true
    }

    return [
        isNotEmptyString(id),
        isNotEmptyString(name),
        isNumber(secondsToComplete)
    ].every(Boolean)
}

export function validateActivities(activities) {
    return activities.every(isActivityValid)
}

export function isSelectValueValid(value) {
    return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isUndefined(value) {
    return value === undefined
}

export function isNull(value) {
    return value === null
}

export function isNumber(value) {
    return typeof value === 'number'
}

function isNotEmptyString(value) {
    return isString(value) && value.length
}

function isSelectOptionValue({ value, label}) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

function isString(value) {
    return typeof value === 'string'
}

function isBetween(value, start, end) {
    return value >= start && value <= end
}