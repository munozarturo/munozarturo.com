<template>
    <a v-bind="$attrs" class="font-bold text-lg" :href="href">
        <slot />
    </a>
</template>

<script setup lang="ts">
defineProps({
    href: {
        type: String,
    },
});
</script>
