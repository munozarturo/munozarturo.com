<template>
    <div>
        <button @click="toggleMenu">
            <Icon name="palette" class="w-6 h-6" />
        </button>
        <div
            class="fixed top-24 right-12 w-1/5 rounded-xl bg-secondary h-fit shadow-lg transform transition-all duration-700 ease-in-out z-40 overflow-y-auto"
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
                            class="relative w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:bg-tertiary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:mt-[-4px] [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 cursor-pointer"
                        />
                        <div
                            class="absolute bottom-0.5 left-0 right-0 flex justify-between px-1 pointer-events-none -z-10"
                        >
                            <span
                                v-for="(size, index) in fontSizes"
                                :key="index"
                                class="w-0.5 h-3 bg-tertiary"
                            ></span>
                        </div>
                        <div
                            class="absolute top-1 left-0 right-0 flex justify-between px-1"
                        >
                            <span
                                v-for="(size, index) in fontSizes"
                                :key="index"
                                class="text-md text-tertiary transform -translate-x-1/3"
                                :class="{
                                    'text-primary':
                                        index === selectedFontSizeIndex,
                                }"
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
                                'bg-tertiary': selectedFontType === fontType,
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
                            v-for="theme in Object.keys(themes)"
                            :key="theme"
                            @click="selectTheme(theme)"
                            class="flex flex-col items-center justify-center w-16 p-2 rounded-md"
                            :class="{ 'bg-tertiary': selectedTheme === theme }"
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
            class="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

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

interface Theme {
    background: string;
    foreground: string;
    highlight: string;
}

const themes: { [key: string]: Theme } = {
    light: {
        background: "#FEFEFF",
        foreground: "#313131",
        highlight: "#474DD6",
    },
    paper: {
        background: "#F9F6F0",
        foreground: "#313131",
        highlight: "#474DD6",
    },
    dark: {
        background: "#1E1E1E",
        foreground: "#C9C7B3",
        highlight: "#72716D",
    },
    desert: {
        background: "#332A2C",
        foreground: "#CFA476",
        highlight: "#89602F",
    },
    ocean: {
        background: "#06273A",
        foreground: "#128898",
        highlight: "#0A4858",
    },
    forest: {
        background: "#052529",
        foreground: "#129878",
        highlight: "#0B5E50",
    },
};
const selectedTheme = ref(Object.keys(themes)[0]); // Default to the first theme
const selectTheme = (theme: string) => {
    selectedTheme.value = theme;
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
