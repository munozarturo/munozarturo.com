<template>
    <div
        v-if="mounted"
        class="fixed bottom-24 right-48 transition-opacity duration-200 ease-in-out"
        :class="{
            'opacity-0 pointer-events-none': !showButton,
            'opacity-100': showButton,
        }"
    >
        <button @click="scrollToTop">
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
