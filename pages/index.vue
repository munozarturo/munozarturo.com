<template>
    <div class="w-1/2 flex flex-col items-start justify-center space-y-4 pt-60">
        <h1
            class="flex flex-row items-center justify-center text-5xl font-bold"
        >
            hello.
        </h1>
        <div class="text-2xl pl-2">
            My name is Arturo Muñoz, I am a college student completing my
            Bachelor's Degree in Computer Science and this is a digital catalog
            of <a href="/me" class="font-semibold underline">me</a>, my
            <a href="/blog" class="font-semibold underline">thoughts</a> and my
            <a href="/projects" class="font-semibold underline">projects</a>.
        </div>
        <div
            class="pl-4 space-x-4 w-full flex flex-row items-center justify-start"
        >
            <a href="https://github.com/munozarturo" target="_blank"
                ><Icon name="github" class="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/arturoomunoz/" target="_blank"
                ><Icon name="linkedin" class="w-8 h-8" />
            </a>
            <a href="mailto:arm343@case.edu" target="_blank"
                ><Icon name="envelope" class="w-8 h-8" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "home",
});
</script>
