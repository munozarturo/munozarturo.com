<template>
    <div class="w-full px-4 md:w-2/3 md:px-0 lg:w-1/2 flex flex-col py-8">
        <ul class="space-y-6">
            <li
                v-for="project in projects"
                :key="project._path"
                class="project-item relative group"
            >
                <div
                    class="hover-indicator absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-5xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none"
                >
                    <Icon name="right-arrow" />
                </div>
                <NuxtLink
                    :to="project._path"
                    class="w-full h-fit flex flex-col"
                >
                    <div class="flex flex-row items-end justify-between">
                        <h1 class="text-4xl font-bold">{{ project.title }}</h1>
                        <p>{{ formatDate(new Date(project.date)) }}</p>
                    </div>
                    <h2 class="text-2xl font-bold text-tertiary">
                        {{ project.subtitle }}
                    </h2>
                    <div class="flex fex-row space-x-2 text-tertiary">
                        <p v-for="tag in project.tags">#{{ tag }}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { data: projects } = await useAsyncData("projects", () =>
    queryContent("projects").find()
);
</script>
