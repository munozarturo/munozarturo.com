<template>
    <ScrollToTop />
    <div class="w-full px-4 max-w-[768px] flex flex-col py-8">
        <ul class="space-y-6">
            <li
                v-for="blog in blog"
                :key="blog._path"
                class="project-item relative group"
            >
                <div
                    class="hover-indicator absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-5xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none"
                >
                    <Icon name="right-arrow" />
                </div>
                <NuxtLink :to="blog._path" class="w-full h-fit flex flex-col">
                    <div class="flex flex-row items-end justify-between">
                        <h1 class="text-4xl font-bold">{{ blog.title }}</h1>
                    </div>
                    <p>{{ formatDate(new Date(blog.date)) }}</p>
                    <h2 class="text-2xl font-bold text-highlight">
                        {{ blog.subtitle }}
                    </h2>
                    <div class="flex fex-row space-x-2 text-highlight">
                        <p v-for="tag in blog.tags">#{{ tag }}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
useHead({
    title: "blog",
});

const { data: blog } = await useAsyncData("blog", () =>
    queryContent("blog").sort({ date: -1 }).find()
);
</script>
