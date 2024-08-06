<template>
    <div
        v-if="mounted"
        class="fixed bottom-12 right-24 xl:bottom-24 xl:right-48 transition-opacity duration-200 ease-in-out hidden lg:block"
        :class="{
            'opacity-0 pointer-events-none': !showButton,
            'opacity-100': showButton,
        }"
    >
        <button
            @click="scrollToTop"
            class="p-1.5 rounded-sm hover:bg-background-secondary transition-colors duration-200 flex flex-row items-center justify-center"
        >
            <Icon name="arrow-up" class="w-6 h-6" />
        </button>
    </div>
</template>

<script setup lang="ts">
const showButton = ref<boolean>(false);
const mounted = ref<boolean>(false);
const scrollThreshold = ref<number>(400);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function handleScroll() {
    showButton.value = window.scrollY > scrollThreshold.value;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    mounted.value = true;
    scrollThreshold.value = window.screen.height / 3;
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
