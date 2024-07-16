<template>
    <article v-if="page" class="w-full px-4 max-w-[768px] pt-8">
        <!-- <TableOfContents :page="page" /> -->
        <ScrollToTop />
        <ArticleHead :page="page" />
        <ContentRenderer :value="page" class="space-y-6 pb-16">
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </article>
</template>

<script setup lang="ts">
const { path } = useRoute();
const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryContent().where({ _path: path }).findOne()
);
</script>
