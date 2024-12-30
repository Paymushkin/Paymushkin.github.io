<template>
    <form @submit.prevent="submit"
        class="stiky bottom-[57px] flex gap-2 border-t bg-white p-4"
    >
        <input 
            type="text" 
            placeholder="Activity name" 
            class="w-full rounded border px-4 text-xl" 
            v-model="name"
        >
        <BaseButton :disabled="name.trim() === ''">
            <PlusIcon class="h-8" />
        </BaseButton>
    </form>
</template>

<script setup>

import { nextTick, ref } from 'vue';

import { PlusIcon } from '@heroicons/vue/24/outline';
import BaseButton from './BaseButton.vue';

import { id } from '../functions'
import { isActivityValid } from '../validators';

const emit = defineEmits({
    submit: isActivityValid
})

async function submit() {
    emit('submit', {
        id: id(),
        name: name.value,
        secondsToComplete: 0
    })

    name.value = ''

    await nextTick()

    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    })
}

const name = ref('')

</script>