<template>
    <img class="max-w-full h-auto rounded-md" :src="src" :alt="alt" />
</template>

<script setup lang="ts">
const props = defineProps<{
    src: string;
    alt?: string;
}>();
</script>
