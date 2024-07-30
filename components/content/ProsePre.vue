<template>
    <div
        class="text-md relative flex flex-col mx-2 bg-background-secondary group rounded-md"
    >
        <div
            class="w-full h-fit flex flex-row text-sm items-center justify-between px-4 pt-2 pb-1 select-none"
        >
            <p>
                {{ language }}
            </p>
        </div>
        <pre
            ref="codeBlock"
            class="w-full h-fit font-mono px-4 pb-8 overflow-x-auto rounded-b-md"
        ><slot/></pre>
        <button
            class="absolute bottom-0.5 right-0.5 p-1 text-sm opacity-0 transition-opacity duration-200 text-foreground-secondary group-hover:opacity-100 group-[.show-file-multi]:opacity-100"
            @click="copy"
        >
            <Icon name="copy" class="stroke-current w-5 h-5" />
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    language: {
        type: String,
        default: null,
    },
});

const toaster = useToasterStore();
const codeBlock = ref<HTMLPreElement | null>(null);

function copy(): void {
    if (codeBlock.value) {
        try {
            navigator.clipboard.writeText(codeBlock.value.textContent || "");

            toaster.addMessage("Copied", "success");
        } catch (e: any) {
            toaster.addMessage("Failed to copy.", "error");
        }
    } else {
        toaster.addMessage("Nothing to copy.", "error");
    }
}
</script>

<style scoped>
pre {
    scrollbar-width: thin;
    scrollbar-color: var(--foreground) transparent;
}

pre::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

pre::-webkit-scrollbar-track {
    background: transparent;
}

pre::-webkit-scrollbar-thumb {
    background-color: var(--foreground);
    border-radius: 20px;
    border: 3px solid transparent;
}
</style>
