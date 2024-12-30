<template>
    <div class="flex gap-2">
        <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
            <XMarkIcon class="h-8" />
        </BaseButton>
        <select 
            @change="select($event.target.value)"
            class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
        >
            <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
            <option 
                v-for="{value, label} in options" 
                :key="value" :value="value" 
                :selected="value  === selected"
            >
                {{ label }}
            </option>
        </select>
    </div>
</template>

<script setup>

import { computed } from 'vue';

import BaseButton from './BaseButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from '../validators.js';
import { BUTTON_TYPE_NEUTRAL } from '../constants.js';
import { normalizeSelectValue } from '../functions.js';

// defineProps(['options', 'selected', 'placeholder'])

const props = defineProps({
    options: {
        required: true,
        type: Array,
        validator: validateSelectOptions
    },
    selected: [Number, String],
    placeholder: {
        required: true,
        type: String,
    }
})

const emit = defineEmits({
    select: isSelectValueValid
})

const isNotSelected = computed( ()=> isUndefinedOrNull(props.selected) )

function select(value) {
    emit('select', normalizeSelectValue(value))
}

</script>