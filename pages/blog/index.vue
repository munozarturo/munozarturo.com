<template>
    <div>
        <h1>Blog Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post._path">
                <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", () =>
    queryContent("blog").find()
);
</script>
