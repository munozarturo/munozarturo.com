<template>
    <div>
        <h1>Projects</h1>
        <ul>
            <li v-for="project in projects" :key="project._path">
                <NuxtLink :to="project._path">{{ project.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { data: projects } = await useAsyncData("projects", () =>
    queryContent("projects").find()
);
</script>
