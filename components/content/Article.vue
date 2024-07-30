<template>
    <article v-if="article" class="w-full px-4 max-w-[768px] pt-8">
        <!-- <TableOfContents :article="article" /> -->
        <ScrollToTop />
        <ArticleHead :article="article" />
        <ContentRenderer :value="article" class="space-y-6 pb-16">
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </article>
</template>

<script setup lang="ts">
import type { Article } from "~/types";

defineProps({
    article: {
        type: Object as PropType<Article>,
        required: true,
    },
});
</script>
