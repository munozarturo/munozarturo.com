<template>
    <div
        class="px-4 sm:w-2/3 pt-[calc(30vh)] sm:h-[calc(100vh-4rem)] flex flex-col items-start gap-2"
    >
        <h1
            class="flex flex-row items-center justify-center text-4xl sm:text-5xl font-bold"
        >
            i'm still working on this bit.
        </h1>
        <div class="text-2xl pl-2">
            for now I've only got my
            <a
                href="/me/resume"
                class="p-1 pt-0.5 hover:bg-background-secondary transition-colors duration-200 rounded-sm font-semibold underline"
                >resume</a
            >
            and some
            <a
                href="/me/quotes"
                class="p-1 pt-0.5 hover:bg-background-secondary transition-colors duration-200 rounded-sm font-semibold underline"
                >quotes</a
            >
            I like on here.
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "me",
});
</script>
