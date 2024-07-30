<template>
    <div class="flex flex-col space-y-4 pb-2">
        <div class="flex flex-row justify-between text-md">
            <span class="flex flex-row gap-1">
                <p v-if="article.date">
                    {{ formatDate(new Date(article.date)) }}
                </p>
                <p v-if="article.date && article.body" class="font-bold">
                    &centerdot;
                </p>
                <p v-if="article.body">
                    {{ estimateReadingTime(article.body) }} min read
                </p>
            </span>
            <div class="flex flex-row space-x-2">
                <a v-for="link in links" :href="link.href" target="_blank">
                    <Icon :name="link.icon" />
                </a>
                <button @click="share"><Icon name="share" /></button>
            </div>
        </div>
        <ProseH1 v-if="article.title">{{ article.title }}</ProseH1>
        <h2
            v-if="article.subtitle"
            class="text-2xl sm:text-3xl font-bold text-highlight"
        >
            {{ article.subtitle }}
        </h2>
        <div v-if="article.tags" class="flex fex-row space-x-2 text-highlight">
            <p v-for="tag in article.tags">#{{ tag }}</p>
        </div>
        <div v-if="article.banner" class="w-full h-auto">
            <img
                :src="article.banner"
                alt="Project Banner"
                class="rounded-md"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from "~/types";

const url = useRequestURL();
const toaster = useToasterStore();

const props = defineProps({
    article: {
        type: Object as PropType<Article>,
        required: true,
    },
});

const links = computed(
    () => props.article.links as { icon: string; href: string }[]
);

function share(): void {
    try {
        navigator.clipboard.writeText(url.toString());
        toaster.addMessage("Link Copied.", "success");
    } catch (e: any) {
        toaster.addMessage("Failed to copy.", "error");
    }
}

function estimateReadingTime(content: any): number {
    const countWords = (text: string): number => {
        return text.trim().split(/\s+/).length;
    };

    const processContent = (node: any): number => {
        if (typeof node === "string") return countWords(node);

        if (Array.isArray(node))
            return node.reduce((sum, child) => sum + processContent(child), 0);

        if (typeof node === "object" && node !== null) {
            if (node.type === "element" && node.tag === "pre") return 0;
            if (node.children) return processContent(node.children);
            if (node.value) return countWords(node.value);
        }

        return 0;
    };

    const totalWords = processContent(content);
    const readingTimeMinutes = Math.ceil(totalWords / 200);

    return readingTimeMinutes;
}
</script>
