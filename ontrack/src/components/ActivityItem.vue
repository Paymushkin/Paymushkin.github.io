<template>
    <li
        class="flex flex-col gap-2 p-4"
    >
        <div
            class="flex items-center gap-2"
        >
            <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
                <TrashIcon class="h-8" />
            </BaseButton>
            <span class="truncate text-xl">{{ activity.name }}</span>
        </div>
        <div>
            <BaseSelect
                class="font-mono"
                placeholder="hh:mm" 
                :selected="activity.secondsToComplete || null"
                @select="emit('setSecondsToComplete', $event || 0)"
                :options="PERIOD_SELECT_OPTIONS">
            </BaseSelect>
        </div>
    </li> 
</template>

<script setup>
// import { ref } from 'vue';

import { isActivityValid, isUndefined, isNumber } from '../validators.js'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constants.js'

import { TrashIcon } from '@heroicons/vue/24/outline';

import BaseButton from './BaseButton.vue';
import BaseSelect from './BaseSelect.vue';

defineProps({
    activity: {
        required: true,
        type: Object,
        validator: isActivityValid
    }
})

const emit = defineEmits({
    delete: isUndefined,
    setSecondsToComplete: isNumber
})

</script>