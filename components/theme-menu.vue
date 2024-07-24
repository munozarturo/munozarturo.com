<template>
    <div>
        <button @click="toggleMenu">
            <Icon name="palette" class="w-6 h-6" />
        </button>
        <div
            class="fixed top-24 right-12 w-1/5 rounded-xl bg-background h-fit border-2 border-foreground transform transition-all duration-700 ease-in-out z-40 overflow-y-auto"
            :class="
                showMenu
                    ? 'translate-x-0 opacity-100'
                    : ' translate-x-[120%] opacity-0'
            "
        >
            <div class="p-4 flex flex-col gap-8">
                <div class="flex flex-row items-center justify-between">
                    <h1 class="font-bold text-xl">Theme</h1>
                    <button @click="closeMenu">
                        <Icon name="close" class="w-4 h-4" />
                    </button>
                </div>

                <!-- Font Size Selector -->
                <div>
                    <h2 class="text-lg font-semibold mb-2">Font Size</h2>
                    <div class="relative pt-6 px-1">
                        <input
                            type="range"
                            :min="0"
                            :max="fontSizes.length - 1"
                            v-model="selectedFontSizeIndex"
                            @input="updateFontSize"
                            class="relative w-full appearance-none bg-transparent slider"
                        />
                        <div
                            class="absolute bottom-0.5 left-0 right-0 flex justify-between px-1 pointer-events-none -z-10"
                        >
                            <span
                                v-for="(size, index) in fontSizes"
                                :key="index"
                                class="w-0.5 h-3 bg-foreground"
                            ></span>
                        </div>
                        <div
                            class="absolute top-1 left-0 right-0 flex justify-between px-1"
                        >
                            <span
                                v-for="(size, index) in fontSizes"
                                :key="index"
                                class="text-md text-foreground transform -translate-x-1/3"
                            >
                                {{ size }}
                            </span>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div>
                    <h2 class="text-lg font-semibold mb-2">Font Type</h2>
                    <div
                        class="flex flex-row flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            v-for="fontType in fontTypes"
                            :key="fontType"
                            @click="selectFontType(fontType)"
                            class="flex flex-col items-center justify-center w-14 p-2 rounded-md"
                            :class="{
                                'bg-background-secondary':
                                    selectedFontType === fontType,
                            }"
                        >
                            <Icon :name="fontType" class="w-8 h-8" />
                            <p class="text-md">
                                {{ fontType }}
                            </p>
                        </button>
                    </div>
                </div>
                <!--  -->
                <div>
                    <h2 class="text-lg font-semibold mb-2">Color Scheme</h2>
                    <div
                        class="flex flex-row flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            v-for="theme in themes"
                            :key="theme"
                            @click="selectTheme(theme)"
                            class="flex flex-col items-center justify-center w-16 p-2 rounded-md"
                            :class="{
                                'bg-background-secondary':
                                    selectedTheme === theme,
                            }"
                        >
                            <Icon :name="theme" class="w-12 h-12" />
                            <p class="text-md mt-1">
                                {{ theme }}
                            </p>
                        </button>
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
        <div
            v-if="showMenu"
            @click="closeMenu"
            class="fixed inset-0 backdrop-blur-sm z-30"
        ></div>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const fontSizes: string[] = ["xs", "sm", "md", "lg", "xl"];
const selectedFontSizeIndex = ref<number>(2);
const updateFontSize = () => {
    const selectedSize = fontSizes[selectedFontSizeIndex.value];
};

const fontTypes: string[] = ["serif", "sans", "mono"];
const selectedFontType = ref(fontTypes[1]);
const selectFontType = (fontType: string) => {
    selectedFontType.value = fontType;
};

const themeStore = useThemeStore();

const themes: string[] = themeStore.availableThemes;
const selectedTheme = ref(themeStore.theme);
const selectTheme = (theme: string) => {
    selectedTheme.value = theme;
    themeStore.setTheme(theme);
    colorMode.preference = theme;
};

const showMenu = ref<boolean>(false);

const toggleBodyScroll = (disable: boolean) => {
    if (disable) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
};

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
    toggleBodyScroll(showMenu.value);
};

const closeMenu = () => {
    showMenu.value = false;
    toggleBodyScroll(false);
};

onMounted(() => {
    toggleBodyScroll(showMenu.value);
});

onUnmounted(() => {
    toggleBodyScroll(false);
});
</script>

<style scoped>
.slider::-webkit-slider-runnable-track {
    height: 0.25rem;
    background-color: var(--foreground);
}

.slider::-webkit-slider-thumb {
    appearance: none;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 9999px;
    background-color: var(--foreground);
    margin-top: -0.25rem;
    position: relative;
    z-index: 10;
}
</style>
