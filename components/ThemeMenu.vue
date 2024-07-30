<template>
    <div>
        <button @click="toggleMenu">
            <Icon name="palette" class="w-6 h-6" />
        </button>
        <div
            class="h-fit w-5/6 sm:w-1/2 lg:w-1/3 xl:w-1/5 fixed top-20 right-0 flex flex-col gap-2 bg-background-secondary text-foreground rounded-l-md transform transition-all duration-200 ease-in-out z-40 overflow-y-auto p-2"
            :class="
                showMenu
                    ? 'translate-x-0 opacity-100'
                    : ' translate-x-full opacity-0'
            "
        >
            <div class="p-4 flex flex-col gap-4">
                <!-- Font Size Selector -->
                <div>
                    <div
                        class="flex flex-row items-center justify-between mb-2"
                    >
                        <h2 class="text-lg font-semibold">font size</h2>
                        <button
                            class="flex flex-row items-center justify-center"
                            @click="closeMenu"
                        >
                            <Icon name="close" class="w-3 h-3" />
                        </button>
                    </div>
                    <div
                        class="flex flex-row flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            v-for="fontSize in fontSizes"
                            :key="fontSize"
                            @click="setFontSize(fontSize)"
                            class="flex flex-col items-center justify-center p-2 rounded-md select-none"
                            :class="{
                                'bg-background': currentFontSize === fontSize,
                            }"
                        >
                            <p class="text-md">
                                {{ fontSize }}
                            </p>
                        </button>
                    </div>
                </div>
                <!--  -->
                <div>
                    <h2 class="text-lg font-semibold mb-2">font type</h2>
                    <div
                        class="flex flex-row flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            v-for="fontType in fontTypes"
                            :key="fontType"
                            @click="setFontType(fontType)"
                            class="flex flex-col items-center justify-center w-14 p-2 rounded-md select-none"
                            :class="{
                                'bg-background': currentFontType === fontType,
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
                    <h2 class="text-lg font-semibold mb-2">color scheme</h2>
                    <div
                        class="flex flex-row flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            v-for="theme in themes"
                            :key="theme"
                            @click="setTheme(theme)"
                            class="flex flex-col items-center justify-center w-16 p-2 rounded-md select-none"
                            :class="{
                                'bg-background': currentTheme === theme,
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
const { $classInject } = useNuxtApp();

const fontSizes: string[] = ["sm", "md", "lg"];
const fontSizeIndex = ref<number>(0);
const currentFontSize = ref<string | null>(null);
const fontTypes: string[] = ["serif", "sans", "mono"];
const currentFontType = ref<string | null>(null);
const themes: string[] = [
    "light",
    "paper",
    "dark",
    "desert",
    "forest",
    "ocean",
];
const currentTheme = ref<string | null>(null);

const setFontSize = (size: string) => {
    const current: string[] = $classInject.classList.value;

    const classList = current.filter((cls) => !cls.startsWith("size-"));
    classList.push(`size-${size}`);

    $classInject.classList.value = classList;
    currentFontSize.value = size;
};

const setFontType = (font: string) => {
    const current: string[] = $classInject.classList.value;

    const classList = current.filter((cls) => !cls.startsWith("font-"));
    classList.push(`font-${font}`);

    $classInject.classList.value = classList;
    currentFontType.value = font;
};

const setTheme = (theme: string) => {
    const current: string[] = $classInject.classList.value;

    const classList = current.filter((cls) => !cls.startsWith("theme-"));
    classList.push(`theme-${theme}`);

    $classInject.classList.value = classList;
    currentTheme.value = theme;
};

function fetchCurrent(): void {
    const current: string[] = $classInject.classList.value;

    fontSizes.forEach((size, index) => {
        if (current.includes(`size-${size}`)) {
            currentFontSize.value = size;
            fontSizeIndex.value = index;
        }
    });

    fontTypes.forEach((font) => {
        if (current.includes(`font-${font}`)) currentFontType.value = font;
    });

    themes.forEach((theme) => {
        if (current.includes(`theme-${theme}`)) currentTheme.value = theme;
    });
}

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
    fetchCurrent();
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
    width: 0.25rem;
    height: 1rem;
    border-radius: 0px;
    background-color: var(--foreground);
    margin-top: -0.4rem;
    position: relative;
    z-index: 10;
}
</style>
