<template>
    <div
        class="w-full pt-[calc(20vh)] sm:h-[calc(100vh-4rem)] sm:pt-0 px-4 sm:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col-reverse md:flex-col items-center justify-center pb-[calc(4rem)] space-y-6"
    >
        <div
            class="w-full flex flex-row space-x-2 items-center justify-between pt-4"
        >
            <button
                @click="updateCursor(Math.floor(Math.random() * quotes.length))"
            >
                <Icon name="die" class="w-8 h-8" />
            </button>
            <div class="space-x-2">
                <button @click="updateCursor(-1)">
                    <Icon name="left-arrow" class="w-6 h-6" />
                </button>
                <button @click="updateCursor(1)">
                    <Icon name="right-arrow" class="w-6 h-6" />
                </button>
            </div>
        </div>
        <ClientOnly>
            <div class="w-full h-fit flex flex-col justify-center space-y-2">
                <span
                    class="flex flex-row w-full items-center justify-center space-x-4"
                >
                    <p class="font-bold text-5xl">&ldquo;</p>
                    <p class="text-xl sm:text-2xl text-center">
                        {{ quote.quote }}
                    </p>
                    <p class="font-bold text-5xl">&rdquo;</p></span
                >
                <span class="flex flex-row items-center justify-between">
                    <p class="text-sm text-highlight">
                        {{ cursor + 1 }}/{{ quotes.length }}
                    </p>
                    <p
                        v-if="quote.credit"
                        class="text-lg md:text-xl italic font-bold"
                    >
                        &mdash; {{ quote.credit }}
                    </p>
                </span>
                <hr class="border-t border-highlight my-4 mx-2" />
                <span
                    v-if="quote.footnote"
                    class="w-full flex flex-row text-md sm:text-lg items-start justify-start"
                >
                    <p>{{ quote.footnote }}</p>
                </span>
            </div>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "me – quotes",
});

const quotes = (await $fetch("/api/quotes", { method: "GET" })) as unknown as {
    quote: string;
    credit: string;
    footnote: string;
}[];

const cursor = ref(Math.floor(Math.random() * quotes.length));

const quote = computed(() => quotes[cursor.value]);

const updateCursor = (increment: number) => {
    cursor.value = (cursor.value + increment) % quotes.length;
    if (cursor.value < 0) cursor.value = quotes.length - 1;
};
</script>
