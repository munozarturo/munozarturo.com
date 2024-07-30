<template>
    <a
        v-bind="$attrs"
        class="font-semibold text-lg rounded-md transition-colors duration-300 ease-in-out py-1 px-2"
        :class="{ 'bg-foreground text-background': isActive }"
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

<style lang="css" scoped>
a:hover {
    background-color: var(--foreground);
    color: var(--background);
}
</style>
