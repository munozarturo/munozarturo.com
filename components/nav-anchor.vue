<template>
    <a
        v-bind="$attrs"
        class="font-semibold text-lg rounded-md transition-colors duration-300 ease-in-out hover:bg-primary hover:text-secondary py-1 px-2"
        :class="{ 'bg-primary text-secondary': isActive }"
        :href="href"
    >
        <slot />
    </a>
</template>

<script setup lang="ts">
const route = useRoute();

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
});

const isActive = computed(() => route.path == props.href);
</script>
