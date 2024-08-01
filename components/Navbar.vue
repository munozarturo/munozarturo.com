<template>
    <div class="w-full h-16 flex flex-row">
        <nav
            class="w-full h-full flex flex-row items-center justify-between py-4 pr-4 sm:px-8 md:px-12 lg:px-16"
        >
            <div class="text-xl font-bold">
                <a href="/"><LiveMatrix class="p-4" /></a>
            </div>
            <div class="flex flex-row gap-4">
                <div
                    class="hidden sm:flex flex-row w-full items-center overflow-visible"
                >
                    <a
                        v-for="link in navLinks"
                        :href="link.href"
                        class="w-fit h-fit font-semibold text-lg rounded-md transition-colors duration-200 ease-in-out px-3 hover:bg-background-secondary"
                    >
                        {{ link.label }}
                    </a>
                </div>
                <div class="flex flex-row">
                    <ThemeMenu class="mt-1.5" />
                </div>
                <button @click="showMobile" class="block sm:hidden">
                    <Icon name="menu" class="mt-1" />
                </button>
            </div>
            <div
                class="h-fit w-1/2 sm:w-1/2 lg:w-1/3 xl:w-1/5 fixed top-20 right-0 flex flex-col bg-background-secondary text-foreground rounded-l-md transform transition-all duration-200 ease-in-out z-40 overflow-y-auto p-2"
                :class="
                    showMobileMenu
                        ? 'translate-x-0 opacity-100'
                        : ' translate-x-full opacity-0'
                "
            >
                <div class="flex flex-col w-full overflow-visible">
                    <a
                        v-for="link in navLinks"
                        :href="link.href"
                        class="text-xl font-bold p-2 hover:bg-background rounded-md transition-colors duration-200"
                        >{{ link.label }}</a
                    >
                </div>
            </div>
        </nav>
    </div>
    <div
        v-if="showMobileMenu"
        @click="closeMobile"
        class="fixed inset-0 backdrop-blur-sm z-30"
    ></div>
</template>

<script setup lang="ts">
const showMobileMenu = ref<boolean>(false);

const navLinks = [
    {
        href: "/",
        label: "home",
    },
    {
        href: "/blog",
        label: "blog",
    },
    {
        href: "/projects",
        label: "projects",
    },
    {
        href: "/me",
        label: "me",
    },
];

const toggleBodyScroll = (disable: boolean) => {
    if (disable) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
};

const showMobile = () => {
    showMobileMenu.value = true;
};

const closeMobile = () => {
    showMobileMenu.value = false;
};

onMounted(() => {
    toggleBodyScroll(showMobileMenu.value);
});

onUnmounted(() => {
    toggleBodyScroll(false);
});
</script>
