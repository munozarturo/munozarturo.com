<template>
    <div class="flex flex-col items-center justify-center space-y-2">
        <img :src="src" :alt="alt" class="rounded-md" :class="styleClass" />
        <p class="w-full italic text-md">{{ caption }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    src: string;
    alt: string;
    caption?: string;
    styleClass?: string;
}>();
</script>
