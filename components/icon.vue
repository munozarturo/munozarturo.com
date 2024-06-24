<template>
    <component :is="svgComponent" :class="['icon', props.class]" />
</template>

<script lang="ts" setup>
import { defineAsyncComponent, computed, h, defineComponent } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        default: "",
    },
});

const svgComponent = computed(() =>
    defineAsyncComponent(async () => {
        const svgContent = await import(
            `~/assets/icons/${props.name}.svg?raw`
        ).then((m) => m.default);
        return defineComponent({
            setup() {
                return () =>
                    h("div", {
                        class: "svg-icon",
                        innerHTML: svgContent,
                    });
            },
        });
    })
);
</script>

<style scoped>
.icon {
    display: inline-block;
}
.svg-icon {
    display: inline-block;
}
.svg-icon :deep(svg) {
    width: 100%;
    height: 100%;
}
</style>
