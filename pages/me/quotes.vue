<template>
    <div
        class="w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col items-center justify-center pt-48 space-y-6"
    >
        <div
            class="w-full flex flex-row space-x-2 items-center justify-between"
        >
            <button @click="randomizeCursor">
                <div class="w-8 h-8">
                    <Icon name="die" class="w-full h-full" />
                </div>
            </button>
            <div class="space-x-2">
                <button @click="updateCursor(-1)">
                    <Icon name="left-arrow" />
                </button>
                <button @click="updateCursor(1)">
                    <Icon name="right-arrow" />
                </button>
            </div>
        </div>
        <ClientOnly>
            <div class="w-full">
                <span
                    class="flex flex-row w-full items-center justify-center space-x-4"
                    ><p class="font-bold text-5xl">&ldquo;</p>
                    <p class="text-2xl text-center">{{ quote.quote }}</p>
                    <p class="font-bold text-5xl">&rdquo;</p></span
                >
                <span class="flex flex-row items-center justify-between"
                    ><p class="text-sm text-tertiary">
                        {{ cursor + 1 }}/{{ quotes.length }}
                    </p>
                    <p v-if="quote.credit" class="text-xl italic font-bold">
                        &mdash; {{ quote.credit }}
                    </p>
                </span>
                <hr class="border-t border-tertiary my-4 mx-2" />
                <span
                    v-if="quote.footnote"
                    class="w-full flex flex-row items-start justify-end"
                    ><p>{{ quote.footnote }}</p></span
                >
            </div>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
const quotes = (await $fetch("/api/quotes", { method: "GET" })) as unknown as {
    quote: string;
    credit: string;
    footnote: string;
}[];

const cursor = ref(Math.floor(Math.random() * quotes.length));
const randomizeCursor = () => {
    cursor.value = Math.floor(Math.random() * quotes.length);
};

const quote = computed(() => quotes[cursor.value]);

const updateCursor = (increment: number) => {
    cursor.value = (cursor.value + increment) % quotes.length;
    if (cursor.value < 0) cursor.value = quotes.length - 1;
};
</script>
