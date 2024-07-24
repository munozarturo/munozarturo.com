<template>
    <div class="text-md flex flex-col mx-2 bg-highlight rounded-md">
        <div
            class="w-full h-fit flex flex-row items-center justify-between px-4 py-1"
        >
            <p class="font-bold text-secondary">
                {{ language }}
            </p>
            <button class="text-secondary flex items-center" @click="copy">
                <Icon name="copy" class="stroke-current w-5 h-5" />
            </button>
        </div>
        <pre
            ref="codeBlock"
            class="w-full h-fit font-mono p-4 bg-[#272822] overflow-x-auto rounded-md"
        ><slot
        /></pre>
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
