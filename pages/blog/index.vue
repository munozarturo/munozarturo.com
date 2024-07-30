<template>
    <ArticleList :articles="blog" />
</template>

<script setup lang="ts">
import type { Article } from "~/types";

useHead({
    title: "blog",
});

const { data } = await useAsyncData("blog", () =>
    queryContent("blog").sort({ date: -1 }).find()
);
const blog = data as unknown as Ref<Article[]>;
</script>
