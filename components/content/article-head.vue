<template>
    <div class="flex flex-col space-y-4">
        <div class="flex flex-row justify-between text-md">
            <span
                >{{ page.date }} &centerdot;
                {{ estimateReadingTime(page.body) }} min read</span
            >
            <div class="flex flex-row space-x-2">
                <a v-for="link in links" :href="link.href" target="_blank"
                    ><Icon :name="link.icon"
                /></a>
                <button @click="share"><Icon name="share" /></button>
            </div>
        </div>
        <ProseH1>{{ page.title }}</ProseH1>
        <h2 class="text-3xl font-bold text-tertiary">{{ page.subtitle }}</h2>
        <div class="flex fex-row space-x-2 text-tertiary">
            <p v-for="tag in page.tags">#{{ tag }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const url = useRequestURL();
const toaster = useToasterStore();

const props = defineProps({
    page: {
        type: Object,
        required: true,
    },
});

const links = computed(
    () => props.page.links as { icon: string; href: string }[]
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
