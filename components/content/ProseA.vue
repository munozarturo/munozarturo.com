<template>
    <a class="underline items-center" target="_blank" :href="href"
        ><slot /><Icon name="export" class="ml-1 w-4 h-4" />
    </a>
</template>

<script setup lang="ts">
defineProps({
    href: {
        type: String,
        required: true,
    },
});
</script>
