<template>
    <img class="max-w-full h-auto" :src="src" :alt="alt" />
</template>

<script setup lang="ts">
const props = defineProps<{
    src: string;
    alt?: string;
}>();
</script>
