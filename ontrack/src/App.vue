<script setup>
import { computed, ref } from 'vue';
import { 
  PAGE_TIMELINE, 
  PAGE_ACTIVITIES, 
  PAGE_PROGRESS 
} from './constants';

import { 
  normalizePageHash, 
  generateTimelineItems, 
  generateActivities,
  generateActivitySelectOptions
} from './functions';
import TheHeader from './components/TheHeader.vue'
import TheNavigation from './components/TheNavigation.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))

const currentPage = ref(normalizePageHash())

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value));

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {

  timelineItems.value.forEach((timelineItem) => {
    if(timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })

  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity) {
  activities.value.push(activity)
}

function setTimelineActivity(timelineItem, activity) {
  // timelineItem.activityId = activity?.id || null
    timelineItem.activityId = activity.id
}

function setActivitySecondsToComplite(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}

</script>

<style scoped></style>


<template>
  <TheHeader @navigate="currentPage = $event"/>

  <main class="flex flex-grow flex-col">
    
    <TheTimeline 
      v-show="currentPage === PAGE_TIMELINE" 
      :timeline-items="timelineItems" 
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      :current-page="currentPage"
      @set-timeline-item-activity="setTimelineActivity"
    />
    <TheActivities 
      v-show="currentPage === PAGE_ACTIVITIES" 
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplite"
    />
    <TheProgress 
      v-show="currentPage === PAGE_PROGRESS" 
    />

  </main>

  <TheNavigation 
    :current-page="currentPage" 
    @navigate="currentPage = $event" 
  />
  
</template>