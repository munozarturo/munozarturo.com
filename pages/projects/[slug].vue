<template>
    <Article :article="page" />
</template>

<script setup lang="ts">
import type { Article } from "~/types";

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () =>
    queryContent().where({ _path: path }).findOne()
);
const page = data as unknown as Ref<Article>;

useHead({
    title: `projects – ${page.value?.title}`,
});
</script>
