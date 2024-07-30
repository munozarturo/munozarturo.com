<template>
    <div class="fixed top-32 right-32 w-64">
        {{ toc }}
    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
import type { PropType } from "vue";

const props = defineProps({
    page: {
        type: Object as PropType<ParsedContent>,
        required: true,
    },
});

const toc = computed(() => props.page.body?.toc?.links || []);
</script>
