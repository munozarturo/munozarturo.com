<template>
    <div
        v-if="mounted"
        class="fixed bottom-24 right-32 transition-opacity duration-700 ease-in-out"
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
const showButton = ref(false);
const mounted = ref(false);
const scrollThreshold = window.screen.height / 3;

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function handleScroll() {
    showButton.value = window.scrollY > scrollThreshold;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    mounted.value = true;
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
