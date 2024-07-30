<template>
    <ScrollToTop />
    <div class="w-full px-4 max-w-[768px] flex flex-col py-8">
        <ul class="space-y-6">
            <li
                v-for="article in articles"
                :key="article._path"
                class="relative group"
            >
                <div
                    class="hover-indicator absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-5xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none"
                >
                    <Icon name="right-arrow" />
                </div>
                <NuxtLink
                    :to="article._path"
                    class="w-full h-fit flex flex-col"
                >
                    <div class="flex flex-row items-end justify-between">
                        <h1 v-if="article.title" class="text-4xl font-bold">
                            {{ article.title }}
                        </h1>
                    </div>
                    <p v-if="article.date">
                        {{ formatDate(new Date(article.date)) }}
                    </p>
                    <h2
                        v-if="article.subtitle"
                        class="text-2xl font-bold text-highlight"
                    >
                        {{ article.subtitle }}
                    </h2>
                    <div class="flex fex-row space-x-2 text-highlight">
                        <p v-for="tag in article.tags">#{{ tag }}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { Article } from "~/types";

defineProps({
    articles: {
        type: Array as PropType<Article[]>,
        required: true,
    },
});
</script>
