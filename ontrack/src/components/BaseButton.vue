<template>
    <button :class="classes">
        <slot/>
    </button>
</template>

<script setup>

import { isButtonTypeValid } from '../validators.js';

const props = defineProps({
    type: {
        default: BUTTON_TYPE_PRIMARY,
        type: String,
        validator: isButtonTypeValid
    }
})

const classes = [
    'rounded p-3 disabled:cursor-not-allowed disabled:opacity-50 duration-300',
    typeClasses[props.type]
]

</script>

<script>

import { 
    BUTTON_TYPE_DANGER, 
    BUTTON_TYPE_NEUTRAL, 
    BUTTON_TYPE_PRIMARY,
    BUTTON_TYPE_SUCCESS, 
    BUTTON_TYPE_WARNING,
} from '../constants.js';

const typeClasses = {
    [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
    [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
    [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-600 text-white',
    [BUTTON_TYPE_SUCCESS]: 'bg-green-500 enabled:hover:bg-green-600 text-white',
    [BUTTON_TYPE_WARNING]: 'bg-yellow-500 enabled:hover:bg-yellow-600 text-white'
}
</script>