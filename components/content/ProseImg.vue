<template>
    <div class="flex flex-row items-center justify-center">
        <img class="max-w-full h-auto rounded-md" :src="src" :alt="alt" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    src: string;
    alt?: string;
}>();
</script>
