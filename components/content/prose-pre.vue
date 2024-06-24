<template>
    <div class="flex flex-col mx-4">
        <div
            class="w-full h-fit flex flex-row justify-between px-2 py-1 bg-primary rounded-t-md"
        >
            <p class="font-bold text-secondary">{{ language }}</p>
            <button class="font-bold text-secondary">copy</button>
        </div>
        <pre class="w-full h-fit font-mono p-2 rounded-b-md border"><slot
        /></pre>
    </div>
</template>

<script setup lang="ts">
defineProps({
    language: {
        type: String,
        default: null,
    },
});
</script>
