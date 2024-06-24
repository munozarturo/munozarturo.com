<template>
    <a class="underline" target="_blank" :href="href"><slot /></a>
</template>

<script setup lang="ts">
defineProps({
    href: {
        type: String,
        required: true,
    },
});
</script>
