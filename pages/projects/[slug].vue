<template>
    <article v-if="page" class="w-1/2 pt-8">
        <ArticleHead :page="page" />
        <ContentRenderer :value="page">
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
