<template>
    <div class="flex flex-col">
        <div
            class="w-full h-fit flex flex-row justify-between px-2 py-1 bg-primary rounded-t-md"
        >
            <p class="font-bold text-background">{{ lang }}</p>
            <button class="font-bold text-background">copy</button>
        </div>
        <code class="w-full h-fit font-mono p-2 rounded-b-md border"
            ><slot
        /></code>
    </div>
</template>

<script setup lang="ts">
defineProps({
    lang: {
        type: String,
        required: false,
    },
});
</script>
