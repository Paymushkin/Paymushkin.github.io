<template>
    <component :is="icons[name]" /> 

</template>

<script setup>

defineProps({
    name: {
        required: true,
        type: String
    }
})

</script>