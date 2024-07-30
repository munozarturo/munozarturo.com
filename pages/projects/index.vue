<template>
    <ArticleList :articles="projects" />
</template>

<script setup lang="ts">
import type { Article } from "~/types";

useHead({
    title: "projects",
});

const { data } = await useAsyncData("projects", () =>
    queryContent("projects").sort({ date: -1 }).find()
);
const projects = data as unknown as Ref<Article[]>;
</script>
