<template>
    <article v-if="page" class="w-3/5 pt-8">
        <h1>{{ page.title }}</h1>
        <ContentRenderer :value="page">
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </article>
</template>

<script setup>
const { path } = useRoute();
const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryContent().where({ _path: path }).findOne()
);
</script>
