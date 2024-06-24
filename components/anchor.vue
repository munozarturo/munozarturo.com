<template>
    <a v-bind="$attrs" class="font-semibold underline" :href="href">
        <slot />
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
